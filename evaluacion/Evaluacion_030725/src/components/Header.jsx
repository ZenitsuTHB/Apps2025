import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <h1>API de Harry Potter</h1>
        <p className="tagline">Consulta de la API</p>
      </div>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/historias">historias</Link>
        <Link to="/objetosmagicos">Objetos magicos</Link>
      </nav>
    </header>
  );
}

export default Header;
