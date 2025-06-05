import React from 'react';
import ExploreSection from '../../components/ExploreSection';
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

  return (
    <div className="home-page">
      {/* Explore Section */}
      <ExploreSection />

      {/* Yeni Topic Section kaldırıldı */}
      {/* <TopicSection items={topicItems} /> */}

      {/* Diğer anasayfa bileşenleri */}
    </div>
  );
};

export default HomePage; 