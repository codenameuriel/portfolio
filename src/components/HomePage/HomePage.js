import React, { Component } from 'react';
import HomePageStyles from './HomePage.module.css';
import ProjectDemos from '../../containers/ProjectDemos/ProjectDemos';

class HomePage extends Component {
  render() {
    return (
      <div className={HomePageStyles.HomePage}>
        <div className={HomePageStyles.Jumbotron}>
          <h1>Uriel's Portfolio</h1>
          <h2>Full Stack Web Developer with JavaScript, React, Node.js, Ruby on Rails</h2>
        </div>
        <ProjectDemos />
      </div>
    );
  }
}

export default HomePage;
