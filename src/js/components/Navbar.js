import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const history = useHistory();

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            className="btn btn-outline-primary"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <Link to="/settings" className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user">Hi User</span>

          <Link to="/" className="btn  btn-outline-success ml-2">
            Login
          </Link>
          {/* if using button instead of link, can have an onclick with history.push('/someRoute') */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
