import React from 'react';
import NavbarStyles from './Navbar.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Navbar = () => {
  return (
    <header className={NavbarStyles.Navbar}>
      <div className={NavbarStyles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </header>
  );
}

export default Navbar;
