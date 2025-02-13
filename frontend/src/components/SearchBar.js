import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a medicine name.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/search?name=${query}`
      );
      setResult(response.data);
      setError("");
    } catch (err) {
      setResult(null);
      setError("Medicine not found.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6dd5fa, #2980b9)",
        color: "#fff",
        fontFamily: "'Roboto', sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
          padding: "30px",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
          color: "#333",
        }}
      >
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#4CAF50" }}>
          Medicine Search
        </h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter medicine name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#45a049")}
            onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
          >
            Search
          </button>
        </div>

        {error && (
          <p
            style={{
              color: "#f44336",
              fontSize: "16px",
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            {error}
          </p>
        )}

        {result && (
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              background: "#f9f9f9",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#2980b9",
                marginBottom: "15px",
              }}
            >
              Medicine Details
            </h3>
            <p style={{ fontSize: "16px", margin: "5px 0" }}>
              <strong>ID:</strong> {result.id}
            </p>
            <p style={{ fontSize: "16px", margin: "5px 0" }}>
              <strong>Name:</strong> {result.medicine}
            </p>
            <p style={{ fontSize: "16px", margin: "5px 0" }}>
              <strong>Usage:</strong> {result.usage}
            </p>
            <p style={{ fontSize: "16px", margin: "5px 0" }}>
              <strong>Chemical Class:</strong> {result.chemicalClass}
            </p>
            <p style={{ fontSize: "16px", margin: "5px 0" }}>
              <strong>Therapeutic Class:</strong> {result.therapeuticClass}
            </p>

            <h4
              style={{
                color: "#4CAF50",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Side Effects
            </h4>
            <ul style={{ textAlign: "left", padding: "0 20px" }}>
              {result.sideEffects.map((effect, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "14px",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  {effect}
                </li>
              ))}
            </ul>

            <h4
              style={{
                color: "#4CAF50",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              Substitutes
            </h4>
            <ul style={{ textAlign: "left", padding: "0 20px" }}>
              {result.substitutes.map((sub, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "14px",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
