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

  return (
    <div className={LayoutStyles.Layout}>
      <Header>
        <SideDrawer 
          showDrawer={showSideDrawer}
          closeSideDrawer={setShowSideDrawer}/>
        <Nav>
          <DrawerToggle showSideDrawer={setShowSideDrawer}/>
          {showSideDrawer ? null : <NavItems />}
        </Nav>
      </Header>
      <main className={LayoutStyles.Main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
