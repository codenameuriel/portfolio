import React from 'react';
import NavItemsStyles from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavItems = props => {
  let navItemsStyles = [NavItemsStyles.NavItems, NavItemsStyles.Mobile];

  if (!props.mobileView) navItemsStyles = [NavItemsStyles.NavItems, NavItemsStyles.Desktop];

  return (
    <ul className={navItemsStyles.join(' ')}>
      <NavItem class={NavItemsStyles.Home} link="/">Home</NavItem>
      <NavItem link="/projects">Projects</NavItem>
      <NavItem link="/blogs">Blogs</NavItem>
      <NavItem link="/aboutme">About Me</NavItem>
      <NavItem link="/contact">Contact</NavItem>
    </ul>
  );
}

export default NavItems;
