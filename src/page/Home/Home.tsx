import React, {useState} from "react";
import "./Home.css";

export default function Home(props: any) {
  const paragraph =
    "I'M A FRONT END DEVELOPER & WEB DESIGNER CURRENTLY BASED IN SYDNEY HIT ME UP AND LET CREATE SOMETHING SPECIAL";
  const [charState, setcharState] = useState("");
  //   let activeChar = "char-sub";
  let tien = "dep trai";

  return (
    <div className="home">
      <div className="home-content">
        <div className="greeting">
          <p> Hi , I AM TIEN , NICE TO MEET YOU</p>
        </div>

        <div className="introduction">
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
  );
}
