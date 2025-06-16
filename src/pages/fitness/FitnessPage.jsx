import React from 'react';
import { Link } from 'react-router-dom';
import NutritionBanner from '../../components/NutritionBanner';
import ItemListSection from '../../components/ItemListSection.jsx';
import HorizontalItemListSection from '../../components/HorizontalItemListSection.jsx';

const FitnessPage = () => {
  const fitnessBannerData = {
    siteName: "Healthgrow",
    bannerTitle: "Fitness",
    bannerDescription: "Güçlü bir sen için tam rehberin",
    backgroundImage: "/images/fitness_banner.png" 
  };

  const exerciseItems = [
    {
      image: '/images/hiit-antrenman.jpg',
      title: '15 Dakikalık HIIT Antrenmanı',
      description: 'Yoğun tempoda maksimum yağ yakımı sağlayan kısa süreli HIIT programı.',
      link: '/fitness/evde-15-dakika-hiit'
    },
    {
      image: '/images/direnc-bandi.avif',
      title: 'Direnç Bandı Egzersizleri',
      description: 'Minimum ekipmanla tüm vücut kaslarını çalıştıran etkili egzersizler.',
      link: '/fitness/direnc-bandi-egzersizleri'
    },
    {
      image: '/images/burn_most_calories.jpg',
      title: 'En Çok Kalori Yakan Egzersizler',
      description: 'Zaman kısıtlaması olanlar için verimli kalori yakma yöntemleri.',
      link: '/fitness/en-cok-kalori-yakan-egzersizler'
    },
    {
      image: '/images/yoga.jpg',
      title: 'Yoga ve Pilates Temel Hareketler',
      description: 'Stresi azaltan ve esnekliği artıran temel yoga-pilates hareketleri.',
      link: '/fitness/yoga-pilates-temel-hareketler'
    },
  ];

  const horizontalExerciseItems = [
    {
      image: '/images/how_many_steps.jpg',
      title: 'Which Is Better for Your Health: Walking or Running?',
      link: '/articles/walking-vs-running'
    },
    {
      image: '/images/burpees_benefits.avif',
      title: 'What Is a Runner\'s Body? It\'s More Than a Look',
      link: '/articles/runners-body'
    },
    {
      image: '/images/burn_most_calories.jpg',
      title: 'Here\'s the Lowdown on How Running Affects Your Knees',
      link: '/articles/running-affects-knees'
    },
    {
      image: '/images/muscle_groups.jpg',
      title: 'Everything to Know About VO₂ Max',
      link: '/articles/vo2-max'
    },
  ];

  return (
    <div>
      <NutritionBanner 
        siteName={fitnessBannerData.siteName}
        bannerTitle={fitnessBannerData.bannerTitle}
        bannerDescription={fitnessBannerData.bannerDescription}
        backgroundImage={fitnessBannerData.backgroundImage}
      />
      <ItemListSection title="EGZERSİZ REHBERİ" items={exerciseItems} />
      <HorizontalItemListSection title="DAHA FAZLA OKUMA" items={horizontalExerciseItems} />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </div>
  );
};

export default FitnessPage; 