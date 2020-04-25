import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img className='header-logo' src={logo} alt='Rick and Morty'></img>
    </div>
  );
};

export default Header;
