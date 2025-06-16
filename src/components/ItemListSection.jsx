import React from 'react';
import { Link } from 'react-router-dom';
import './ItemListSection.css'; // Stil dosyası

const ItemListSection = ({ title, items }) => {
  return (
    <section className="item-list-section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="item-list-container">
        {items.map((item, index) => (
          <Link to={item.link} key={index} className="list-item">
            <div className="item-image-container">
              <img src={item.image} alt={item.title} className="item-image" />
            </div>
            <div className="item-content">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ItemListSection; 