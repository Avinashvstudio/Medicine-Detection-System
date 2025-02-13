import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box", overflowX: "hidden" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "10px", 
          marginBottom: "20px", 
        }}
      >
        Medication Detection System
      </h1>
      <SearchBar />
    </div>
  );
}

export default App;
