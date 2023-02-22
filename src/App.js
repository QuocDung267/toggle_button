import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [showButtons, setShowButtons] = useState(false);
  function handleShowButtons() {
    setShowButtons(true);
  }
  function handleCancel() {
    setShowButtons(false);
  }
  return (
    <div className="App">
      <div>
        {!showButtons && <button onClick={handleShowButtons}>Hiển thị</button>}
        {showButtons && (
          <div>
            <button>Button 1</button>
            <button>Button 2</button>
            <button onClick={handleCancel}>Hủy</button>
          </div>
        )}
      </div>
    </div>
  );
}
