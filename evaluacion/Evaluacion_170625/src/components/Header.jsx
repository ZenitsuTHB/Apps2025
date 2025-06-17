import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1>El Mundo Today</h1>
        <p className="tagline">La actualidad del mañana !</p>
      </div>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/laderrota">La Derrota</Link>
      </nav>
    </header>
  );
}

export default Header;
