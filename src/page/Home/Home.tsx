import React, {Fragment} from "react";
import "./Home.css";
import Header from "../Header/Header";
import Project from "../Project/Project";

export default function Home(props: any) {
  const paragraph =
    "I'M A FRONT END DEVELOPER & WEB DEVELOPER CURRENTLY BASED IN SYDNEY HIT ME UP AND LET CREATE SOMETHING SPECIAL";

  return (
    <Fragment>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top right,#450b7c,#563cc9,#49e9fb)",
        }}>
        <div className="home">
          <Header />
          <div className="home-overplay" style={{bottom: "0"}}>
            <img
              style={{width: "100vw", height: "400px"}}
              src={require("../../assets/img/ppl1.png").default}
              alt="backgrounpicture1"
            />
          </div>
          {/* <div className="home-overplay" style={{top: "0"}}>
            <img
              style={{width: "30vw"}}
              src={require("../../assets/img/ppl3.png").default}
              alt="backgrounpicture"
            />
          </div> */}
          <div className="home-overplay" style={{top: "20%", left: "0%"}}>
            <img
              style={{width: "25vw"}}
              src={require("../../assets/img/ppl4.png").default}
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{bottom: "15%", right: "5%"}}>
            <img
              style={{width: "32vw"}}
              src={require("../../assets/img/ppl2.png").default}
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{top: "5%", right: "10%"}}>
            <img
              style={{width: "20vw"}}
              src={require("../../assets/img/ppl3.png").default}
              alt="backgrounpicture"
            />
          </div>
          <div className="home-content">
            <div className="greeting">
              <p> Hi , I AM TIEN , NICE TO MEET YOU</p>
            </div>

            <div className="introduction" style={{zIndex: 1}}>
              {paragraph.split(" ").map((item, index) => {
                return (
                  <div className="char" key={index}>
                    <div
                      className={`char-main`}
                      onMouseEnter={(e) => {
                        (e.target as Element).className += " active";
                        setTimeout(() => {
                          (e.target as Element).className = "char-main";
                        }, 3000);
                      }}>
                      {item}
                    </div>
                    <div className={`char-sub`}>{item}</div>
                  </div>
                );
              })}
            </div>
            <div
              className="btn-project mx-auto"
              style={{borderColor: "transparent"}}>
              {/* <i className="fa fa-angle-double-down mt-2 text-white"></i> */}
              {/* <i class="fa fa-angle-double-down"></i> */}
            </div>
          </div>
        </div>
      </div>
      <Project />
    </Fragment>
  );
}
