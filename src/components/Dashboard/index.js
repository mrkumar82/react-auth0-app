import React from 'react';
import Logout from '../Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth0();
  if (!isAuthenticated) return <h2>Please login</h2>;
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'></div>
          <div className='col d-flex justify-content-end'>
            <Logout />
          </div>
        </div>
      </div>

      <div className='d-flex'>
        <div className='card'>
          <img
            src='https://via.placeholder.com/350x200'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href='#' className='btn btn-primary'>
              Go somewhere
            </a> */}
          </div>
        </div>
        <div className='card'>
          <img
            src='https://via.placeholder.com/350x200'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href='#' className='btn btn-primary'>
              Go somewhere
            </a> */}
          </div>
        </div>
        <div className='card'>
          <img
            src='https://via.placeholder.com/350x200'
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href='#' className='btn btn-primary'>
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
