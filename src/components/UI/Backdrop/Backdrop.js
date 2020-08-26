import React from 'react';
import BackdropStyles from './Backdrop.module.css';

const Backdrop = props => {
  return props.emailSent ? <div className={BackdropStyles.Backdrop }></div> : null;
}

export default Backdrop;
