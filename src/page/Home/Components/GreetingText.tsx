import React, {FC} from "react";

import "../Home.css";

const GreetingText: FC = ({}) => {
const paragraph =
    "I'M A SOFTWARE ENGINEER CURRENTLY BASED IN SYDNEY HIT ME UP AND LET CREATE SOMETHING SPECIAL";
  return (
    <>
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
        <div className="btn-project mx-auto">
          <i className="fa fa-angle-double-down mt-2 text-white"></i>
        </div>
      </div>
    </>
  );
};

export default GreetingText;
