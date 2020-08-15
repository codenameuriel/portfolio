import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutMe from './components/AboutMe/AboutMe';

// lazy loading
const AsyncBlogs = asyncComponent(() => {
  return import('./containers/Blogs/Blogs');
});

const AsyncProjectDemos = asyncComponent(() => {
  return import('./containers/ProjectDemos/ProjectDemos.js');
});

const AsyncErrorPage = asyncComponent(() => {
  return import('./components/ErrorPage/ErrorPage.js');
});

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
        <Switch>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/blogs" component={AsyncBlogs}/>
          <Route path="/projects" component={AsyncProjectDemos}/>
          <Redirect exact from="/" to="/aboutme"/>
          <Route component={AsyncErrorPage}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
