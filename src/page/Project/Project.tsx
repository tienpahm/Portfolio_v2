import React from "react";
import ProjectContainer from "./components/ProjectContainer";
import "./Project.css";

export default function Project(props: any) {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="project-title">
          <h4>Projects</h4>
        </div>
        <div className="projects row">
          <ProjectContainer
            dataTarget="#bugtifyModal"
            dataToggle="modal"
            name={
              <p className="bugtify name">
                BUGTIFY<span>.</span>
              </p>
            }
            altImage="eventlogo"
            background="project-items-bugitfy"
          />
          <ProjectContainer
            dataTarget="#portfolioModal"
            dataToggle="modal"
            src={require("../../assets/img/logo.png").default}
            altImage="portfoliologo"
            background="project-items-portfolio"
          />
          <ProjectContainer
            dataTarget="#hondaModal"
            dataToggle="modal"
            src={require("../../assets/img/hondalogo.png").default}
            altImage="hondalogo"
            background="project-items-honda"
          />
          <ProjectContainer
            dataTarget="#trello"
            dataToggle="modal"
            src={require("../../assets/img/Trello.png").default}
            altImage="trello"
            background="project-items-trello"
            buttonName="Coming Soon..."
          />
        </div>
      </div>
    </div>
  );
}
