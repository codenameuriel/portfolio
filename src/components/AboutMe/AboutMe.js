import React from 'react';
import ProfilePicture from '../../assets/images/FullSizeRender.jpeg';
import AboutMeStyles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={AboutMeStyles.AboutMe}>
      <h2>About Me</h2>
      <hr />
      <div className={AboutMeStyles.Container}>
        <div className={AboutMeStyles.ImageDiv}>
          <img src={ProfilePicture} alt="My Profile Picture"/>
        </div>
        <div className={AboutMeStyles.BioDiv}>
          <p>My name is Uriel Rodriguez. My journey as a Full stack web developer started a little under a year ago.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
