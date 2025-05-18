import { React, useState } from "react";

function Workxp() {
  let workXPinfo = {
    business: {
      title: "We Offer Business Solutions",
      icon: "https://cdn-icons-png.flaticon.com/512/3522/3522077.png",
      desc: "I provide business services designed to help organizations operate more efficiently, scale strategically, and stay competitive. From developing business plans and improving internal workflows to identifying growth opportunities, I work closely with clients to build a strong foundation for sustainable success.",
      splashImg:
        "https://blog.boardsource.org/hubfs/black-women-equity-blog.png",
    },
    tech: {
      title: "Tech Solutions with Tailored Support Services",
      icon: "https://cdn-icons-png.flaticon.com/512/4257/4257812.png",
      desc: "In the tech space, I offer solutions that bridge the gap between innovation and practicality. Whether it's implementing new systems, optimizing cloud infrastructure, automating workflows, or offering technical guidance, I support businesses in leveraging technology to enhance performance and adaptability.",
      splashImg:
        "https://www.cibc.com/content/dam/cibc-public-assets/business/banking-for-black-owned-businesses/images/belf-banner-mobile.jpg/_jcr_content/renditions/cq5dam.web.767.767.jpeg",
    },
    sales: {
      title: "Automate Sales and Increase Lead Generation",
      icon: "https://www.freeiconspng.com/uploads/sales-icon-10.png",
      desc: "My sales services focus on driving revenue through proven strategies, targeted outreach, and effective communication. I help businesses build high-performing sales funnels, train teams, and refine their value proposition to close deals more effectively and build lasting customer relationships.",
      splashImg:
        "https://mlt.org/wp-content/uploads/2017/07/Experienced-Talent-Banner-e1523564372838.jpeg",
    },
    consult: {
      title: "Expert Consultation Services",
      icon: "https://cdn-icons-png.freepik.com/256/11934/11934122.png?semt=ais_hybrid",
      desc: "Through consulting, I deliver tailored advice and actionable insights across various industries. I help organizations identify challenges, uncover opportunities, and create strategies that lead to measurable impact. My approach is collaborative, data-informed, and aligned with your long-term objectives.",
      splashImg:
        "https://t4.ftcdn.net/jpg/10/70/18/51/360_F_1070185109_tOrMLESQfzWzLygBVQ0JQlvoxx0B3fXr.jpg",
    },
  };
  const [currentSkill, setCurrentSkill] = useState(workXPinfo.consult);
  return (
    <>
      <div className="titleSeq">
        <div
          className="topic"
          onClick={() => {
            setCurrentSkill(workXPinfo.business);
          }}
        >
          Business
        </div>
        <div
          className="topic"
          onClick={() => {
            setCurrentSkill(workXPinfo.tech);
          }}
        >
          Tech
        </div>
        <div
          className="topic"
          onClick={() => {
            setCurrentSkill(workXPinfo.sales);
          }}
        >
          Sales
        </div>
        <div
          className="topic"
          onClick={() => {
            setCurrentSkill(workXPinfo.consult);
          }}
        >
          Consulting
        </div>
      </div>
      <div className="workerContainer">
        <div className="wxpScreen">
          <img src={currentSkill.splashImg} alt="" className="wxpImg" />
          <h2 className="wxpTitle "> {currentSkill.title} </h2>
          <div className="sectioner">
            <img src={currentSkill.icon} alt="" className="logo" />
            <div className="contentBox">{currentSkill.desc}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Workxp;
