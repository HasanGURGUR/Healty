import React from 'react';
import { Link } from 'react-router-dom';
import './ExploreSection.css';

const ExploreSection = () => {
  const items = [
    { label: 'Beslenme', icon: '/icons/nutrition.png', path: '/beslenme' },
    { label: 'Uyku', icon: '/icons/sleep.png', path: '/uyku' },
    { label: 'Psikoloji', icon: '/icons/mental-health.png', path: '/psikoloji' },
    { label: 'Fitness', icon: '/icons/fitness.png', path: '/fitness' },
    { label: 'Cinsel Sağlık', icon: '/icons/reviews.png', path: '/cinsel-saglik' },
  ];

  return (
    <section className="explore-section">
      <div className="explore-header">
        <h2>EXPLORE BY</h2>
        <Link to="/saglikli-yasam" className="view-all-link">VIEW ALL &rarr;</Link>
      </div>
      <hr className="explore-divider" />
      <div className="explore-items">
        {items.map((item, index) => (
          <Link to={item.path} key={index} className="explore-item-link">
            <div className="explore-item">
              <div className="explore-icon-container">
                <img src={item.icon} alt={item.label} />
              </div>
              <p className="explore-item-label">{item.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreSection; 