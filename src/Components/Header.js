import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
function Header() {
  return (
    <header>
      <h1>My Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;