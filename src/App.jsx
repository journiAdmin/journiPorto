import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Workxp from "./components/Workxp";
import GlobalFocus from "./components/GlobalFocus";
import Calendar from "./components/Calendar";
import WatchList from "./components/WatchList";
import Gaming from "./components/Gaming";
import GameBoard from "./widgets/Gameboard";
import Workxp2 from "./components/Workexp2";
import GlobalFocus2 from "./components/GlobalFocus2";
import RkPapSz from "./gameHub/RkPapSz";
function App() {
  return (
    <>
      <div className="masterAdmin">
        <div className="mainLeft"></div>
        <div className="mainMid">
          <Nav />

          <div className="mainSplashContainer">
            <h1 className="n2 fontdiner-swanky-regular">n2roSpeQ.io</h1>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E22AQEVpdF8Rd87wQ/feedshare-shrink_2048_1536/B4EZS2lO_UGgAo-/0/1738230004301?e=2147483647&v=beta&t=3sTwav3hivJojkeigbjziJxJLzxemWvoL0xuX4pqOM0"
              alt=""
              className="splashTop"
            />
            <h2 className="n2 fontdiner-swanky-regular">
              Everything U Need - Nothing U Dont
            </h2>
          </div>
    
          {/* WorkExp */}
          <Workxp />
          <h1 className="bookmark"> ServiceHub</h1>
          {/* Global Focus */}
          <div className="openSesame">
            <div className="textLeft"></div>
            <Calendar />
          </div>
          <h1 className="bookmark">Work Experience</h1>
          <GlobalFocus2 />
          <h1 className="bookmark"> Mission & Purpose</h1>
          <GlobalFocus />
          {/* WatchList */}
          
         
          <h1 className="bookmark">Focus Tools</h1>
          <WatchList />
          {/* FocusTools  */}
        {/* <Workxp2 /> */}
       
          {/* Affiliations  */}
         
          {/* Community */}

          <h1 className="bookmark">Gaming Hub</h1>
         <Gaming />
          <RkPapSz />
          
        </div>
        <div className="mainRight"></div>
      </div>
    </>
  );
}

export default App;
