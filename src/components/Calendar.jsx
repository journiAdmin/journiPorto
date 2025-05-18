import React, { useState } from "react";
import { motion } from "framer-motion";

const Calendar = () => {
  const [fallenBricks, setFallenBricks] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    if (!fallenBricks.includes(day)) {
      setSelectedDay(day);
    }
  };

  const confirmFall = () => {
    setFallenBricks([...fallenBricks, selectedDay]);
    setSelectedDay(null);
  };

  const cancelFall = () => {
    setSelectedDay(null);
  };

  const calendarStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    backgroundImage:
      "url('https://i.pinimg.com/originals/eb/e1/94/ebe1949f3ad1e4c8fc05493d4ea5022e.gif')",
    backgroundSize: "cover",
    gap: "0px",
    maxWidth: "900px",
    margin: "40px auto",
    padding: "10px",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontFamily: "Fontdiner Swanky",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const boxStyle = {
    border: "solid lightblue",
    height: "60px",
    width: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
    borderRadius: "5px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
    cursor: "pointer",
    backgroundColor: "#333C3F",
    color: "lightblue",
  };

  const fallenStyle = {
    backgroundColor: "#ccc",
    color: "#333",
    cursor: "default",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  const buttonGroupStyle = {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontWeight: "bold",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  };

  return (
    <div>
      <h2 style={headingStyle}>Schedule Individuals Sessions Below</h2>
      <div style={calendarStyle}>
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          const hasFallen = fallenBricks.includes(day);

          return (
            <motion.div
              key={day}
              style={{ ...boxStyle, ...(hasFallen ? fallenStyle : {}) }}
              onClick={() => handleDayClick(day)}
              animate={
                hasFallen ? { y: 500, opacity: 0, rotate: 15 } : { y: 0 }
              }
              transition={{ type: "spring", stiffness: 70, damping: 12 }}
            >
              {day}
            </motion.div>
          );
        })}
      </div>

      {selectedDay !== null && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <p>
              Do you want to schedule time on the {selectedDay}? Confirm for
              Email Verification and Official Booking
            </p>
            <div style={buttonGroupStyle}>
              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: "#333C3F",
                  color: "white",
                }}
                onClick={confirmFall}
              >
                Confirm
              </button>
              <button
                style={{ ...buttonStyle, backgroundColor: "#ddd" }}
                onClick={cancelFall}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
