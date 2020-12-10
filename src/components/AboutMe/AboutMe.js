import React from 'react';
import ProfilePicture from '../../assets/images/profile.jpeg';
import AboutMeStyles from './AboutMe.module.css';

const AboutMe = () => {
  const blockDragNDrop = event => {
    event.preventDefault();
  }

  return (
    <div className={AboutMeStyles.AboutMe}>
      <h2 className={AboutMeStyles.Title}>About Me</h2>
      <div className={AboutMeStyles.Container}>
        <div className={AboutMeStyles.ImageDiv}>
          <img src={ProfilePicture} alt="Uriel Rodriguez" onMouseDown={blockDragNDrop}/>
        </div>
        <div className={AboutMeStyles.Divider}></div>
        <div className={AboutMeStyles.BioDiv}>
          <p>
            My name is Uriel Rodriguez and I'm a software developer based out of New York City. I recently completed the Full Stack Web Development bootcamp program at Flatiron School. There I worked on several projects using various technologies including, but not limited to, Ruby on Rails, JavaScript and React.
          </p>
          <br />
          <p>
            My journey to becoming a full stack web developer started 6 months ago when I decided to transition from the social services field to seek change and new opportunities in my career and life. With that change, my curiosity for how things work carried over into concepts like abstraction and how it helps programs scale as they grow in complexity.
          </p>
          <br />
          <p>
            While most of my knowledge is in front-end development, I'm continuously adding new skill sets. Currently I'm focused on back-end related technologies such as Node.js as I hope to work on data organization and application architecture and scalability. Aside from programming, I like to balance my time by enjoying the outdoors whether it's hiking or running and spending time with family.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
