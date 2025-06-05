import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedItemCard.css';

const FeaturedItemCard = ({ item }) => {
  return (
    <div className="featured-item-card">
      <div className="featured-item-card-image-container">
        <img src={item.image} alt={item.title} className="featured-item-card-image" />
      </div>
      <div className="featured-item-card-text-content">
        <h3 className="featured-item-card-title">{item.title}</h3>
        <p className="featured-item-card-description">{item.description}</p>
      </div>
    </div>
  );
};

export default FeaturedItemCard; 