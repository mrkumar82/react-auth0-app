import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div className='container'>
      <Login />

      <Dashboard />
    </div>
  );
}

export default App;
