import React from 'react';
import NavStyles from './Nav.module.css';

const Nav = props => {
  return (
    <nav className={NavStyles.Nav}>{props.children}</nav>
  );
};

export default Nav;
