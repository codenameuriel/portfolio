import React from 'react';
import HeaderStyles from './Header.module.css';

const Header = props => {
  return <header className={HeaderStyles.Header}>{props.children}</header>;
};

export default Header;
