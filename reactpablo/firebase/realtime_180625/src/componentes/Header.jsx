import React from 'react';
import '../styles/Header.css'; // 👈 this is the important line

function Header() {
  const title = "TRIVERSE";

  return (
    <header className="header-container">
      <div className="orbit-container">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
      </div>
      <h1 className="game-title">
        {title.split('').map((letter, index) => (
          <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h1>
    </header>
  );
}

export default Header;
