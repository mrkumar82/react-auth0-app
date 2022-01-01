import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const logoutHandler = () => {
    logout();
  };

  return (
    <>
      {isAuthenticated && (
        <div>
          <div>Hello, {user?.name}</div>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Logout;
