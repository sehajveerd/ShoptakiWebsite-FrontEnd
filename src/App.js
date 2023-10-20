import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import LoginCallback from './components/LoginCallback';
import Marketplace from './pages/marketplace';
import About from './pages/about';
import Forum from './pages/forum';
import Support from './pages/support';
import Trends from './pages/trends';
import Landing from './pages/landing';
import Portfolio from './pages/portfolio';
import Listingproperty from './pages/listingproperty';
import UserOnboarding from './components/onboarding';
import NotFound from './components/NotFound';

const App = () => {
  // TODO: /onboarding/* should be accessed by signed in users only
  let element = useRoutes([
    { path: '/', element: <Landing /> },
    {
      path: '/callback',
      element: (
        <PrivateRoute>
          <LoginCallback />
        </PrivateRoute>
      ),
    },
    { path: '/marketplace', element: <Marketplace /> },
    { path: '/about', element: <About /> },
    { path: '/trends', element: <Trends /> },
    { path: '/forum', element: <Forum /> },
    { path: '/support', element: <Support /> },
    {
      path: '/portfolio',
      element: (
        <PrivateRoute>
          <Portfolio />
        </PrivateRoute>
      ),
    },
    { path: '/listingpage/:zpid', element: <Listingproperty /> },
    {
      path: '/onboarding/personal-info',
      element: (
        <PrivateRoute>
          <UserOnboarding currentStep="personal-info" />
        </PrivateRoute>
      ),
    },
    {
      path: '/onboarding/identity-finance',
      element: (
        <PrivateRoute>
          <UserOnboarding currentStep="identity-finance" />
        </PrivateRoute>
      ),
    },
    {
      path: '/onboarding/investment-experience',
      element: (
        <PrivateRoute>
          <UserOnboarding currentStep="investment-experience" />
        </PrivateRoute>
      ),
    },
    {
      path: '/onboarding/investment-reason',
      element: (
        <PrivateRoute>
          <UserOnboarding currentStep="investment-reason" />
        </PrivateRoute>
      ),
    },

    { path: '*', element: <NotFound /> },
  ]);

  const location = useLocation();
  const showNavbarFooter = !location.pathname.startsWith('/onboarding');

  return (
    <div className="h-screen flex flex-col">
      {showNavbarFooter && <Navbar />}
      {element}
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
