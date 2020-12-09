import React from 'react';
import NavItemsStyles from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const NavItems = props => {
  let navItemsStyles = [NavItemsStyles.NavItems, NavItemsStyles.Mobile];

  if (!props.mobileView) navItemsStyles = [NavItemsStyles.NavItems, NavItemsStyles.Desktop];

  const { closeSideDrawer } = props;

  return (
    <ul className={navItemsStyles.join(' ')}>
      <NavItem class={NavItemsStyles.Home} link="/" closeSideDrawer={closeSideDrawer}>Home</NavItem>
      <NavItem link="/projects" closeSideDrawer={closeSideDrawer}>Projects</NavItem>
      <NavItem link="/blogs" closeSideDrawer={closeSideDrawer}>Blogs</NavItem>
      <NavItem link="/aboutme" closeSideDrawer={closeSideDrawer}>About Me</NavItem>
      <NavItem link="/contact" closeSideDrawer={closeSideDrawer}>Contact</NavItem>
    </ul>
  );
}

export default NavItems;
