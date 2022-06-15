import React, {FC, ReactElement} from 'react';

//CSS
import "../Project.css"

interface ProjectContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: any;
  dataTarget: string;
  dataToggle: string;
  altImage: string;
  name?: ReactElement<any, any>;
  background: string;
  buttonName?: string;
}

const ProjectContainer: FC<ProjectContainerProps> = ({
  src,
  dataTarget,
  dataToggle,
  altImage,
  name,
  background,
  buttonName,
}) => {
  return (
    <div className="col-12 col-md-6">
      <div className={`project-items ${background}`}>
        <p className="honda name">
          {name ? (
            name
          ) : (
            <img src={src} alt={altImage} style={{minWidth: "150px"}} />
          )}
        </p>
        <button
          className="btn-projects"
          data-toggle={dataToggle}
          data-target={dataTarget}>
          { buttonName ? buttonName : "View Projects"}
        </button>
      </div>
    </div>
  );
};

export default ProjectContainer;