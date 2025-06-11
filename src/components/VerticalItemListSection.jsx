import React from 'react';
import './VerticalItemListSection.css';

const VerticalItemListSection = ({ title, items }) => {
  return (
    <section className="vertical-item-list-section">
      {title && <h2 className="vertical-section-title">{title}</h2>}
      <div className="vertical-item-list-container">
        {items.map((item, index) => (
          <div key={index} className="vertical-list-item">
            <img src={item.image} alt={item.title} className="vertical-item-image" />
            <div className="vertical-item-content">
              <h3 className="vertical-item-title">{item.title}</h3>
              <p className="vertical-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalItemListSection; 