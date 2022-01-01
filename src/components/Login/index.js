import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const auth0Login = () => {
    loginWithRedirect();
  };

  return (
    <div>
      {!isAuthenticated && (
        <button className='btn btn-primary' onClick={auth0Login}>
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
