import React from 'react';
import ExploreSection from '../../components/ExploreSection';
import FeaturedArticlesSection from '../../components/FeaturedArticlesSection';
import FeaturedItemCard from '../../components/FeaturedItemCard';
// import TopicSection from '../../components/TopicSection'; // TopicSection bileşenini kaldırdık

const HomePage = () => {
  // Örnek data kaldırıldı
  // const topicItems = [
  //   {
  //     image: '/images/black-health.jpg', // Görseldeki resim için yol
  //     title: 'Black Health',
  //     description: 'A space for our community\'s unique health needs.',
  //     link: '/black-health' // Bu itema tıklandığında gidilecek sayfa (şimdilik örnek)
  //   },
  //   // Buraya diğer itemları ekleyebilirsiniz
  //   {
  //     image: '/images/sample-topic-2.jpg', 
  //     title: 'Sample Topic 2',
  //     description: 'This is a description for sample topic 2.',
  //     link: '/sample-topic-2'
  //   },
  //   {
  //     image: '/images/sample-topic-3.jpg', 
  //     title: 'Sample Topic 3',
  //     description: 'This is a description for sample topic 3.',
  //     link: '/sample-topic-3'
  //   },
  // ];

  const featuredCardData = {
    image: '/images/japanese-walking.jpg', // Görseldeki resim için yol (public klasörüne eklemelisiniz)
    title: "Try ‘Japanese Walking’ for Better Heart Health",
    description: "Get started with this great low impact fitness hack.",
    link: '/' // Bu itema tıklandığında gidilecek sayfa (şimdilik anasayfa)
  };

  const featuredArticlesData = [
    {
      image: '/images/japanese-walking.jpg', // Sol item resmi
      title: "Try ‘Japanese Walking’ for Better\nHeart Health",
      description: "Get started with this great low impact fitness hack.",
      link: '/news/japanese-walking', // Haber detay sayfası linki
      type: 'left', // Sol item için type
      flex: 2 // Sol item daha geniş
    },
    {
      image: '/images/macro-calculator.jpg', // Sağ item resmi
      title: "Explore Our New Macro\nCalculator",
      description: "Discover how this tool can help you achieve your health goals.",
      link: '/araclar/macro-calculator', // Macro Calculator sayfası linki
      type: 'right', // Sağ item için type
      flex: 1 // Sağ item daha dar
    }
  ];

  return (
    <div className="home-page">
      {/* Yeni Featured Articles Section */}
      <FeaturedArticlesSection items={featuredArticlesData} />

      {/* Eski Featured Item Card (Artık kullanılmayacaksa kaldırılabilir) */}
      {/* <FeaturedItemCard item={featuredCardData} /> */}

      {/* Explore Section */}
      <ExploreSection />

      {/* Yeni Topic Section kaldırıldı */}
      {/* <TopicSection items={topicItems} /> */}

      {/* Diğer anasayfa bileşenleri */}
    </div>
  );
};

export default HomePage; 