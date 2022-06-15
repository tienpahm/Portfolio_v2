import React, {Fragment} from "react";
import ModalContainer from "./Components/ModalContainer";
import "./Modal.css";
export default function Modal() {
  return (
    <Fragment>
      <ModalContainer
        id={"bugtifyModal"}
        backgroundClass={"project-items-bugitfy"}
        logo={
          <p className="bugtify">
            BUGTIFY<span style={{color: "#7149fc"}}>.</span>
          </p>
        }
        name={"BUGTIFY"}
        contents={[
          " BUGTIFY is a Jira clone project in which you can create project and assign task for each member involve in project. Meanwhile , tracking , monitor and manage project progress",
          "BUGTIFY , for me , is a pretty big project . Therefore , where to begin is also a problem . In addition , the order of API call can collapse each other leading to loading no data or error . Finally , because of the usage of the number of form since create each form is time consuming and uneffective",
          " To Deal with each problem . First of all , I starting withbuilding the UI first and step by step apply data as wellas state to it . Seconly , to avoid API problems , I useredux-saga to organize my code better also checking onevery step that I made to optimize it . Finally , to reuseform , template , etc ... I create HOC which is a greatway to component recycle",
        ]}
        skills={[
          "HTML & CSS",
          "JAVASCRIPT",
          "React",
          "Redux",
          "REST API",
          "Boostrap4",
        ]}
        demoLink={"http://bugtifyapp.surge.sh/"}
        codeLink={"https://github.com/tienpahm/Honda_Homepage"}
      />

      <ModalContainer
        id={"hondaModal"}
        backgroundClass={"project-items-honda"}
        logo={
          <img
            src={require("../../assets/img/hondalogo.png").default}
            alt="hondalogo"
            className="w-50"
          />
        }
        name={"Honda"}
        contents={[
          " Honda Hompage is an UI clone in which I practice how to set up UI layout and organize section . In addition , building this site help me to practice my responsive skill as well.",
          " This is the first project that I have ever made . At the begining , Due to the lacking of experiences , I felt overwhelming cause the amount of task that I need to do . Moreover , first time apply JavaScript to UI is also a challenge for me . Finally , how to effective responsive a website is a knowledge that take me a lot of time to understand.",
          " To begin with , I tackle the mount of task by devide it into small task and set up a plan for every day basic ; therefore , I know where to start and what I achieve in that day . Secondly , to effectively apply JS into UI , I watch the tutorial carefully as well as search for documents and problems on Internet try my best to solve the problem by myself without watching the answer . Finally , to responsive website I watch the official site end to end , pixel by pixel to look for how they responsive it.",
        ]}
        skills={[
          "HTML & CSS",
          "JAVASCRIPT",
          "JQuery",
          "SASS",
          "REST API",
          "Boostrap4",
          "Responsive",
        ]}
        demoLink={"http://hondaclone.surge.sh/#"}
        codeLink={"https://github.com/tienpahm/Jira_phamtien"}
      />

      <ModalContainer
        id={"portfolioModal"}
        backgroundClass={"project-items-portfolio"}
        logo={
          <img
            style={{maxWidth: "150px"}}
            src={require("../../assets/img/logo.png").default}
            alt="portfoliologo"
          />
        }
        name={"Portfolio"}
        contents={[
          "   The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. This is a Single Page Application and is built using React and Boostrap with the BEM methodology.",
        ]}
        skills={[
          "HTML & CSS",
          "JAVASCRIPT",
          "React",
          "TypeScript",
          "Boostrap4",
        ]}
        codeLink={"https://github.com/tienpahm/Portfolio_v2"}
      />
      <ModalContainer
        id={"trello"}
        backgroundClass={"project-items-trello"}
        logo={
          <img
          style={{width: "50%"}}
            src={require("../../assets/img/Trello.png").default}
            alt="trelloimage"
          />
        }
        name={"Trello Clone"}
        contents={[
          "Apply Atlassian librarie to clone Trello which allow users to manage task easily by using Drag and Drop function ",
        ]}
        skills={[
          "StoryBook",
          "TypeScript",
          "React",
          "Cypress",
          "Node.js",
          "MongoDB",
        ]}
        codeLink={"https://github.com/tienpahm/Trello-clone"}
      />
    </Fragment>
  );
}
