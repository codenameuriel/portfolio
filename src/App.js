import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from './hoc/Layout/Layout';
import AboutMe from './components/AboutMe/AboutMe';
import LandingPage from './components/LandingPage/LandingPage';

// lazy loading
const AsyncBlogs = asyncComponent(() => {
  return import('./containers/Blogs/Blogs');
});

const AsyncProjects = asyncComponent(() => {
  return import('./containers/Projects/Projects.js');
});

const AsyncErrorPage = asyncComponent(() => {
  return import('./components/ErrorPage/ErrorPage.js');
});

const AsyncContact = asyncComponent(() => {
  return import('./components/Contact/Contact.js');
})

const App = () => {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/contact" component={AsyncContact}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/blogs" component={AsyncBlogs}/>
          <Route path="/projects" component={AsyncProjects}/>
          <Route exact path="/" component={LandingPage}/>
          <Route component={AsyncErrorPage}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
