import React from 'react';
import NavbarStyles from './Navbar.module.css';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  return (
    <header className={NavbarStyles.Navbar}>
      <div className={NavbarStyles.Logo}>
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
}

export default Navbar;
