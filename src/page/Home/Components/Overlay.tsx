import React, {FC} from 'react';

import "../Home.css"

const Overlay:FC = ({

}) => {
    return (
      <>
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
            style={{width: "10vw"}}
            src="https://paperpillar.com/assets/images/hero-guy-2.png"
            alt="backgrounpicture"
          />
        </div>
        <div className="home-overplay" style={{bottom: "20%", right: "10%"}}>
          <img
            style={{width: "10vw"}}
            src="https://paperpillar.com/assets/images/hero-guy-3.png"
            alt="backgrounpicture"
          />
        </div>
        <div className="home-overplay" style={{top: "20%", right: "10%"}}>
          <img
            style={{width: "10vw"}}
            src="https://paperpillar.com/assets/images/hero-girl.png"
            alt="backgrounpicture"
          />
        </div>
      </>
    );
}

export default Overlay;