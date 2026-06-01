import React, { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleContinue = () => {
    alert(
      selectedDate
        ? `Selected date: ${selectedDate}`
        : "No date selected"
    );
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Flight Schedule</h1>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

      <br /><br />

      <button onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default App;
