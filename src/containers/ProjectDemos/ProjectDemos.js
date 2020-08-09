import React, { Component } from 'react';
import key from '../../key';
import axios from '../../axios'
import parse from 'html-react-parser';
import ProjectDemosStyles from './ProjectDemos.module.css';
import Spinner from '../../components/Spinner/Spinner';

class ProjectDemos extends Component {
  state = {
    demos: []
  }

  componentDidMount() {
    this.getProjectDemos();
  }

  async getProjectDemos() {
    try {
      const demoIds = '_WgXrcOqG3M,gf8-Ui0z7NI,4KLrYPeXw9Q';

      const data = await axios.get(`videos?id=${demoIds}&part=snippet,player&key=${key}`);
      
      this.setState({
        demos: data.data.items
      });

    } catch (error) {
      console.log(error);
    }
  }

  renderDemos() {
    let demos = <Spinner />;

    if (this.state.demos.length > 0) {
      demos = (
        this.state.demos.map(demo => {
          return (
            <div style ={{width: '35%'}}>
              <h3>{demo.snippet.title}</h3>
              {parse(demo.player.embedHtml)}
              <p>{demo.snippet.description}</p>
            </div>
          );
        })
      );
    }

    return demos;
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div className={ProjectDemosStyles.ProjectDemos}>
          {this.renderDemos()}
        </div>
      </div>
    );
  }
}

export default ProjectDemos;
