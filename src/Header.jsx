import React from 'react';
import logo from './logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>Notre Catalogue de Produits</h1>
      <nav className="menu">
        <a className="menu-item" href="#">Accueil</a>
        <a className="menu-item" href="#">Produits</a>
        <a className="menu-item" href="#">Contact</a>
    </nav>
    </header>
  );
}

export default Header;


