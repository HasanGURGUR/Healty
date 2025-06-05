import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/ic_header_logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="nav-tabs">
        <ul>
          <li><Link to="/saglik">Sağlık</Link></li>
          <li><Link to="/saglikli-yasam">Sağlıklı Yaşam</Link></li>
          <li><Link to="/beslenme">Beslenme</Link></li>
          <li><Link to="/fitness">Fitness</Link></li>
          <li><Link to="/uyku">Uyku</Link></li>
          <li><Link to="/psikoloji">Psikoloji</Link></li>
          <li><Link to="/araclar">Araçlar</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;