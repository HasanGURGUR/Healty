import React from 'react';
import TopicSection from '../../components/TopicSection';

const SaglikliYasamPage = () => {
  // Güncellenmiş örnek data
  const topicItems = [
    {
      image: '/images/fitness.jpg', // Örnek görsel
      title: 'Fitness',
      description: 'Sağlıklı bir yaşam için egzersiz ve antrenman rehberleri.',
      link: '/fitness'
    },
    {
      image: '/images/healthy-beauty.jpg', // Örnek görsel
      title: 'Sağlıklı Güzellik',
      description: 'Doğal güzellik ve kişisel bakım ipuçları.',
      link: '/saglikli-guzellik'
    },
    {
      image: '/images/hearing.jpg', // Örnek görsel
      title: 'İşitme',
      description: 'İşitme sağlığınızı koruma yolları ve işitme kaybı hakkında bilgiler.',
      link: '/isitme'
    },
    {
      image: '/images/mental-wellbeing.jpg', // Örnek görsel
      title: 'Ruh Sağlığı',
      description: 'Zihinsel iyi oluşunuz için pratikler ve kaynaklar.',
      link: '/ruh-sagligi'
    },
    {
      image: '/images/nutrition.jpg', // Örnek görsel
      title: 'Beslenme',
      description: 'Dengeli ve sağlıklı beslenme rehberleri.',
      link: '/beslenme'
    },
    {
      image: '/images/sexual-health.jpg', // Örnek görsel
      title: 'Cinsel Sağlık',
      description: 'Cinsel sağlıkla ilgili önemli bilgiler ve tavsiyeler.',
      link: '/cinsel-saglik'
    },
     {
      image: '/images/skin-care.jpg', // Örnek görsel
      title: 'Cilt Bakımı',
      description: 'Sağlıklı ve parlak bir cilt için bakım rehberleri.',
      link: '/cilt-bakimi'
    },
    {
      image: '/images/sleep.jpg', // Örnek görsel
      title: 'Uyku',
      description: 'Kaliteli uyku için ipuçları ve uyku düzeni rehberi.',
      link: '/uyku'
    },
    {
      image: '/images/vitamins.jpg', // Örnek görsel
      title: 'Vitaminler, Mineraller ve Takviyeler',
      description: 'Hangi vitamin ve minerallere ihtiyacınız var? Takviye rehberi.',
      link: '/vitaminler-mineraller-takviyeler'
    },
  ];

  return (
    <div>
      <h1>Sağlıklı Yaşam Sayfası</h1>
      <TopicSection items={topicItems} />
      {/* Bu sayfaya özgü diğer içerik buraya gelecek */}
    </div>
  );
};

export default SaglikliYasamPage; 