import React from 'react';
import ErrorPageStyles from './ErrorPage.module.css';
import ArrowImage from '../../assets/images/ArrowImage.png';

const ErrorPage = () => {
  return (
    <div className={ErrorPageStyles.ErrorPage}>
      <h1>Sorry, nothing to see here...</h1>
      <div className={ErrorPageStyles.Container}>
        <p>But check out my projects and blogs!</p>
        <img src={ArrowImage} alt="Arrow"/>
      </div>
    </div>
  );
}

export default ErrorPage;
