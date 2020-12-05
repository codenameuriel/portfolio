import React from 'react';
import { useState } from 'react';
import NavbarStyles from './Navbar.module.css';
import NavItems from '../NavItems/NavItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Navbar = () => {
  const [ showSideDrawer, setShowSideDrawer ] = useState(false);

  return (
    <header className={NavbarStyles.Header}>
      <div className={NavbarStyles.Logo}>
        {/* Logo goes here */}
      </div>
      <SideDrawer 
        showDrawer={showSideDrawer}
        closeSideDrawer={setShowSideDrawer}/>
      <nav className={NavbarStyles.Nav}>
        <DrawerToggle showSideDrawer={setShowSideDrawer}/>
        <NavItems />
      </nav>
    </header>
  );
}

export default Navbar;
