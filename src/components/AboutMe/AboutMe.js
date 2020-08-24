import React from 'react';
import ProfilePicture from '../../assets/images/FullSizeRender.jpeg';
import AboutMeStyles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={AboutMeStyles.AboutMe}>
      <h2 className={AboutMeStyles.Title}>About Me</h2>
      <hr />
      <div className={AboutMeStyles.Container}>
        <div className={AboutMeStyles.ImageDiv}>
          <img src={ProfilePicture} alt="Uriel Rodriguez"/>
        </div>
        <div className={AboutMeStyles.BioDiv}>
          <p>
            My name is Uriel Rodriguez and I am a software developer based out of New York City. I recently completed the Full Stack Web Development bootcamp program at Flatiron School. There I worked on several projects using various technologies including, but not limited to, Ruby on Rails, JavaScript and React.
          </p>
          <p>
            My journey to becoming a full stack web developer started a year ago when I decided to transition from the social services field to seek change and new opportunities in my career and life. With that change, I took with me my curiosity for things work, whether it was the psychology of human behavior or concepts like abstraction and how it helps programs scale as they grow in complexity.
          </p>
          <p>
            While I am currently mostly versed in front-end development, I am continuously learning, including back-end related technologies such as Node.js as I hope to work and focus on data organization and application architecture and scalability. Aside from programming, I am learning more on programming but also enjoy being outdoors in nature, whether hiking or running.
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
