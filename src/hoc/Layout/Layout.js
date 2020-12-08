import React from 'react';
import { useState } from 'react';
import LayoutStyles from './Layout.module.css';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Nav from '../../components/Navigation/Nav/Nav';
import DrawerToggle from '../../components/Navigation/DrawerToggle/DrawerToggle';
import NavItems from '../../components/Navigation/NavItems/NavItems';

const Layout = props => {
  const [ showSideDrawer, setShowSideDrawer ] = useState(false);

  let navItems = <NavItems />;
  // mobile view
  if (window.innerWidth < 800) navItems = null;

  let sideDrawer = null;
  if (showSideDrawer) sideDrawer = (
    <SideDrawer 
      showDrawer={showSideDrawer}
      closeSideDrawer={setShowSideDrawer}/>
  );

  return (
    <div className={LayoutStyles.Layout}>
      <Header>
        {sideDrawer}
        <Nav>
          <DrawerToggle showSideDrawer={setShowSideDrawer} />
          {navItems}
        </Nav>
      </Header>
      <main className={LayoutStyles.Main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
