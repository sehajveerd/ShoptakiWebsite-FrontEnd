import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client/react';
import client from './apollo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
