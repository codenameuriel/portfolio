import React from 'react';
import LogoStyles from './Logo.module.css';
import PortfolioLogo from "../../assets/images/UrielsPortfolioLogo.png";

const Logo = () => {
  return (
    <div className={LogoStyles.Logo}>
      <a href="/">
        <img src={PortfolioLogo} alt="My Logo"/>
      </a>
    </div>
  );
}

export default Logo;
