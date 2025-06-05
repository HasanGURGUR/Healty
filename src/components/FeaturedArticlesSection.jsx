import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedArticlesSection.css';

const FeaturedArticlesSection = ({ items }) => {
  return (
    <section className="featured-articles-section">
      <div className="featured-items">
        {items.map((item, index) => (
          <Link to={item.link} key={index} className="featured-item-link" style={{ flex: item.flex }}>
            <div className={`featured-item featured-item-${item.type}`}>
              <div className="featured-image-container">
                 <img src={item.image} alt={item.title} className="featured-item-image" />
              </div>
              <div className="featured-text-content">
                <h3 className="featured-item-title">{item.title}</h3>
                <p className="featured-item-description">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticlesSection; 