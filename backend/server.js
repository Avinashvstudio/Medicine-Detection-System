const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csvParser = require("csv-parser");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;


const medicines = [];
fs.createReadStream("../dataset/medicine_dataset - Copy.csv") 
  .pipe(csvParser())
  .on("data", (row) => {
    const normalizedRow = Object.keys(row).reduce((acc, key) => {
      acc[key.toLowerCase()] = row[key];
      return acc;
    }, {});
    medicines.push(normalizedRow);
  })
  .on("end", () => {
    console.log("✅ Medication dataset loaded successfully.");
  })
  .on("error", (err) => {
    console.error("❌ Error loading the dataset:", err);
  });

app.get("/search", (req, res) => {
  const medicineName = req.query.name;

  if (!medicineName) {
    return res.status(400).json({ error: "Medicine name is required!" });
  }

  const result = medicines.find(
    (med) => med.name && med.name.toLowerCase() === medicineName.toLowerCase()
  );

  if (!result) {
    return res.status(404).json({ error: "Medicine not found" });
  }

  res.json({
    id: result.id,
    medicine: result.name,
    substitutes: [
      result.substitute0,
      result.substitute1,
      result.substitute2,
      result.substitute3,
    ].filter(Boolean),
    usage: result.usage || "No usage information available",
    sideEffects: [
      result["side effects"],
      result.sideeffect1,
      result.sideeffect2,
    ].filter(Boolean),
    chemicalClass: result["chemical class"] || "Unknown",
    therapeuticClass: result["therapeutic class"] || "Unknown",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
