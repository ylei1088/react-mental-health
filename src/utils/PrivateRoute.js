import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({ children, isLogged, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
