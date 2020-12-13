import React from 'react';
import ProjectCardStyles from './ProjectCard.module.css';
import { GrDeploy } from 'react-icons/gr';

const ProjectCard = props => {
  const { key, title, video, desc, tech, github } = props.demoData;

  const blockDragNDrop = event => {
    event.preventDefault();
  }

  const renderTechStack = () => {
    let nullDescription;

    for (let key in tech) {
      if (tech[key] === null || tech[key].length < 1) {
        nullDescription = 'None';
      }
    }

    const listValues = value => {
      let values = '';

      value.map((val, index) => {
        if (index !== value.length - 1) {
          values += `${val}, `
        } else {
          values += val;
        }
      });

      return values;
    }

    return (
      <>
        <li><p>Frontend: <span>{tech.frontend}</span></p></li>
        <li><p>Backend: <span>{tech.backend}</span></p></li>
        <li><p>ORM/ODM: <span>{tech.mapper || nullDescription}</span></p></li>
        <li><p>Database: <span>{tech.database}</span></p></li>
        <li><p>Libraries: <span>{listValues(tech.libraries) || nullDescription}</span></p></li>
        <li><p>APIS: <span>{listValues(tech.apis) || nullDescription}</span></p></li>
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
    <div className={ProjectCardStyles.ProjectCard} key={key}>
      <div className={ProjectCardStyles.Project}>
        <div className={ProjectCardStyles.Title}>
          <h1>{title}</h1>
          {tech.deployed ? <a href={tech.deploymentLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseDown={blockDragNDrop}><GrDeploy className={ProjectCardStyles.Deployed}/></a> : null}
        </div>
        {video}
      </div>
      <div className={ProjectCardStyles.Info}>
        <div className={ProjectCardStyles.Description}>
          <h3>Description</h3>
          <p>{desc}</p>
        </div>
        <div className={ProjectCardStyles.TechStack}>
          <h3>Tech Stack</h3>
          <ul>
            {renderTechStack()}
          </ul>
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
