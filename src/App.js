import React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marketplace from './pages/marketplace';
import About from './pages/about';
import Forum from './pages/forum';
import Support from './pages/support';
import Trends from './pages/trends';
import Landing from './pages/landing';
import UserOnboarding from './components/onboarding';
import NotFound from './components/NotFound';

const App = () => {
  // TODO: /onboarding/* should be accessed by signed in users only
  let element = useRoutes([
    { path: '/', element: <Landing /> },
    { path: '/marketplace', element: <Marketplace /> },
    { path: '/about', element: <About /> },
    { path: '/trends', element: <Trends /> },
    { path: '/forum', element: <Forum /> },
    { path: '/support', element: <Support /> },
    {
      path: '/onboarding/personal-info',
      element: <UserOnboarding currentStep="personal-info" />,
    },
    {
      path: '/onboarding/identity-finance',
      element: <UserOnboarding currentStep="identity-finance" />,
    },
    {
      path: '/onboarding/investment-experience',
      element: <UserOnboarding currentStep="investment-experience" />,
    },
    {
      path: '/onboarding/investment-reason',
      element: <UserOnboarding currentStep="investment-reason" />,
    },

    { path: '*', element: <NotFound /> },
  ]);

  const { error } = useAuth0();
  const location = useLocation();
  const showNavbarFooter = !location.pathname.startsWith('/onboarding');

  return (
    <div>
      {showNavbarFooter && <Navbar />}
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
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default App;
