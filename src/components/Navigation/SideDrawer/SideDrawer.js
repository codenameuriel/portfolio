import React from 'react';
import SideDrawerStyles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavItems from '../NavItems/NavItems';

const SideDrawer = props => {
  let drawerStyles = [ SideDrawerStyles.SideDrawer, SideDrawerStyles.Hide ];

  if (props.showDrawer) drawerStyles = [ SideDrawerStyles.SideDrawer, SideDrawerStyles.Show ];

  return (
    <>
      <Backdrop 
        showBackdrop={props.showDrawer} 
        closeSideDrawer={props.closeSideDrawer}/>
      <div className={drawerStyles.join(' ')}>
        {props.showDrawer ? 
          <nav>
            <NavItems />
          </nav> : null}
      </div>
    </>
  );
}

export default SideDrawer;
