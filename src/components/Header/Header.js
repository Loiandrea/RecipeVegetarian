
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import vegetarianIcon from '../icon/vegetarian.png';



const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={vegetarianIcon} alt="Logo" />
        <h1>Cerca la tua ricetta preferita...</h1>
      </div>
    </header>
  );
};

export default Header;
