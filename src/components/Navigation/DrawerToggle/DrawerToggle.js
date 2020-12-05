import React from 'react';
import DrawerToggleStyles from './DrawerToggle.module.css';

const DrawerToggle = props => {
  
  return (
    <div 
      className={DrawerToggleStyles.DrawerToggle}
      onClick={() => props.showSideDrawer(true)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default DrawerToggle;
