import React, { Component } from 'react';
import parse from 'html-react-parser';
import { firebaseAxios } from '../../axios';
import ProjectsStyles from './Projects.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import FingerzAppPhoto from '../../assets/images/Fingerz Typing Profile Photo.png';

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
        const demoKey = Object.keys(currProject)[0][0] === '-' ? Object.keys(currProject)[0] : null;
        const demo = demoKey ? currProject[demoKey].demo : null;
        const projectData = {
          title: currProject.name,
          video: demo ? parse(demo.player.embedHtml) : null,
          desc: demo ? demo.snippet.description : currProject.description,
          frontend: currProject.frontend,
          backend: currProject.backend,
          mapper: currProject.mapper,
          database: currProject.database,
          libraries: currProject.libraries || null,
          apis: currProject.apis || null,
          github: currProject.githubLinks,
          deployed: currProject.deployed,
          deploymentLink: currProject.deploymentLink || null,
          photo: currProject.name === 'Fingerz Typing' ? FingerzAppPhoto : null
        };

        projects.push(<ProjectCard projectData={projectData} key={currProject.name} />);
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
