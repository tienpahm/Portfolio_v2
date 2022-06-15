import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <section className="header-container" style={{zIndex: 1}}>
      <div className="header-content">
        <div className="logo">
          {/* <span>T</span>ien */}
          <img
            style={{maxWidth: "150px"}}
            src={require("../../assets/img/logo.png").default}
            alt="portfoliologo"
          />
        </div>
        {/* <div className="nav-menu">
          <Link to="/">About</Link>
          <Link to="/project">Project</Link>
        </div> */}
      </div>
    </section>
  );
}
