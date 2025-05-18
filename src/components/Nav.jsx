import React from "react";

function Nav() {
  return (
    <>
      <div className="navContainer">
        <div className="navBottom">
        <div className="left">
          <div className="navClock">
            <div className="navHand">
              <div className="nhand">Email</div>
              <div className="nhand">Linked In</div>
            </div>
            <div className="hiddenNav"></div>
            <div className="navHand">
              <div className="nhand">Contact</div>
              <div className="nhand">Github</div>
            </div>
          </div>

        </div>
        <div className="right">
            
        </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
