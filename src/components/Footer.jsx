import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sağlık</h3>
          <ul>
            <li><Link to="/saglik/meme-kanseri">Meme Kanseri</Link></li>
            <li><Link to="/saglik/kanser-bakimi">Kanser Bakımı</Link></li>
            <li><Link to="/saglik/alzheimer-bakimi">Alzheimer Bakımı</Link></li>
            <li><Link to="/saglik/kronik-bobrek-hastaligi">Kronik Böbrek Hastalığı</Link></li>
            <li><Link to="/saglik/kopd">KOAH</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Sağlıklı Yaşam</h3>
          <ul>
            <li><Link to="/saglikli-yasam/fitness">Fitness</Link></li>
            <li><Link to="/saglikli-yasam/beslenme">Beslenme</Link></li>
            <li><Link to="/saglikli-yasam/uyku">Uyku</Link></li>
            <li><Link to="/saglikli-yasam/ruh-sagligi">Ruh Sağlığı</Link></li>
            <li><Link to="/saglikli-yasam/cinsel-saglik">Cinsel Sağlık</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Araçlar</h3>
          <ul>
            <li><Link to="/araclar/vucut-kitle-indeksi">Vücut Kitle İndeksi</Link></li>
            <li><Link to="/araclar/bazal-metabolizma-hizi">Bazal Metabolizma Hızı</Link></li>
            <li><Link to="/araclar/makro-hesaplayici">Makro Hesaplayıcı</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <ul>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
            <li><Link to="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
            <li><Link to="/kullanim-kosullari">Kullanım Koşulları</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Healthgrow. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 