import { React, useState } from "react";
import Deadbeat from "./Deadbeat";
import Sci_co from "./Sci_co";
import N2ro from "./N2ro";

function GlobalFocus() {
  const [n2ro, setN2ro] = useState(false);
  const [deadbeat, setDeadbeat] = useState(false);
  const [sci_co, setSci_co] = useState(false);
  return (
    <>
      <div className="focusMain">
        <div className="focusHolster">
          <div className="focusContainer">
            <img
              src="https://www.logoai.com/oss/icons/2023/01/06/44884b5c138cb90983d72ee8ccce0cef.png"
              alt=""
              className="globalIcon"
              onClick={()=>{
                setDeadbeat(true)
              }}
            />
          </div>
          <div className="focusContainer">
            <img
              src="https://www.freeiconspng.com/thumbs/brain-icon-png/brain-icon-png-15.png"
              alt=""
              className="globalIcon"
              onClick={()=>{
                setSci_co(true)
              }}
            />
          </div>

          <div className="focusContainer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3419/3419659.png"
              alt=""
              className="globalIcon"
              onClick={()=>{
                setN2ro(true)
              }}
            />
          </div>
        </div>

        <div className="focusStage">
          {n2ro ? <N2ro /> : null}
          {deadbeat ? <Deadbeat /> : null}
          {sci_co ? <Sci_co /> : null}
        </div>
        
      </div>
      <p className="asta">
        I am committed to transforming global mental health by creating
        accessible, equitable, and innovative support systems for all. My
        mission is to break down barriers to care by leveraging technology,
        community, and compassion to ensure that no individual is left without
        the resources they need to thrive. Through scalable, human-centered
        solutions, I aim to redefine how mental health services are
        delivered—making them not only more accessible, but also more empowering
        and enduring for individuals and communities worldwide.
      </p>
    </>
  );
}

export default GlobalFocus;
