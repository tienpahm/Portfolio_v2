import React from "react";
import "./Project.css";

export default function Project(props: any) {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-title">
          <h4>Projects</h4>
        </div>
        <div className="projects row">
          <div className="col-12 col-md-6">
            <div className="project-items project-items-event">
              <p className="honda name">
                <img
                  src={require("../../assets/img/memories.png").default}
                  alt="hondalogo"
                  style={{width: "150px", height: "150px"}}
                />
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#memoriesModal">
                View Projects
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="project-items project-items-event">
              <p className="honda name">
                <img
                  src={require("../../assets/img/eventlogo.webp").default}
                  alt="eventlogo"
                />
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#eventModal">
                View Projects
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="project-items project-items-bugitfy">
              <p className="bugtify name">
                BUGTIFY<span>.</span>
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#bugtifyModal">
                View Projects
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="project-items project-items-honda">
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
                View Projects
              </button>
            </div>
          </div>

          <div className="col-12 col-md-6 ">
            <div className="project-items project-items-portfolio">
              <p className="portfolio name">
                <img
                  style={{minWidth: "150px"}}
                  src={require("../../assets/img/logo.png").default}
                  alt="portfoliologo"
                />
              </p>
              <button
                className="btn-projects"
                data-toggle="modal"
                data-target="#portfolioModal">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
