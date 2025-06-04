import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/ic_header_logo.png" alt="Logo" />
      </div>
      <nav className="nav-tabs">
        <ul>
          <li><a href="#saglik">Sağlık</a></li>
          <li><a href="#saglikli-yasam">Sağlıklı Yaşam</a></li>
          <li><a href="#beslenme">Beslenme</a></li>
          <li><a href="#fitness">Fitness</a></li>
          <li><a href="#uyku">Uyku</a></li>
          <li><a href="#psikoloji">Psikoloji</a></li>
          <li><a href="#araclar">Araçlar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 