
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const HeaderDetail = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="home-link">Home</Link>
        
      </div>
    </header>
  );
};

export default HeaderDetail;
