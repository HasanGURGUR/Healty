import React from 'react';
import './GizlilikPolitikasiPage.css';

const GizlilikPolitikasiPage = () => {
  return (
    <div className="gizlilik-container">
      <div className="hero-section">
        <h1>Gizlilik Politikası</h1>
        <p className="hero-description">
          Verilerinizin güvenliği ve gizliliği bizim için önceliklidir
        </p>
      </div>

      <div className="content-wrapper">
        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">🔒</span>
            <h2>1. Giriş</h2>
          </div>
          <p>
            Healthgrow olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasına önem veriyoruz. 
            Bu gizlilik politikası, web sitemizi kullanırken kişisel verilerinizin nasıl toplandığını, 
            kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">📋</span>
            <h2>2. Toplanan Bilgiler</h2>
          </div>
          <p>Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
          <ul>
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>İletişim bilgileri</li>
            <li>Kullanım istatistikleri</li>
            <li>Çerezler aracılığıyla toplanan bilgiler</li>
          </ul>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">🎯</span>
            <h2>3. Bilgilerin Kullanımı</h2>
          </div>
          <p>Topladığımız bilgileri aşağıdaki amaçlar için kullanıyoruz:</p>
          <ul>
            <li>Hizmetlerimizi sunmak ve geliştirmek</li>
            <li>Kullanıcı deneyimini iyileştirmek</li>
            <li>İletişim taleplerinizi yanıtlamak</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
          </ul>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">🛡️</span>
            <h2>4. Bilgi Güvenliği</h2>
          </div>
          <p>
            Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi korumak için uygun teknik ve 
            organizasyonel önlemleri alıyoruz. Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli 
            olmadığını unutmayın.
          </p>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">🍪</span>
            <h2>5. Çerezler</h2>
          </div>
          <p>
            Web sitemizde çerezler kullanıyoruz. Çerezler, web sitemizi daha iyi bir deneyim sunmak için 
            kullanıcı tercihlerinizi hatırlamamıza yardımcı olur.
          </p>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">⚖️</span>
            <h2>6. Haklarınız</h2>
          </div>
          <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
          </ul>
        </div>

        <div className="content-section">
          <div className="section-header">
            <span className="section-icon">📧</span>
            <h2>7. İletişim</h2>
          </div>
          <p>
            Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, lütfen bizimle iletişime geçin:
            <a href="mailto:info@healthgrow.com" className="contact-email">info@healthgrow.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasiPage; 