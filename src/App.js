import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import { Layout } from './hoc/Layout';
import Example from './pages/Example/Example';

function App() {
  const routes = (
    <Routes>
      <Route path='/' element={<AboutMe />} />
      <Route path='/example' element={<Example />} />
    </Routes>
  );

  return (
    <Router>
      <div className='App'>
        <Layout>{routes}</Layout>
      </div>
    </Router>
  );
}

export default App;
