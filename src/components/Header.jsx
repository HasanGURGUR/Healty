import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      // Eğer zaten ana sayfadaysa, doğrudan yukarı kaydır
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Link'in varsayılan navigasyonunu engellemiyoruz, çünkü aynı rotaya gitmek tekrar render tetiklemeyecektir.
    }
    // Eğer ana sayfada değilse, Link'in normal navigasyonuna izin ver.
    // ScrollToTop bileşeni (App.jsx içinde) rota değişiminde yukarı kaydırmayı halledecektir.
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={handleHomeClick}>
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