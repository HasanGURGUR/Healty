import React from 'react';
import NutritionBanner from '../../components/NutritionBanner';

const PsikolojiPage = () => {
  const psikolojiBannerData = {
    siteName: "Healthgrow",
    bannerTitle: "Psikoloji",
    bannerDescription: "Ruh sağlığınız için temel rehberiniz",
    backgroundImage: "/images/psikoloji_banner.png"
  };

  return (
    <>
      <NutritionBanner 
        siteName={psikolojiBannerData.siteName}
        bannerTitle={psikolojiBannerData.bannerTitle}
        bannerDescription={psikolojiBannerData.bannerDescription}
        backgroundImage={psikolojiBannerData.backgroundImage}
      />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </>
  );
};

export default PsikolojiPage; 