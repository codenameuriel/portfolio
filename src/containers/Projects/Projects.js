import React, { Component } from 'react';
import { youtubeKey } from '../../key';
import { youtubeAxios } from '../../axios'
import parse from 'html-react-parser';
import ProjectsStyles from './Projects.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import axios from 'axios';

class Projects extends Component {
  state = {
    projects: null
  }

  componentDidMount() {
    this.getProjects();
  }

  // componentDidUpdate() {
  //   this.saveDemo();
  // }

  // async saveDemo() {
  //   const data = await axios.get('https://uriels-portfolio.firebaseio.com/projects.json');

  //   // object - Firebase Data
  //   const projects = data.data;

  //   this.state.demos.forEach((demo, index) => {
  //     const titleArray = demo.snippet.title.split(' ');
  //     titleArray[0] = titleArray[0].toLowerCase();
  //     titleArray.pop();
  //     const title = titleArray.join('');

  //     console.log(projects[title]);

  //     if (!projects[title].demo) {
  //       const endpoint = title + '.json';

  //       const saveDemo = { demo };

  //       axios.post('https://uriels-portfolio.firebaseio.com/projects/' + endpoint, saveDemo);
  //     }
  //   });
  // }

  async getProjects() {
    // const demoIds = '_WgXrcOqG3M,gf8-Ui0z7NI,4KLrYPeXw9Q,YA4p08g6QyQ';
    // const youtubeDemosURL = `videos?id=${demoIds}&part=snippet,player&key=${youtubeKey}`;
    // const demos = await (await youtubeAxios.get(youtubeDemosURL)).data;

    try {
      // create a projects endpoint
      const projects = await (await axios.get('https://uriels-portfolio.firebaseio.com/projects.json')).data;

      console.log(projects);

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
    console.log(this.state.projects);
    return (
      <div className={ProjectsStyles.Projects}>
        <h2 className={ProjectsStyles.Title}>Projects</h2>
        {this.renderProjects()}
      </div>
    );
  }
}

export default Projects;
