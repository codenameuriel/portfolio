import React from 'react';
import ProjectCardStyles from './ProjectCard.module.css';
import { blockDragNDrop } from '../../shared/utils';
import { GrDeploy } from 'react-icons/gr';

const ProjectCard = props => {
  const { title, video, desc, frontend, backend, mapper, database, libraries, apis, github, deployed, deploymentLink, photo } = props.projectData;

  const renderTechStack = () => {
    const listValues = obj => {
      if (obj) {
        const values = Object.values(obj);
        return values.reduce((acc, val, idx) => {
          if (idx !== values.length - 1) return acc + `${val}, `
          else return acc + val;
        }, '');
      } else return 'None';
    };

    return (
      <>
        <li><p>Frontend: <span>{frontend}</span></p></li>
        <li><p>Backend: <span>{backend}</span></p></li>
        <li><p>ORM/ODM: <span>{mapper || 'None'}</span></p></li>
        <li><p>Database: <span>{database}</span></p></li>
        <li><p>Libraries: <span>{listValues(libraries)}</span></p></li>
        <li><p>APIS: <span>{listValues(apis)}</span></p></li>
      </>
    )
  };

  const renderGithubLinks = () => {
    let links;

    if (!github.backend) {
      links = (
        <span>
          <a href={github.frontend} target="_blank" rel="noopener noreferrer" onMouseDown={blockDragNDrop}>Client</a>
        </span>
      );
    } else {
      links = (
        <span>
          <a href={github.frontend} target="_blank" rel="noopener noreferrer" onMouseDown={blockDragNDrop}>Client</a> <span className={ProjectCardStyles.Separator}>|</span> <a href={github.backend} target="_blank" rel="noopener noreferrer" onMouseDown={blockDragNDrop}>Server</a>
        </span>
      );
    }

    return <>{links}</>;
  };

  return (
    <div className={ProjectCardStyles.ProjectCard}>
      <div className={ProjectCardStyles.Project}>
        <div className={ProjectCardStyles.Title}>
          <h1>{title}</h1>
          {deployed ? <a href={deploymentLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseDown={blockDragNDrop}><GrDeploy className={ProjectCardStyles.Deployed}/></a> : null}
        </div>
        {!video ? <img src={photo} alt="Fingerz Typing App" onMouseDown={blockDragNDrop} /> : video}
      </div>
      <div className={ProjectCardStyles.Info}>
        <div className={ProjectCardStyles.Description}>
          <h3>Description</h3>
          <p>{desc}</p>
        </div>
        <div className={ProjectCardStyles.TechStack}>
          <h3>Tech Stack</h3>
          <ul>{renderTechStack()}</ul>
        </div>
        <div className={ProjectCardStyles.Github}>
          <h3>GitHub</h3>
          <div className={ProjectCardStyles.GithubLinks}>
            {renderGithubLinks()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
