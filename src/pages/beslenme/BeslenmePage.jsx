import React from 'react';
import NutritionBanner from '../../components/NutritionBanner';
import ItemListSection from '../../components/ItemListSection.jsx';

const BeslenmePage = () => {
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

  // Altı öğeli başka bir bölüm için placeholder veri (ihtiyaca göre doldurulacak)
  const otherSectionItems = [
    // Buraya 6 adet öğe objesi eklenecek
    // { image: '/path/to/image.jpg', title: 'Öğe Başlığı', description: 'Öğe Açıklaması', link: '/detay' },
    // ... 5 tane daha
  ];

  return (
    <>
      <NutritionBanner />
      {/* Görseldeki "FEEL-GOOD FOOD" bölümü */}
      <ItemListSection title="FEEL-GOOD FOOD" items={feelGoodFoodItems} />

      {/* İkinci bir liste örneği (şu an boş) */}
      {/* <ItemListSection title="Diğer Konular" items={otherSectionItems} /> */}
    </>
  );
};

export default BeslenmePage; 