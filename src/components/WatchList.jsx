import { React, useEffect, useState } from "react";
import MediaContent from "../widgets/MediaContent";

function WatchList() {
  const [majorObj, setMajorObj] = useState({
    vidLink: "https://www.youtube.com/embed/Ae_do10gUKo?si=-2OPgpL7mP0N6zND",
    objDesc:
      "Lofis slow tempo, smooth textures, and nostalgic tones reduce cortisol levels, calming the nervous system",
    objName: "LofI_Sci",
  });

  let waev = {
    scifiLofi: {
      vidLink: "https://www.youtube.com/embed/Ae_do10gUKo?si=-2OPgpL7mP0N6zND",
      objDesc:
        "Lofis slow tempo, smooth textures, and nostalgic tones reduce cortisol levels, calming the nervous system",
      objName: "LofI_Sci",
    },
    instrumentals: {
      vidLink: "https://www.youtube.com/embed/awXtDxoffCo?si=rRqnR82HpVJmE2kB",
      objDesc:
        "Freestylin strengthens divergent thinking, which is the ability to generate creative ideas by exploring many possible solutions.",
      objName: "kiQback Verses",
    },
    chantress: {
      vidLink: "https://www.youtube.com/embed/YCI2CXSwjEQ?si=kBYAKix-1dyBN5Hi",
      objDesc:
        "MRI studies show that regular meditation increases the thickness of the prefrontal cortex (linked to attention and decision-making) and the hippocampus (involved in memory and emotional regulation).",
      objName: "Kundalini Waev",
    },
    yerr: {
      vidLink: "https://www.youtube.com/embed/yOKs5L18YcI?si=ZjNshPjQQ-qteb7w",
      objDesc: "NY Over Earth",
      objName: "YerrNyC",
    },
    brownNoise: {
      vidLink: "https://www.youtube.com/embed/QH0t_ogClhA?si=wYqcskFcv11p6hW9",
      objDesc:
        "Low-frequency noise like brown noise may create a soothing soundscape, helping some people feel less overstimulated.",
      objName: "Brown Noise",
    },
  };
  // Music Content
  let bookContent = {
    one: {
      title: "Side Stepping",
      author: "Arthur Bernier Jr,",
      image: "https://m.media-amazon.com/images/I/41+szOzpqfL._SL500_.jpg",
      desc: "Welcome to Sidestepping: Mastering the Art of Overcoming Self-Imposed Roadblocks to Success - a transformative guide that explores the often overlooked concept of avoidance, and how it can cripple your progress. This book will unlock the enigma of why some tasks are effortless, while others seem impossible, and provide you with proven strategies to counteract this potentially damaging behavior.",
      link: "https://www.audible.com/pd/SideStepping-Audiobook/B0CKLZ6TDW",
    },
    two: {
      title: "From the Browder File",
      author: "Anthony T. Browder",
      image: "https://archive.org/services/img/frombrowderfile20000brow/full/pct:200/0/default.jpg",
      desc: "We can be led to act in our own interest as a group if we tune into, and add to, our mental diets, the liberating thoughts that are provifef for us in the From The Browder File. No person or group outside of our own is likely to see our need for a collective rebirth of consiousness.",
      link: "https://www.amazon.com/Browder-File-African-American-Experience/dp/0924944005",
    },
    three: {
      title: "The Clean Coder",
      author: "Robert C. Martin",
      image: "https://m.media-amazon.com/images/I/61GHrDrumhL.jpg",
      desc: "Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.",
      link: "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073",
    }
  };


 

  const [currentVid, setCurrentVid] = useState(majorObj.vidLink);

  const [relevantMain,setRelevantMain] = useState(bookContent.one)

  const [vidContent,setVidContent] = useState(false)
  const [auditory,setAuditory] = useState(false)
  const [podcast,setPodcast]= useState(false)
  const [ebook, setEbook]=useState(true)

  
  return (
    <>
      <div className="watchContainer">
        <div className="playListMain">
          <iframe
            width="100%"
            height="315"
            src={`${currentVid}&autoplay=1&mute=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="iframeToggla">{majorObj.objName}</div>
          <p className="drowzi">{majorObj.objDesc}</p>
          <div className="iframeToggla">
            <div className="optionsBtn">
              <div
                className="options"
                onClick={() => {
                  setMajorObj(waev.scifiLofi);
                  setCurrentVid(majorObj.vidLink);
                }}
              >
                111
              </div>
              <div
                className="options"
                onClick={() => {
                  setMajorObj(waev.instrumentals);
                  setCurrentVid(majorObj.vidLink);
                }}
              >
                4444
              </div>
              <div
                className="options"
                onClick={() => {
                  setMajorObj(waev.chantress);
                  setCurrentVid(majorObj.vidLink);
                }}
              >
                723
              </div>
              <div
                className="options"
                onClick={() => {
                  setMajorObj(waev.yerr);
                  setCurrentVid(majorObj.vidLink);
                }}
              >
                00
              </div>
              <div
                className="options"
                onClick={() => {
                  setMajorObj(waev.brownNoise);
                  setCurrentVid(majorObj.vidLink);
                }}
              >
                8
              </div>
            </div>
          </div>
        </div>
        <div className="medeah">
          <div className="DisplayInfo" onClick={()=>{
            setVidContent(true)
            setRelevantMain()
          }}>
            <img
              src="https://static.thenounproject.com/png/3146-200.png"
              alt=""
              className="icon2"
            />
            <p className="displaySnippet">Video Content </p>
          </div>

          <div className="DisplayInfo" onClick={()=>{
            setAuditory(true)
            setRelevantMain()
          }}>
            <img
              src="https://static.thenounproject.com/png/3146-200.png"
              alt=""
              className="icon2"
            />
            <p className="displaySnippet">Auditory Stim </p>
          </div>
          <div className="DisplayInfo" onClick={()=>{
            setPodcast(true)
            setRelevantMain()
          }}>
            <img
              src="https://static.thenounproject.com/png/3146-200.png"
              alt=""
              className="icon2"
            />
            <p className="displaySnippet">Podcasts </p>
          </div>
          <div className="DisplayInfo" onClick={()=>{
            setEbook(true)
            setRelevantMain()
          }}>
            <img
              src="https://static.thenounproject.com/png/3146-200.png"
              alt=""
              className="icon2"
            />
            <p className="displaySnippet">e-books</p>
          </div>
        </div>
      </div>

      <hr />
        {/* {vidContent?<>
        <MediaContent contentObj={bookContent} relevantMain={relevantMain} />
        </>:""}
        {auditory?<>
        <MediaContent contentObj={bookContent} relevantMain={relevantMain} />
        </>:""}
        {podcast?<>
        <MediaContent contentObj={bookContent} relevantMain={relevantMain} />
        </>:""}
        {ebook?<>
        <MediaContent contentObj={bookContent} relevantMain={relevantMain} />
        </>:""} */}
        
    </>
  );
}

export default WatchList;
