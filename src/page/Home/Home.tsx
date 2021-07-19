import React, {Fragment, useState} from "react";
import "./Home.css";
import Header from "../Header/Header";
import Project from "../Project/Project";

export default function Home(props: any) {
  const paragraph =
    "I'M A FRONT END DEVELOPER & WEB DESIGNER CURRENTLY BASED IN SYDNEY HIT ME UP AND LET CREATE SOMETHING SPECIAL";
  const [charState, setcharState] = useState("");
  //   let activeChar = "char-sub";
  let tien = "dep trai";

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
              src="https://paperpillar.com/assets/images/hero-guy-1.png"
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{top: "0"}}>
            <img
              src="https://paperpillar.com/assets/images/hero-pattern-bg.png"
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{top: "20%", left: "10%"}}>
            <img
              style={{width: "200px"}}
              src="https://paperpillar.com/assets/images/hero-guy-2.png"
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{bottom: "20%", right: "10%"}}>
            <img
              style={{width: "200px"}}
              src="https://paperpillar.com/assets/images/hero-guy-3.png"
              alt="backgrounpicture"
            />
          </div>
          <div className="home-overplay" style={{top: "20%", right: "10%"}}>
            <img
              style={{width: "200px"}}
              src="https://paperpillar.com/assets/images/hero-girl.png"
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
            <button
              className="btn-project"
              onClick={() => {
                props.history.push("/project");
              }}>
              VIEW PROJECT
            </button>
          </div>
        </div>
      </div>
      <Project />
    </Fragment>
  );
}
