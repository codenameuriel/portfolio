import React from 'react';
import BackdropStyles from './Backdrop.module.css';

const Backdrop = props => {
  return (
    props.emailSent || props.showBackdrop ? 
      <div 
        className={BackdropStyles.Backdrop }
        onClick={() => props.closeSideDrawer(false)}></div> : null
  );
}

export default Backdrop;
