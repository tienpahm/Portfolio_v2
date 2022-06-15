import React from "react";
import "./Footer.css";

export default function footer() {
  return (
    <section className="footer-container">
      <div className="footer-overlay">
        <img
          style={{width: "100vw"}}
          src="https://paperpillar.com/assets/images/footer-white-mask.png"
          alt="backgrounpicture"
        />
      </div>
      {/* <div className="footer-overlay">
        <img
          style={{width: "100vw"}}
          src="https://paperpillar.com/assets/images/footer-pattern-bg-lg.png"
          alt="backgrounpicture"
        />
      </div> */}
      {/* <div className="footer-overlay">
        <img
          style={{width: "200px"}}
          src="https://paperpillar.com/assets/images/footer-white-mask.png"
          alt="backgrounpicture"
        />
      </div> */}
      <div className="footer-content">
        <p>© 2019 Tien Pham. All Rights Reserved.</p>
        <p>This website was insprited by paperpillar.com</p>
        <p>
          Email:<span> phamtienacu@gmail.com </span>
        </p>
      </div>
    </section>
  );
}
