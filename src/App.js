import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

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

  const { error } = useAuth0();

  return (
    <div>
      <Navbar />
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Hold on!</strong>
          <span className="block sm:inline">
            {' '}
            You need to verify your email before you can log in. Check your
            inbox for the verification email.
          </span>
        </div>
      )}
      {!error && element}
      <Footer />
    </div>
  );
};

export default App;
