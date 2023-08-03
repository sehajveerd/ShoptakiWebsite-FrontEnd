/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const LoginCallback = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const token = await getAccessTokenSilently();
        // TODO: Send a query to your server to check onboarding status
        // if (data.hasCompletedOnboarding) {
        //   navigate('/portfolio');
        // } else {
        //   navigate('/onboarding/personal-info');
        // }
        navigate('/portfolio');
      } catch (error) {
        console.log(error);
        // Handle error
      }
    };
    checkOnboardingStatus();
  }, [getAccessTokenSilently, navigate, user]);

  // Render something while the onboarding check is ongoing
  return <div>Checking onboarding status...</div>;
};

export default LoginCallback;
