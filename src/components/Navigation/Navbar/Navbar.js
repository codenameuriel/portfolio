import React from 'react';
import NavbarStyles from './Navbar.module.css';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const Navbar = () => {
  return (
    <header className={NavbarStyles.Header}>
      <div className={NavbarStyles.Logo}>
        {/* Logo goes here */}
      </div>
      <nav className={NavbarStyles.Nav}>
        <DrawerToggle />
        <NavItems />
      </nav>
    </header>
  );
}

export default Navbar;
