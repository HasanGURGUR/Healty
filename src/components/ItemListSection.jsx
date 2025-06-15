import React from 'react';
import './ItemListSection.css'; // Stil dosyası

const ItemListSection = ({ title, items }) => {
  return (
    <section className="item-list-section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="item-list-container">
        {items.map((item, index) => (
          <div key={index} className="list-item" onClick={() => {
            console.log('Item clicked:', item.title);
            if (item.link) {
              window.location.href = item.link;
            }
          }}>
            <div className="item-image-container">
              <img src={item.image} alt={item.title} className="item-image" />
            </div>
            <div className="item-content">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemListSection; 