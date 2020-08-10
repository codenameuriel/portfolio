import React from 'react';
import NavItemsStyles from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavItems = () => {
  return (
    <ul className={NavItemsStyles.NavItems}>
      <NavItem link="/">Projects</NavItem>
      <NavItem link="/blogs">Blogs</NavItem>
      <NavItem link="/aboutme">About Me</NavItem>
    </ul>
  );
}

export default NavItems;
