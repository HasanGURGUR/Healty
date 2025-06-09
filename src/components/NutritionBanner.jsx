import React from 'react';
import './NutritionBanner.css';

const NutritionBanner = ({ siteName, bannerTitle, bannerDescription, backgroundImage }) => {

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="nutrition-banner" style={bannerStyle}>
      <div className="banner-overlay"></div> {/* Yarı saydam overlay */}
      <div className="banner-content"> {/* Metin içeriği */}
        <div className="site-name">{siteName}</div>
        <h1 className="banner-title">{bannerTitle}</h1>
        <p className="banner-description">{bannerDescription}</p>
      </div>
    </div>
  );
};

export default NutritionBanner; 