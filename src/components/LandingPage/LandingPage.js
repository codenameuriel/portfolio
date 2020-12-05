import React from 'react';
import LandingPageStyles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={LandingPageStyles.LandingPage}>
      <div className={LandingPageStyles.Content}>
        <h1>Uriel Rodriguez</h1>
        <p>Full Stack Web Developer with JavaScript, React, Node.js, Ruby on Rails</p>
      </div>
    </div>
  );
};

export default LandingPage;
