import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoutes({ children,isLogged, ...rest }) {

  return (
    <Route
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
