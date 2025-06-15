import React from 'react';
import './HorizontalItemListSection.css'; // Stil dosyası

const HorizontalItemListSection = ({ title, items }) => {
  return (
    <section className="horizontal-item-list-section">
      {title && <h2 className="horizontal-section-title">{title}</h2>}
      <div className="horizontal-item-list-container">
        {items.map((item, index) => (
          <div key={index} className="horizontal-list-item" onClick={() => {
            // Burada tıklama olayını işleyebilirsiniz
            console.log('Item clicked:', item.title);
            // Örnek: window.location.href = item.link; // Eğer link varsa
          }}>
            <img src={item.image} alt={item.title} className="horizontal-item-image" />
            <div className="horizontal-item-content">
              <h3 className="horizontal-item-title">{item.title}</h3>
              {item.description && <p className="horizontal-item-description">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalItemListSection; 