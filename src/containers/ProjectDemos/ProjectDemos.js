import React, { Component } from 'react';
import { youtubeKey } from '../../key';
import { youtubeAxios } from '../../axios'
import parse from 'html-react-parser';
import ProjectDemosStyles from './ProjectDemos.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import axios from 'axios';

class ProjectDemos extends Component {
  state = {
    demos: []
  }

  componentDidMount() {
    this.getProjectDemos();
  }

  async getProjectDemos() {
    try {
      const demoIds = '_WgXrcOqG3M,gf8-Ui0z7NI,4KLrYPeXw9Q,YA4p08g6QyQ';

      const data = await youtubeAxios.get(`videos?id=${demoIds}&part=snippet,player&key=${youtubeKey}`);
      
      this.setState({
        demos: data.data.items
      });

    } catch (error) {
      console.log(error);
    }
  }

  renderDemos() {
    let demos = <Spinner />;

    const techStacks = [
      {
        name: 'Flatiron Overflow',
        frontend: 'Vanilla JavaScript',
        backend: 'Ruby on Rails API',
        database: 'PostgreSQL',
        mapper: 'Active Record',
        libraries: [],
        apis: [],
        deployed: false,
        deploymentLink: null
      },
      {
        name: 'Sugar Lips Cupcakes',
        frontend: 'React JavaScript',
        backend: 'Ruby on Rails API',
        database: 'PostgreSQL',
        mapper: 'Active Record',
        libraries: [],
        apis: [],
        deployed: false,
        deploymentLink: null
      },
      {
        name: 'Plugged',
        frontend: 'React JavaScript',
        backend: 'Ruby on Rails API',
        database: 'PostgreSQL',
        mapper: 'Active Record',
        libraries: ['Axios'],
        apis: ['News API'],
        deployed: false,
        deploymentLink: null
      },
      {
        name: 'Burger App',
        frontend: 'React JavaScript',
        backend: 'Google Firebase',
        database: 'Google Firebase',
        mapper: null,
        libraries: ['Redux', 'Redux Thunk', 'Axios'],
        apis: [],
        deployed: true,
        deploymentLink: 'https://burger-app-845dc.firebaseapp.com/'
      }
    ];

    const githubLinks = [
      {
        name: 'Flatiron Overflow',
        frontend: 'https://github.com/CBreakr/mod3_flatoverflow_client',
        backend: 'https://github.com/CBreakr/mod3_flatoverflow_server'
      },
      {
        name: 'Sugar Lips Cupcakes',
        frontend: 'https://github.com/codenameuriel/mod4-sugarlips_cupcakes-client',
        backend: 'https://github.com/codenameuriel/mod4-sugarlips_cupcakes-server'
      },
      {
        name: 'Plugged',
        frontend: 'https://github.com/codenameuriel/plugged-client',
        backend: 'https://github.com/codenameuriel/plugged-server'
      },
      {
        name: 'Burger App',
        frontend: 'https://github.com/codenameuriel/burger-app',
        backend: ''
      }
    ]

    if (this.state.demos.length > 0) {
      demos = (
        this.state.demos.map((demo, index) => {
          const demoData = {
            key: demo.id,
            title: demo.snippet.title,
            video: parse(demo.player.embedHtml),
            desc: demo.snippet.description,
            tech: techStacks[index],
            github: githubLinks[index]
          };

          return <ProjectCard demoData={demoData} />;
        })
      );
    }

    return demos;
  }

  render() {
    return (
      <div className={ProjectDemosStyles.ProjectDemos}>
        <h2 className={ProjectDemosStyles.Title}>Projects</h2>
        {this.renderDemos()}
      </div>
    );
  }
}

export default ProjectDemos;
