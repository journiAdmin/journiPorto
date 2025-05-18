import React from "react";

function MediaContent({ contentObj,relevantMain }) {
  return (
    <>
      <div className="mceeContainer">
        <div className="suckaMc">
          <img src={relevantMain.image} alt="" className="drake" />
          <div className="yatch">
            <h3 className="pacTitle">{relevantMain.title}</h3>
            <div className="synopp">{relevantMain.desc}</div>
            <div className="pacBtn">Read More</div>
          </div>

          
        </div>
        <div className="topMc">
          {/* Map each book */}

          <div className="posterBox">
            <img
              src={contentObj.one.image}
              alt=""
              className="posterImg"
            />
            <div className="posterTitle">{contentObj.one.title}</div>
          </div>
          <div className="posterBox">
            <img
              src={contentObj.two.image}
              alt=""
              className="posterImg"
            />
            <div className="posterTitle">{contentObj.two.title}</div>
          </div>
          <div className="posterBox">
            <img
              src={contentObj.three.image}
              alt=""
              className="posterImg"
            />
            <div className="posterTitle">{contentObj.three.title}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MediaContent;
