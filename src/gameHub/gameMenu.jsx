import React, { useState, useEffect, useRef } from "react";

const GameMenu = () => {
  const menuItems = ["Start Game", "Load Game", "Settings", "Exit"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    // Auto-focus for key events
    menuRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
    } else if (e.key === "Enter") {
      alert(`You selected: ${menuItems[selectedIndex]}`);
    }
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={handleKeyDown}
      ref={menuRef}
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        background: "#111",
        color: "#fff",
        fontFamily: "Arial",
        borderRadius: "10px",
        outline: "none"
      }}
    >
      <h2 style={{ textAlign: "center" }}>🎮 Game Menu</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              background: selectedIndex === index ? "#444" : "transparent",
              border: selectedIndex === index ? "2px solid #fff" : "2px solid transparent",
              borderRadius: "5px",
              margin: "10px 0",
              textAlign: "center",
              cursor: "pointer"
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "center", fontSize: "12px", opacity: 0.6 }}>
        Use ↑ ↓ to move, Enter to select
      </p>
    </div>
  );
};

export default GameMenu;