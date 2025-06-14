import React from 'react';
import ItemListSection from '../../components/ItemListSection';

const healthConditionItems = [
  {
    title: 'Breast Cancer',
    image: '/images/fitness.jpg',
    description: 'Meme dokusunda oluşan kötü huylu tümörler hakkında bilgi.'
  },
  {
    title: 'Cancer Care',
    image: '/images/sleep.jpg',
    description: 'Kanser tanısı ve tedavi sürecinde destekleyici bakım.'
  },
  {
    title: "Caregiving for Alzheimer's Disease",
    image: '/images/skin-care.jpg',
    description: 'Alzheimer hastalarına bakım ve destek yöntemleri.'
  },
  {
    title: 'Chronic Kidney Disease',
    image: '/images/vitamins.jpg',
    description: 'Böbrek fonksiyonlarının kalıcı olarak azalması.'
  },
  {
    title: 'Chronic Obstructive Pulmonary Disease (COPD)',
    image: '/images/nutrition.jpg',
    description: 'Akciğerlerde hava akışının kısıtlandığı kronik hastalık.'
  },
  {
    title: 'Digestive Health',
    image: '/images/vegan_chef.jpg',
    description: 'Sindirim sistemi sağlığını koruma yolları.'
  },
  {
    title: 'Eye Health',
    image: '/images/skinny_tok.jpg',
    description: 'Göz sağlığını korumak için ipuçları.'
  },
  {
    title: 'Heart Health',
    image: '/images/hearing.jpg',
    description: 'Kalp ve damar sağlığını destekleyen bilgiler.'
  },
  {
    title: 'Menopause',
    image: '/images/why_sleepy.jpg',
    description: 'Kadınlarda menopoz dönemi ve belirtileri.'
  },
  {
    title: 'Mental Health',
    image: '/images/fitness.jpg',
    description: 'Zihinsel ve duygusal sağlığı güçlendirme yolları.'
  },
  {
    title: 'Migraine',
    image: '/images/sleep.jpg',
    description: 'Şiddetli baş ağrısı ve migrenle başa çıkma yöntemleri.'
  },
  {
    title: 'Multiple Sclerosis (MS)',
    image: '/images/skin-care.jpg',
    description: 'Sinir sistemini etkileyen kronik bir hastalık.'
  },
  {
    title: "Parkinson's Disease",
    image: '/images/vitamins.jpg',
    description: 'Hareketleri etkileyen ilerleyici bir sinir sistemi hastalığı.'
  },
  {
    title: 'Psoriasis',
    image: '/images/nutrition.jpg',
    description: 'Ciltte pullanma ve kızarıklıkla seyreden kronik hastalık.'
  },
  {
    title: 'Rheumatoid Arthritis (RA)',
    image: '/images/vegan_chef.jpg',
    description: 'Eklemlerde iltihaplanmaya yol açan otoimmün hastalık.'
  },
  {
    title: 'Sleep Health',
    image: '/images/skinny_tok.jpg',
    description: 'Kaliteli uyku için öneriler ve uyku sağlığı.'
  },
  {
    title: 'Type 2 Diabetes',
    image: '/images/hearing.jpg',
    description: 'Kan şekeri kontrolü ve tip 2 diyabet yönetimi.'
  },
  {
    title: 'Weight Management',
    image: '/images/why_sleepy.jpg',
    description: 'Sağlıklı kilo kontrolü ve yönetimi.'
  },
];

const SaglikPage = () => {
  return (
    <div>
      <h1>Sağlık</h1>
      <ItemListSection title="Sağlık Durumları" items={healthConditionItems} />
      {/* Bu sayfaya özgü içerik buraya gelecek */}
    </div>
  );
};

export default SaglikPage; 