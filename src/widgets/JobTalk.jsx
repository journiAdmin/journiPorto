import React from "react";

function JobTalk({obj}) {
  return (
    <>
      <div className="crayonBox">
        <div className="twista">
        <div className="mhServ">{obj.title} </div>
        <h2 className="mhServ">{obj.name} </h2>
        </div>

        <p>
          {obj.desc}
        </p>
        <hr />
        <img
          src={obj.image}
          alt=""
          className="mhLogo"
        />

      </div>
    </>
  );
}

export default JobTalk;
