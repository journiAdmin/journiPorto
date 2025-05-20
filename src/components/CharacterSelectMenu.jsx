import React, { useState, useEffect, useRef } from "react";
import GameBoard from "../widgets/Gameboard";
import RkPapSz from "../gameHub/RkPapSz";
const CharacterSelectMenu = () => {
  const options = [
    { id: "char1", label: "Julian" },
    { id: "char2", label: "Mage" },
    { id: "char3", label: "NY Trivia Rush" },
    { id: "char4", label: "RockPaperSza" },
    { id: "char5", label: "StreetFighter" },
    { id: "char6", label: "Duck Hunt" },
    { id: "char7", label: "TypeRacer" },
    { id: "char8", label: "biingBong" },
    { id: "char9", label: "AnotherOne" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentlySelectedOption, setCurrentlySelectedOption] = useState(
    options[0].id
  );
  const menuRef = useRef(null);
  const [nyGame, setNyGame] = useState(true);

  useEffect(() => {
    menuRef.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (selectedIndex + 1) % options.length;
      setSelectedIndex(nextIndex);
      setCurrentlySelectedOption(options[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (selectedIndex - 1 + options.length) % options.length;
      setSelectedIndex(prevIndex);
      setCurrentlySelectedOption(options[prevIndex].id);
    } else if (e.key === "Enter") {
      // setCurrentGame
      // {currentlySelectedOption === "char1" && <GameBoard />}
      alert(`Selected: ${options[selectedIndex].label}`);
    }
  };

  return (
    <div
      tabIndex="0"
      ref={menuRef}
      onKeyDown={handleKeyDown}
      style={{
        width: "90%",
        margin: "10px auto",
        padding: "10px",
        backgroundColor: "#1a1a1a",
        backgroundImage: "url('')",
        borderRadius: "12px",
        outline: "none",
        color: "white",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <h2 className="fancy">Select Your Character</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {options.map((option, index) => (
          <div
            key={option.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              border:
                selectedIndex === index ? "3px solid gold" : "2px solid #444",
              background: selectedIndex === index ? "#222" : "#111",
              width: "120px",
              height: "120px",
              display: "flex",
              fontFamily: "Fontdiner Swanky",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${option.img})`,
              cursor: "pointer",
              transform: selectedIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s, border 0.2s",
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
      <p style={{ marginTop: "20px", opacity: 0.6 }}>
        Use ← → to navigate. Press Enter to select.
      </p>
      <div style={{ marginTop: "10px", fontSize: "14px" }}>
        <strong>Currently Selected ID:</strong> {currentlySelectedOption}
      </div>
      <hr />
      <div className="currentIter">
        {currentlySelectedOption === "char4" ? (
          <>
            <RkPapSz />
          </>
        ) : (
          ""
        )}
        {/* ---NYGame   */}

        {currentlySelectedOption === "char3" ? (
          <>
            <GameBoard
              playerName={"Player One"}
              characterImg={
                "https://media1.giphy.com/media/YVardOGaPfzeo/giphy.gif?cid=6c09b9524yqpmb5syscgksfbyfsi9ngkrgz4403x6ert90ec&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              }
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CharacterSelectMenu;
