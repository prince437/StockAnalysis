import React from 'react';
import './Header.css'; 
import { NavLink } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";

// import logo from './logo.png';

const Navbar = () => {
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    
    <nav className="navbar">
      {/* <div className="navbar-left">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
      </div> */}
      <div className="navbar-middle">
        <ul className="navbar-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/E-learning">E-learning</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          
        </ul>
      </div>
      <div className="navbar-right">
        <div className='userName'>{isAuthenticated && (<p>{user.name}</p>)} </div>

        {
            isAuthenticated ? (
                <button className='login-btn' onClick={() => logout({ logoutParams:{returnTo: window.location.origin}})}>logout</button>
            ):(
                <button className='login-btn' onClick={() => loginWithRedirect()}>Log In</button>
            )
        }
      
      </div>
    </nav>
  );
};

export default Navbar;
