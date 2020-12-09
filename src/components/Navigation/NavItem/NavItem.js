import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItemStyles from './NavItem.module.css';

const NavItem = props => {
  const { closeSideDrawer } = props;

  return (
    <li 
      className={NavItemStyles.NavItem}
      onClick={() => closeSideDrawer ? closeSideDrawer(false) : null}>
      <NavLink to={props.link} exact activeClassName={NavItemStyles.active} className={props.class}>{props.children}</NavLink>
    </li>
  );
}

export default NavItem;
