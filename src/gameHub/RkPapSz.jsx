import React from "react";

function RkPapSz() {
  let chars = {
    rock: {
      name: "Rock",
      img: "https://static.vecteezy.com/system/resources/previews/008/502/624/non_2x/rock-stones-and-boulders-in-cartoon-style-free-png.png",
      fall_gif: "",
    },
  };
  return (
    <>
      <div className="rpsScoreBoard">
        <div className="sBox">
          <div className="pScoreOne">Player 1</div>
          <div className="pScoreTwo">Sheldon Cooper</div>
        </div>
        <h2 className="titlerps">Rock Paper Scissor Lizard Spock</h2>
        <div className="rpsOptionBox">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/502/624/non_2x/rock-stones-and-boulders-in-cartoon-style-free-png.png"
              alt=""
              className="rock"
            />
            <img src="https://media0.giphy.com/media/L0ZUgksMK4uH5piNq6/giphy.gif?cid=6c09b95288clkvkadwjimgf6n8jpn1nbmja6jufotw1yj8nw&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="" className="paper" />
            <img src="https://media4.giphy.com/media/hvLSsjYDANffHD6H7h/giphy.gif?cid=6c09b95213y4h0nnnzge4if7qx4mememfi9qaulukf28ziqp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" className="sza" />
            <img src="https://img1.picmix.com/output/stamp/normal/5/0/2/0/1020205_410ae.gif" alt="" className="liz" />
            <img src="https://img1.picmix.com/output/stamp/normal/5/6/9/8/1898965_dbf8d.gif" alt="" className="spock" />
           
          </div>
      </div>
      <div className="rpsGameBoard">
        <div className="p1Side">
          <img src="" alt="" className="p1" />
         
        </div>
        <div className="battlefield">
          <div className="reactionMain"></div>
        </div>
        <div className="p2side">
          <img src="" alt="" className="p2" />
        </div>
      </div>
    </>
  );
}

export default RkPapSz;

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors