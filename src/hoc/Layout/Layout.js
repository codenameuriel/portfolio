import React from 'react';
import LayoutStyles from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';

const Layout = props => {
  return (
    <div className={LayoutStyles.Layout}>
      <Navbar />
      <main className={LayoutStyles.Main}>
        {props.children}
      </main>
    </div>
  );
}

export default Layout;
