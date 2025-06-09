import React from 'react';
import ExploreSection from '../../components/ExploreSection';
import FeaturedArticlesSection from '../../components/FeaturedArticlesSection';
import FeaturedItemCard from '../../components/FeaturedItemCard';
import HorizontalItemListSection from '../../components/HorizontalItemListSection.jsx';
import ItemListSection from '../../components/ItemListSection.jsx';
// import TopicSection from '../../components/TopicSection'; // TopicSection bileşenini kaldırdık

const HomePage = () => {

  const featuredCardData = {
    image: '/images/japanese-walking.jpg', // Görseldeki resim için yol (public klasörüne eklemelisiniz)
    title: "Try 'Japanese Walking' for Better Heart Health",
    description: "Get started with this great low impact fitness hack.",
    link: '/' // Bu itema tıklandığında gidilecek sayfa (şimdilik anasayfa)
  };

  const featuredArticlesData = [
    {
      image: '/images/japanese-walking.jpg', // Sol item resmi
      title: "Try 'Japanese Walking' for Better\nHeart Health",
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

  // "MORE TOP READS" bölümü için öğe verileri
  const moreTopReadsItems = [
    {
      image: '/images/reducing_screen_time.jpg', // Resim yolu placeholder
      title: '8 Tips for Reducing Screen Time',
      // link: '/articles/reducing-screen-time' // İsterseniz link ekleyebilirsiniz
    },
    {
      image: '/images/cortisol_levels.jpg', // Resim yolu placeholder
      title: 'What Are the Symptoms and Causes of High Cortisol Levels?',
      // link: '/articles/cortisol-levels'
    },
    {
      image: '/images/comforting_recipes.jpg', // Resim yolu placeholder
      title: 'Comforting Recipes for a Cozy Dinner',
      // link: '/articles/comforting-recipes'
    },
    {
      image: '/images/toxic_work_environment.jpg', // Resim yolu placeholder
      title: 'How to Deal With a Toxic Work Environment',
      // link: '/articles/toxic-work-environment'
    },
  ];

  // "THIS JUST IN" bölümü için öğe verileri
  const thisJustInItems = [
    {
      image: '/images/overcome_barriers.jpg', // Resim yolu placeholder
      title: 'Overcome Your Barriers to Developing Healthy Habits',
      description: 'These tips can help you make sustainable, long-lasting change.',
      link: '/articles/overcome-barriers' // Örnek bağlantı
    },
    {
      image: '/images/more_protein.jpg', // Resim yolu placeholder
      title: 'Is More Protein Always Better?',
      description: 'A question you\'ve definitely asked yourself before.',
      link: '/articles/more-protein' // Örnek bağlantı
    },
    {
      image: '/images/dietitian_gut_health.png', // Resim yolu placeholder
      title: 'A Dietitian Creates a Home That Supports Your Gut Health',
      description: 'Everything you should consider to keep your gut happy.',
      link: '/articles/dietitian-gut-health' // Örnek bağlantı
    },
    {
      image: '/images/skinny_tok.jpg', // Resim yolu placeholder
      title: 'What Is \'Skinny Tok\'? Debunking the Harmful Weight Loss Trend',
      description: 'Experts warn it perpetuates negative body image and toxic diet culture.',
      link: '/articles/skinny-tok' // Örnek bağlantı
    },
  ];

  return (
    <div className="home-page">
      {/* Yeni Featured Articles Section */}
      <FeaturedArticlesSection items={featuredArticlesData} />

      {/* Eski Featured Item Card (Artık kullanılmayacaksa kaldırılabilir) */}
      {/* <FeaturedItemCard item={featuredCardData} /> */}

      {/* Explore Section */}
      <ExploreSection />

      {/* "MORE TOP READS" bölümü */}
      <HorizontalItemListSection title="MORE TOP READS" items={moreTopReadsItems} />

      {/* Yeni "THIS JUST IN" bölümü */}
      <ItemListSection title="THIS JUST IN" items={thisJustInItems} />

      {/* Yeni Topic Section kaldırıldı */}
      {/* <TopicSection items={topicItems} /> */}

      {/* Diğer anasayfa bileşenleri */}
    </div>
  );
};

export default HomePage; 