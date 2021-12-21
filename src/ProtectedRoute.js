import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAdmin = localStorage.getItem('isAdmin');

  return (
    <Route
      {...restOfProps}
      render={(props) => (isAdmin === 'true' ? <Component {...props} /> : <Redirect to="/access-denied" />)}
    />
  );
}

export { ProtectedRoute };
