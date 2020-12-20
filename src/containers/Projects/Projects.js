import React, { Component } from 'react';
import parse from 'html-react-parser';
import { firebaseAxios } from '../../axios';
import ProjectsStyles from './Projects.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

class Projects extends Component {
  state = {
    projects: null
  }

  componentDidMount() {
    this.getProjects();
  }

  async getProjects() {
    try {
      const projects = await (await firebaseAxios.get('/projects.json')).data;
      
      this.setState({ projects });

    } catch (error) {
      console.log(error);
    }
  }

  renderProjects() {
    let projects = <Spinner />;

    if (this.state.projects) {
      projects = [];

      for (let key in this.state.projects) {
        let currProject = this.state.projects[key];
        const demoKey = Object.keys(currProject)[0];
        const demo = currProject[demoKey].demo;
        const projectData = {
          title: demo.snippet.title,
          video: parse(demo.player.embedHtml),
          desc: demo.snippet.description,
          frontend: currProject.frontend,
          backend: currProject.backend,
          mapper: currProject.mapper,
          database: currProject.database,
          libraries: currProject.libraries || null,
          apis: currProject.apis || null,
          github: currProject.githubLinks,
          deployed: currProject.deployed,
          deploymentLink: currProject.deploymentLink || null
        };

        projects.push(<ProjectCard projectData={projectData} />);
      }
    }

    return projects;
  }

  render() {
    return (
      <div className={ProjectsStyles.Projects}>
        <h2 className={ProjectsStyles.Title}>Projects</h2>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
