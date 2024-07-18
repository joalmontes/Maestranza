import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/" style={linkStyle}>
        <h1>Maestranza S.A</h1>
      </Link>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff'
};

export default Header;
