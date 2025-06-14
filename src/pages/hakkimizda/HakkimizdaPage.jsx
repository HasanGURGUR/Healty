import React from 'react';
import './HakkimizdaPage.css';

const HakkimizdaPage = () => {
  return (
    <div className="hakkimizda-container">
      <div className="hero-section">
        <h1>Hakkımızda</h1>
        <p className="hero-description">
          Sağlıklı yaşam için güvenilir bilgi kaynağınız
        </p>
      </div>

      <div className="content-wrapper">
        <div className="content-section mission-vision">
          <div className="section-card">
            <div className="value-icon">🎯</div>
            <h2>Misyonumuz</h2>
            <p>
              Sağlık bilgilerini herkes için erişilebilir kılmak ve toplumun sağlık okuryazarlığını artırmak için çalışıyoruz.
            </p>
          </div>

          <div className="section-card">
            <div className="value-icon">👁️</div>
            <h2>Vizyonumuz</h2>
            <p>
              Türkiye'nin en güvenilir sağlık bilgi platformu olmak ve herkesin sağlıklı yaşam için ihtiyaç duyduğu bilgilere kolayca ulaşmasını sağlamak.
            </p>
          </div>
        </div>

        <div className="content-section who-we-are">
          <h2>Biz Kimiz?</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Healthgrow, sağlıklı yaşam ve wellness konularında güvenilir bilgi kaynağı olmayı hedefleyen bir platformdur. 
                Uzman ekibimiz ve güvenilir kaynaklardan aldığımız bilgilerle, kullanıcılarımıza en güncel ve doğru sağlık bilgilerini sunmayı amaçlıyoruz.
              </p>
              <p>
                Amacımız, karmaşık sağlık bilgilerini herkesin anlayabileceği şekilde sunmak ve sağlıklı yaşam için gerekli 
                bilgilere kolay erişim sağlamaktır.
              </p>
            </div>
          </div>
        </div>

        <div className="content-section values">
          <h2>Değerlerimiz</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔬</div>
              <h3>Bilimsel Doğruluk</h3>
              <p>Her bilgi, güncel ve bilimsel kaynaklara dayanır.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Güvenilirlik</h3>
              <p>Uzman doktorlar ve sağlık profesyonelleri tarafından onaylanmış içerikler.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Şeffaflık</h3>
              <p>Bilgilerin kaynağı ve güncellenme tarihi açıkça belirtilir.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Kullanıcı Odaklılık</h3>
              <p>Kullanıcılarımızın ihtiyaçlarına göre içerik üretiriz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdaPage; 