import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>Inicio</Link>
        </li>
        <li style={styles.li}>
          <Link to="/productLayout" style={styles.link}>Inventario</Link>
        </li>
        <li style={styles.li}>
          <Link to="/Profile" style={styles.link}>Perfil</Link>
        </li>
        <li style={styles.li}>
          <Link to="/ComingSoon" style={styles.link}>Perfil de provedores</Link>
        </li>
        
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  li: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    padding: '10px',
    border: '1px solid #fff',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default Menu;
