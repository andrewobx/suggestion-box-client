import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../../state';
import { isTokenExpired } from '../../utils/jwt';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [{ auth }] = useStateValue();

  return (
    <Route
      {...rest}
      render={props =>
        isTokenExpired() ? (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
