import React from 'react';
import LandingPageStyles from './LandingPage.module.css';
import Me from '../../assets/images/profile.jpeg';

const LandingPage = () => {
  return (
    <div className={LandingPageStyles.LandingPage}>
      <div className={LandingPageStyles.Content}>
        <img src={Me} alt="Me"/>
        <h1>Uriel Rodriguez</h1>
        <p>Full Stack Web Developer with JavaScript, React, Node.js, Ruby on Rails</p>
      </div>
    </div>
  );
};

export default LandingPage;
