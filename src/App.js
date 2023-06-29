import React from 'react';
import { useRoutes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './pages/marketplace';
import About from './pages/about';
import Forum from './pages/forum';
import Support from './pages/support';
import Trends from './pages/trends';
import Landing from './pages/landing';

const App = () => {
  let element = useRoutes([
    { path: '/', element: <Landing /> },
    { path: '/marketplace', element: <Marketplace /> },
    { path: '/about', element: <About /> },
    { path: '/trends', element: <Trends /> },
    { path: '/forum', element: <Forum /> },
    { path: '/support', element: <Support /> },
  ]);

  return (
    <div>
      <Navbar />
      {element}
      <Footer />
    </div>
  );
};

export default App;
