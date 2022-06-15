import React, {FC, ReactElement} from 'react';

//CSS
import "../Modal.css"

interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  backgroundClass: string;
  logo: ReactElement<any, any>;
  name: string;
  skills: string[];
  contents: string[];
  demoLink?: string;
  codeLink?: string;
}

const ModalContainer: FC<ModalContainerProps> = ({
  id,
  backgroundClass,
  logo,
  name,
  skills,
  contents,
  demoLink,
  codeLink,
}) => {
  return (
    <div className="project-modal">
      <div className="modal fade" id={id} tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="row">
              <div className={`col-6 project-logo ${backgroundClass}`}>
                {logo}
              </div>
              <div className="col-6 project-info">
                <div className="project-header">
                  <div className="project-header-text">
                    <span>Project</span>
                    <h2>{name}</h2>
                  </div>
                  <div
                    className="project-header-btn"
                    data-dismiss="modal"
                    style={{cursor: "pointer"}}>
                    <i className="fa fa-times"></i>
                  </div>
                </div>
                <div className="project-skills">
                  {skills.map((skill) => (
                    <span>{skill}</span>
                  ))}
                </div>
                <div className="project-about">
                  <span>About</span>
                  <div className="about-content mt-4">
                    {contents.map((content) => (
                      <div> {content}</div>
                    ))}
                  </div>
                </div>
                <div className="project-btn">
                  {demoLink && (
                    <a
                      className="btn-project"
                      href={demoLink}
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-eye mr-2"></i>Demo
                    </a>
                  )}

                  {codeLink && (
                    <a
                      className="btn-project"
                      href={codeLink}
                      target="_blank"
                      rel="noreferrer">
                      <i className="fa fa-code mr-2"></i>Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;