import React, {Fragment} from "react";
import "./Modal.css";
export default function Modal() {
  return (
    <Fragment>
      <div className="project-modal">
        <div
          className="modal fade"
          id="bugtifyModal"
          tabIndex={-1}
          role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="row">
                <div className="col-6 project-logo">
                  <p className="bugtify">
                    BUGTIFY<span style={{color: "#7149fc"}}>.</span>
                  </p>
                </div>
                <div className="col-6 project-info">
                  <div className="project-header">
                    <div className="project-header-text">
                      <span>Project</span>
                      <h2>BUGTIFY</h2>
                    </div>
                    <div
                      className="project-header-btn"
                      data-dismiss="modal"
                      style={{cursor: "pointer"}}>
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="project-skills">
                    <span>HTML & CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>Redux</span>
                    <span>REST API</span>
                    <span>Boostrap4</span>
                  </div>
                  <div className="project-about">
                    <span>About</span>
                    <div className="about-content mt-4">
                      BUGTIFY is a Jira clone project in which you can create
                      project and assign task for each member involve in project
                      . Meanwhile , tracking , monitor and manage project
                      progress
                      <br />
                      <br />
                      BUGTIFY , for me , is a pretty big project . Therefore ,
                      where to begin is also a problem . In addition , the order
                      of API call can collapse each other leading to loading no
                      data or error . Finally , because of the usage of the
                      number of form since create each form is time consuming
                      and uneffective
                      <br />
                      <br />
                      To Deal with each problem . First of all , I starting with
                      building the UI first and step by step apply data as well
                      as state to it . Seconly , to avoid API problems , I use
                      redux-saga to organize my code better also checking on
                      every step that I made to optimize it . Finally , to reuse
                      form , template , etc ... I create HOC which is a great
                      way to component recycle
                    </div>
                  </div>
                  <div className="project-btn">
                    <a
                      className="btn-project"
                      href="http://bugtifyapp.surge.sh/"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-eye mr-2"></i>Demo
                    </a>
                    <a
                      className="btn-project"
                      href="https://github.com/tienpahm/Jira_phamtien"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-code mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-modal">
        <div className="modal fade" id="hondaModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="row">
                <div className="col-6 project-logo">
                  <img
                    src={require("../../assets/img/hondalogo.png").default}
                    alt="hondalogo"
                    className="w-75"
                  />
                </div>
                <div className="col-6 project-info">
                  <div className="project-header">
                    <div className="project-header-text">
                      <span>Project</span>
                      <h2>Honda</h2>
                    </div>
                    <div
                      className="project-header-btn"
                      data-dismiss="modal"
                      style={{cursor: "pointer"}}>
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="project-skills">
                    <span>HTML & CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>JQuery</span>
                    <span>SASS</span>
                    <span>Boostrap4</span>
                    <span>Responsive</span>
                  </div>
                  <div className="project-about">
                    <span>About</span>
                    <div className="about-content mt-4">
                      Honda Hompage is an UI clone in which I practice how to
                      set up UI layout and organize section . In addition ,
                      building this site help me to practice my responsive skill
                      as well .
                      <br />
                      <br />
                      This is the first project that I have ever made . At the
                      begining , Due to the lacking of experiences , I felt
                      overwhelming cause the amount of task that I need to do .
                      Moreover , first time apply JavaScript to UI is also a
                      challenge for me . Finally , how to effective responsive a
                      website is a knowledge that take me a lot of time to
                      understand.
                      <br />
                      <br />
                      To begin with , I tackle the mount of task by devide it
                      into small task and set up a plan for every day basic ;
                      therefore , I know where to start and what I achieve in
                      that day . Secondly , to effectively apply JS into UI , I
                      watch the tutorial carefully as well as search for
                      documents and problems on Internet try my best to solve
                      the problem by myself without watching the answer .
                      Finally , to responsive website I watch the official site
                      end to end , pixel by pixel to look for how they
                      responsive it .
                    </div>
                  </div>
                  <div className="project-btn">
                    <a
                      className="btn-project"
                      href="http://hondaclone.surge.sh/#"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-eye mr-2"></i>Demo
                    </a>
                    <a
                      className="btn-project"
                      href="https://github.com/tienpahm/Honda_Homepage"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-code mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-modal">
        <div
          className="modal fade"
          id="portfolioModal"
          tabIndex={-1}
          role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="row">
                <div className="col-6 project-logo">
                  <p className="portfolio name">
                    <span>T</span>ien
                  </p>
                </div>
                <div className="col-6 project-info">
                  <div className="project-header">
                    <div className="project-header-text">
                      <span>Project</span>
                      <h2>Portfolio</h2>
                    </div>
                    <div
                      className="project-header-btn"
                      data-dismiss="modal"
                      style={{cursor: "pointer"}}>
                      <i className="fa fa-times"></i>
                    </div>
                  </div>
                  <div className="project-skills">
                    <span>HTML & CSS</span>
                    <span>JAVASCRIPT</span>
                    <span>REACT</span>
                    <span>TypeScript</span>
                    <span>Boostrap4</span>
                  </div>
                  <div className="project-about">
                    <span>About</span>
                    <div className="about-content mt-4">
                      The idea behind this project was to create a showcase of
                      all my big projects for the past year. I tried to keep the
                      UI as simple as possible without any fluff. This is a
                      Single Page Application and is built using React and
                      Boostrap with the BEM methodology.
                    </div>
                  </div>
                  <div className="project-btn">
                    <a
                      className="btn-project"
                      href="http://hondaclone.surge.sh/#"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-eye mr-2"></i>Demo
                    </a>
                    <a
                      className="btn-project"
                      href="http://hondaclone.surge.sh/#"
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-code mr-2"></i>Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
