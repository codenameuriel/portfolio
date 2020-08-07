import React from 'react';
import NavbarStyles from './Navbar.module.css';
import Logo from '../../Logo/Logo';

const Navbar = () => {
  return (
    <header className={NavbarStyles.Navbar}>
      <div className={NavbarStyles.Logo}>
        <Logo />
      </div>
      <nav></nav>
    </header>
  );
}

export default Navbar;
