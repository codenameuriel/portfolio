import React from 'react';
import SideDrawerStyles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Nav from '../Nav/Nav';
import NavItems from '../NavItems/NavItems';

const SideDrawer = props => {
  let drawerStyles = [SideDrawerStyles.SideDrawer, SideDrawerStyles.Hide];

  if (props.showDrawer) drawerStyles = [SideDrawerStyles.SideDrawer, SideDrawerStyles.Show];

  const { closeSideDrawer } = props;

  let nav = (
    <Nav>
      <NavItems closeSideDrawer={closeSideDrawer}/>
    </Nav>
  );

  // desktop view
  if (window.innerWidth >= 800) nav = null;

  return (
    <Nav>
      <Backdrop 
        showBackdrop={props.showDrawer} 
        closeSideDrawer={props.closeSideDrawer}/>
      <div className={drawerStyles.join(' ')}>
        {nav}
      </div>
    </Nav>
  );
}

export default SideDrawer;
