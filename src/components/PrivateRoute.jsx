import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  // TODO: create a custom loading component
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Navigate to="/marketplace" />;
  }
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
