import React from 'react';
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
