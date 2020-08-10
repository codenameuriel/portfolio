import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItemStyles from './NavItem.module.css';

const NavItem = props => {
  return (
    <li className={NavItemStyles.NavItem}>
      <NavLink to={props.link} exact activeClassName={NavItemStyles.active}>{props.children}</NavLink>
    </li>
  );
}

export default NavItem;
