import React from 'react';
import { Link } from 'react-router-dom';
import './TopicSection.css';

const TopicSection = ({ items }) => {
  return (
    <section className="topic-section">
      <div className="topic-items">
        {items.map((item, index) => (
          <div key={index} className="topic-item">
            <div className="topic-image-container">
              <img src={item.image} alt={item.title} className="topic-image" />
            </div>
            <div className="topic-content">
              <h3 className="topic-title">{item.title}</h3>
              <p className="topic-description">{item.description}</p>
              <Link to={item.link} className="go-to-topic-button">
                GO TO TOPIC &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicSection; 