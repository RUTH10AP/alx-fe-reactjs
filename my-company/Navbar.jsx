import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f9' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;