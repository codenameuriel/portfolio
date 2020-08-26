import React from 'react';
import LogoStyles from './Logo.module.css';
import PortfolioLogo from "../../assets/images/UrielsPortfolioLogo.png";

const Logo = () => {
  const blockDragNDrop = event => {
    event.preventDefault();
  }

  return (
    <div className={LogoStyles.Logo}>
      <a href="/aboutme">
        <img src={PortfolioLogo} alt="My Logo" onMouseDown={blockDragNDrop}/>
      </a>
    </div>
  );
}

export default Logo;
