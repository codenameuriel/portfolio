import React from 'react';
import ProjectCardStyles from './ProjectCard.module.css';

const ProjectCard = props => {
  const { key, title, video, desc, tech, github } = props.demoData;

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
    let link;

    if (!github.backend) {
      link = (
        <span>
          <a href={github.frontend}>Client</a>
        </span>
      );
    } else {
      link = (
        <span>
          <a href={github.frontend}>Client</a> <span className={ProjectCardStyles.Separator}>|</span> <a href={github.backend}>Server</a>
        </span>
      );
    }

    return (
      <>
        {link}
      </>
    )
  };

  return (
    <div className={ProjectCardStyles.ProjectCard} key={key}>
      <div className={ProjectCardStyles.Project}>
        <h1>{title}</h1>
        {video}
      </div>
      <div className={ProjectCardStyles.Info}>
        <h3>Description</h3>
        <p className={ProjectCardStyles.Description}>{desc}</p>
        <h3>Tech Stack</h3>
        <ul className={ProjectCardStyles.TechStack}>
          {renderTechStack()}
        </ul>
        <h3 className={ProjectCardStyles.GithubTitle}>GitHub</h3>
        <div className={ProjectCardStyles.Github}>
          {renderGithubLinks()}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
