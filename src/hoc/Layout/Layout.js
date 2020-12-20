import React from 'react';
import { useState } from 'react';
import LayoutStyles from './Layout.module.css';
import Header from '../../components/Header/Header';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
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
        <DrawerToggle showSideDrawer={setShowSideDrawer} />
        <nav className={LayoutStyles.Nav}>
          <NavItems closeSideDrawer={null}/>
        </nav>
      </Header>
      <main className={LayoutStyles.Main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
