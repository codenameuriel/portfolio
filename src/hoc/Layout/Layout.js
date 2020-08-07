import React from 'react';
import LayoutStyles from './Layout.module.css';
import Navbar from '../../components/Navigation/Navbar/Navbar';

const Layout = props => {
  return (
    <>
      <Navbar />
      <main className={LayoutStyles.Content}>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
