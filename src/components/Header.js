import React from 'react';
import logo from '../images/logo.png';
import '../stylesheets/Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <img className='Header-logo' src={logo} alt='Rick and Morty'></img>
    </div>
  );
};

export default Header;
