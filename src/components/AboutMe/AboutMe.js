import React from 'react';
import ProfilePicture from '../../assets/images/FullSizeRender.jpeg';
import AboutMeStyles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={AboutMeStyles.AboutMe}>
      <h2>About Me</h2>
      <img src={ProfilePicture} alt="My Profile Picture"/>
      <p>My name is Uriel Rodriguez. My journey as a Full stack web developer started a little under a year ago.</p>
    </div>
  );
}

export default AboutMe;
