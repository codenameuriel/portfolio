import React from 'react';
import ErrorPageStyles from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={ErrorPageStyles.ErrorPage}>
      <h1>Sorry, nothing to see here...</h1>
      <div className={ErrorPageStyles.Container}>
        <p>But give my projects and blogs a look!</p>
      </div>
    </div>
  );
}

export default ErrorPage;
