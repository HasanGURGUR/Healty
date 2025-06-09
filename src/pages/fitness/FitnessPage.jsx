import React from 'react';
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
      image: '/images/how_many_steps.jpg',
      title: 'How Many Steps Do People Take Per Day on Average?',
      description: 'How many steps do people actually take per day? See how the numbers break down by age, sex,',
      link: '/articles/how-many-steps'
    },
    {
      image: '/images/burpees_benefits.avif',
      title: 'The Benefits of Burpees and How to Do Them',
      description: 'If you\'re looking for a way to build strength and endurance, burpees are a great exercise...',
      link: '/articles/burpees-benefits'
    },
    {
      image: '/images/burn_most_calories.jpg',
      title: '12 Exercises That Burn the Most Calories',
      description: 'Running burns the most calories per hour, but that doesn\'t mean it\'s the only exercise...',
      link: '/articles/most-calorie-burning-exercises'
    },
    {
      image: '/images/muscle_groups.jpg',
      title: 'What Muscle Groups Are Best to Work Out Together?',
      description: 'There is no right or wrong way to pair muscle groups for a strength workout, but some...',
      link: '/articles/best-muscle-groups-to-work-out'
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
      <ItemListSection title="EXERCISE" items={exerciseItems} />
      <HorizontalItemListSection title="DAHA FAZLA OKUMA" items={horizontalExerciseItems} />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </div>
  );
};

export default FitnessPage; 