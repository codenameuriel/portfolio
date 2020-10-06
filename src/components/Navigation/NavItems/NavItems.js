import React from 'react';
import NavItemsStyles from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavItems = () => {
  return (
    <ul className={NavItemsStyles.NavItems}>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/projects">Projects</NavItem>
      <NavItem link="/blogs">Blogs</NavItem>
      <NavItem link="/aboutme">About Me</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </ul>
  );
}

export default NavItems;
