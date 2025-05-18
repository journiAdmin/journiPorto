import React, { useRef, useState, useEffect } from 'react';

const GameBoard = ({ playerName = 'Player1', characterImg }) => {
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [characterPos, setCharacterPos] = useState({ x: 50, y: 50 });
  const boardRef = useRef(null);
  const [bases, setBases] = useState([]);

  useEffect(() => {
    const spreadBases = [
      { id: 1, x: 80, y: 100 },
      { id: 2, x: 300, y: 180 },
      { id: 3, x: 550, y: 90 },
      { id: 4, x: 150, y: 280 },
      { id: 5, x: 400, y: 100 },
      { id: 6, x: 600, y: 250 },
      {
        id: 7,
        x: window.innerWidth - 590,
        y: window.innerHeight - 280,
        isFinal: true,
      }, // Finish marker
    ];
    setBases(spreadBases);
  }, []);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', '');
  };

  const handleDrop = (e, base) => {
    e.preventDefault();
    const dropX = base.x;
    const dropY = base.y;

    setCharacterPos({ x: dropX, y: dropY });
    setScore(score + 10);
    setShowModal(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className='boardMaster'>
      <div style={{ padding: 10, backgroundColor: '#222', color: 'white' }}>
        <strong>{playerName}</strong> | Score: {score}
      </div>
      <div
        ref={boardRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '90vh',
          backgroundImage:
            'url(https://static01.nyt.com/images/2019/12/02/autossell/mta-promo-image/mta-crop-videoSixteenByNine3000.jpg?year=2019&h=1688&w=3000&s=6d4314b16d9e71514f28e4554737fe4c7db744aacdd3898a1f8cf65e64c29e3a&k=ZQJBKqZ0VN&tw=1)',
          backgroundSize: 'fill',
          overflow: 'hidden',
        }}
        onDragOver={handleDragOver}
      >
        {/* Character */}
        <img
          src={characterImg}
          alt="character"
          draggable
          onDragStart={handleDragStart}
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            left: characterPos.x,
            top: characterPos.y,
            cursor: 'grab',
            zIndex: 10,
          }}
        />

        {/* Bases */}
        {bases.map((base) => (
          <div
            key={base.id}
            onDrop={(e) => handleDrop(e, base)}
            onDragOver={handleDragOver}
            style={{
              position: 'absolute',
              left: base.x,
              top: base.y,
              width: 60,
              height: 60,
              border: '3px dashed red',
              borderRadius: '50%',
              backgroundColor: base.isFinal
                ? 'rgba(0,128,0,0.4)'
                : 'rgba(255,0,0,0.1)',
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              zIndex: 1,
            }}
          >
            {base.isFinal && 'Finish'}
          </div>
        ))}

        {/* Modal */}
        {showModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 100,
            }}
            onClick={() => setShowModal(false)}
          >
            <div
              style={{
                backgroundColor: 'white',
                padding: 20,
                borderRadius: 10,
                minWidth: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Trivia Base</h3>
              {/* Insert your trivia content here */}
              <p>[Insert your trivia code here]</p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameBoard;