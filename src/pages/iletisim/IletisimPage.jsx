import React from 'react';
import './IletisimPage.css';

const IletisimPage = () => {
  return (
    <div className="iletisim-container">
      <div className="hero-section">
        <h1>İletişim</h1>
        <p className="hero-description">
          Sorularınız için bizimle iletişime geçin
        </p>
      </div>

      <div className="content-wrapper">
        <p className="contact-text">
          Sorularınız, önerileriniz veya geri bildirimleriniz için aşağıdaki e-posta adresinden bize ulaşabilirsiniz.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                📧
              </div>
              <h3>E-posta</h3>
              <p>info@healthgrow.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IletisimPage; 