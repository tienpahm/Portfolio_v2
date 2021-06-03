import React from "react";
import "./Project.css";

export default function Project(props: any) {
  console.log(props);

  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-title">
          <h2>Projects</h2>
          <p>
            // These are my favorite projects I've worked on for the past year.
            Have a look around and make sure to hit me up!
          </p>
        </div>
        <div className="projects row">
          <div className="col-6">
            <div className="project-items">
              <p className="bugtify name">
                BUGTIFY<span>.</span>
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#bugtifyModal">
                <i className="fa fa-eye"></i>View Projects
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="project-items">
              <p className="honda name">
                <img
                  src={require("../../assets/img/hondalogo.png").default}
                  alt="hondalogo"
                />
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#hondaModal">
                <i className="fa fa-eye"></i>View Projects
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="project-items">
              <p className="portfolio name">
                <span>T</span>ien
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#portfolioModal">
                <i className="fa fa-eye"></i>View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
