import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import ProjectDemos from './containers/ProjectDemos/ProjectDemos';
import Blogs from './containers/Blogs/Blogs';
import AboutMe from './components/AboutMe/AboutMe';

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
        <Switch>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/blogs" component={Blogs}/>
          <Route path="/" component={ProjectDemos}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
