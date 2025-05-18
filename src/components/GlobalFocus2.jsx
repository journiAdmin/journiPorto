import { React, useState } from "react";
import Deadbeat from "./Deadbeat";
import Sci_co from "./Sci_co";
import N2ro from "./n2ro";
import JobTalk from "../widgets/JobTalk";

function GlobalFocus2() {
  let employ = {
    pers: {
      name: "PerScholas",
      title: "Lead Instructor",
      desc: "As Lead Instructor at Per Scholas, I delivered technical training in IT support, cloud computing, and programming (Python, Linux, AWS) to diverse adult learners, maintaining a 90% course completion rate and helping 80% of graduates secure employment. I led classroom instruction, mentored students through capstone projects and job readiness, and collaborated with curriculum teams to align content with CompTIA and AWS certifications. I also supervised junior instructors, optimized instructional strategies, and drove initiatives that improved student engagement and satisfaction.",
      image:
        "https://media.badgr.com/theme/-aPzuqGbJLN-Rx3WsX4Mn4So5Mp654PFErtmK5nvlRo=.png",
    },
    genA: {
      name: "General Assembly",
      title: "Instructional Assistant",
      desc: "As an Instructional Assistant, I supported lead instructors in delivering technical training across subjects like IT support, cloud fundamentals, and software development. I facilitated hands-on labs, provided one-on-one tutoring, and assisted in grading and progress tracking to ensure student comprehension and success. I also helped manage classroom operations, contributed to curriculum updates, and played a key role in fostering an inclusive and engaging learning environment.",
      image:
        "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png",
    },
    semn: {
      name: "Seventh Ave",
      title: "Microservices Engineer",
      desc: "As a Microservices Engineer, I designed, developed, and deployed scalable microservices using Node.js, Docker, and AWS within a CI/CD pipeline. I implemented RESTful APIs, integrated third-party services, and optimized service communication using message queues and event-driven architecture. Collaborated cross-functionally with DevOps, frontend, and QA teams to deliver high-availability systems, improve system performance, and reduce deployment times by 40%.",
      image: "https://mma.prnewswire.com/media/1677094/7th_Ave_Logo.jpg?w=200",
    },
    cap: {
      name: "Capgemini",
      title: "Cloud Solutions Engineer",
      desc: "As a Cloud Solutions Engineer, I architected and deployed cloud-native solutions on AWS and Azure, leveraging services like EC2, S3, Lambda, and Azure Functions to ensure scalability, security, and cost-efficiency. I automated infrastructure with Terraform and CI/CD pipelines, implemented monitoring with CloudWatch and Azure Monitor, and collaborated with development teams to migrate legacy applications to the cloud, improving system uptime and reducing operational overhead by 35%.",
      image:
        "https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491",
    },
    fisha: {
      name: "Fischer Company",
      title: "Rails Engineer",
      desc: "As a Rails Engineer, I developed and maintained scalable web applications using Ruby on Rails, PostgreSQL, and Redis, with a strong focus on performance, test coverage, and secure RESTful API design. I collaborated closely with product and UX teams to implement features, optimize SQL queries, and improve app responsiveness. Integrated third-party APIs, automated test suites with RSpec and Capybara, and deployed updates via CI/CD workflows, reducing bug rates and accelerating feature delivery by 30%.",
      image:
        "https://media.licdn.com/dms/image/v2/C4E0BAQEHnkGJcSDyfg/company-logo_200_200/company-logo_200_200/0/1631309039627?e=2147483647&v=beta&t=S3Tz88Yz7AReODAxQ1_usA9f-Gaw4aBvepz5wRc_9Wo",
    },
  };

  const [perscholas, setPerscholas] = useState(false);
  const [ga, setGa] = useState(false);
  const [seven, setSeven] = useState(false);
  const [cap, setCap] = useState(false);
  const [fish, setFish] = useState(false);
  return (
    <>
      <div className="focusMain">
        <div className="focusStage">
          {perscholas ? <JobTalk obj={employ.pers} /> : null}
          {ga ? <JobTalk obj={employ.genA} /> : null}
          {seven ? <JobTalk obj={employ.semn} /> : null}
          {cap ? <JobTalk obj={employ.cap} /> : null}
          {fish ? <JobTalk obj={employ.fisha} /> : null}
        </div>
        <div className="focusHolster">
          <div className="focusContainer2">
            <img
              src="https://media.badgr.com/theme/-aPzuqGbJLN-Rx3WsX4Mn4So5Mp654PFErtmK5nvlRo=.png"
              alt=""
              className="globalIcon2"
              onClick={() => {
                setPerscholas(true);
              }}
            />
          </div>
          <div className="focusContainer2">
            <img
              src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/2/original/CMYK-Red_Small_GeneralAssembly-Cog__1_.png"
              alt=""
              className="globalIcon2"
              onClick={() => {
                setGa(true);
              }}
            />
          </div>

          <div className="focusContainer2">
            <img
              src="https://mma.prnewswire.com/media/1677094/7th_Ave_Logo.jpg?w=200"
              alt=""
              className="globalIcon2"
              onClick={() => {
                setSeven(true);
              }}
            />
          </div>
          <div className="focusContainer2">
            <img
              src="https://companieslogo.com/img/orig/CAP.PA-9b4110b0.png?t=1720244491"
              alt=""
              className="globalIcon2"
              onClick={() => {
                setCap(true);
              }}
            />
          </div>

          <div className="focusContainer2">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E0BAQEHnkGJcSDyfg/company-logo_200_200/company-logo_200_200/0/1631309039627?e=2147483647&v=beta&t=S3Tz88Yz7AReODAxQ1_usA9f-Gaw4aBvepz5wRc_9Wo"
              alt=""
              className="globalIcon2"
              onClick={() => {
                setFish(true);
              }}
            />
          </div>
        </div>
      </div>
      <p className="asta">
        Results-driven Software Engineer with extensive experience in
        microservices architecture, cloud computing, and artificial
        intelligence. Proven ability to design, implement, and optimize scalable
        applications leveraging advanced frameworks and tools. Adept at
        mentoring teams, leading technical initiatives, and delivering
        innovative solutions across industries.
      </p>
    </>
  );
}

export default GlobalFocus2;
