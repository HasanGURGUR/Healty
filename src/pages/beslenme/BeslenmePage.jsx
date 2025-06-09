import React from 'react';
import NutritionBanner from '../../components/NutritionBanner';
import ItemListSection from '../../components/ItemListSection.jsx';

const BeslenmePage = () => {
  const nutritionBannerData = {
    siteName: "Healthgrow",
    bannerTitle: "Beslenme",
    bannerDescription: "Sağlıklı beslenme için temel rehberiniz",
    backgroundImage: "/images/nutrition_banner.jpg"
  };

  // "FEEL-GOOD FOOD" bölümü için öğe verileri
  const feelGoodFoodItems = [
    {
      image: '/images/high_carb_food.jpg', // Resim yolu placeholder
      title: '12 High Carb Foods That Are Incredibly Healthy',
      description: 'Carbs get a bad rap, but numerous healthy foods contain carbs. Here are 12 high carb foods...',
      link: '/articles/high-carb-foods' // Örnek bağlantı
    },
    {
      image: '/images/ayurvedic_kitchen.jpg', // Resim yolu placeholder
      title: "9 Tips for Joyful, Balanced Eating from Divya's Ayurvedic Kitchen",
      description: "For Divya Alter, food isn't just fuel—it's a friend.",
      link: '/articles/ayurvedic-eating' // Örnek bağlantı
    },
    {
      image: '/images/vegan_chef.jpg', // Resim yolu placeholder
      title: 'Vegan Teen Chef Tabay Atkins on Healthy, Heart-Based Eating',
      description: 'This young yogi is bringing plant-based food to the streets of Orange County.',
      link: '/articles/tabay-atkins' // Örnek bağlantı
    },
    {
      image: '/images/ethical_omnivore.jpg', // Resim yolu placeholder
      title: 'How to Be an Ethical Omnivore',
      description: 'While vegetarian and vegan diets tend to be more environmentally friendly, not everyone...',
      link: '/articles/ethical-omnivore' // Örnek bağlantı
    },
  ];

  // "NUTRITION FOR CONDITIONS" bölümü için öğe verileri
  const nutritionForConditionsItems = [
    {
      image: '/images/high_blood_pressure.jpg', // Resim yolu placeholder
      title: 'The 17 Best Foods for High Blood Pressure',
      description: 'A healthy diet is essential for lowering and maintaining optimal blood pressure levels...',
      link: '/articles/high-blood-pressure' // Örnek bağlantı
    },
    {
      image: '/images/anti_inflammatory_foods.png', // Resim yolu placeholder
      title: 'The 13 Most Anti-Inflammatory Foods You Can Eat',
      description: 'Chronic inflammation can lead to weight gain and disease. This article lists 13 foods that...',
      link: '/articles/anti-inflammatory-foods' // Örnek bağlantı
    },
    {
      image: '/images/hashimoto_diet.jpg', // Resim yolu placeholder
      title: 'Hashimoto Diet: Overview, Foods, Supplements, and Tips',
      description: 'In addition to medication, numerous changes to your diet may help manage Hashimoto\'s...',
      link: '/articles/hashimoto-diet' // Örnek bağlantı
    },
    {
      image: '/images/diabetes_non_perishables.jpg', // Resim yolu placeholder
      title: '18 of the Best Non-Perishables for People with Diabetes',
      description: 'If you have diabetes, you may wonder which non-perishable items have a minimal effect on...',
      link: '/articles/diabetes-non-perishables' // Örnek bağlantı
    },
    {
      image: '/images/avoid_arthritis_foods.jpg', // Resim yolu placeholder
      title: 'Foods and Beverages to Avoid with Arthritis',
      description: 'Several foods and drinks can worsen symptoms of inflammatory arthritis. Here are 12 foods...',
      link: '/articles/avoid-arthritis-foods' // Örnek bağlantı
    },
    {
      image: '/images/vestibular_migraine_diet.jpg', // Resim yolu placeholder
      title: 'How to Follow a Vestibular Migraine Diet',
      description: 'Your diet may play a role in your vestibular migraine symptoms. This article walks you...',
      link: '/articles/vestibular-migraine-diet' // Örnek bağlantı
    },
  ];

  return (
    <>
      <NutritionBanner 
        siteName={nutritionBannerData.siteName}
        bannerTitle={nutritionBannerData.bannerTitle}
        bannerDescription={nutritionBannerData.bannerDescription}
        backgroundImage={nutritionBannerData.backgroundImage}
      />
      {/* Görseldeki "FEEL-GOOD FOOD" bölümü */}
      <ItemListSection title="FEEL-GOOD FOOD" items={feelGoodFoodItems} />

      {/* Görseldeki "NUTRITION FOR CONDITIONS" bölümü */}
      <ItemListSection title="NUTRITION FOR CONDITIONS" items={nutritionForConditionsItems} />
    </>
  );
};

export default BeslenmePage; 