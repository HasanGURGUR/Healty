import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FitnessContentPage.css';

const FitnessContentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log('Received ID:', id);

  const exerciseContents = {
    'evde-15-dakika-hiit': {
      title: '15 Dakikalık HIIT Antrenmanı',
      image: '/images/how_many_steps.jpg',
      description: 'Yoğun tempoda maksimum yağ yakımı sağlayan kısa süreli HIIT programı.',
      content: [
        { type: 'heading2', value: 'HIIT Antrenmanının Faydaları' },
        { type: 'paragraph', value: 'Yüksek yoğunluklu interval antrenmanı (HIIT), kısa sürede maksimum verim almanızı sağlayan etkili bir egzersiz yöntemidir.' },
        { type: 'image', value: '/images/hiit-antrenman.jpg', alt: 'HIIT Workout' },
        { type: 'heading3', value: '15 Dakikalık HIIT Programı' },
        { type: 'list', value: [
          'Isınma (2 dakika)',
          'Yüksek yoğunluklu egzersiz (30 saniye)',
          'Dinlenme (30 saniye)',
          'Bu döngüyü 8 kez tekrarlayın',
          'Soğuma (2 dakika)'
        ]},
        { type: 'heading3', value: 'Önerilen Egzersizler' },
        { type: 'list', value: [
          'Jumping Jacks',
          'Mountain Climbers',
          'Burpees',
          'High Knees',
          'Plank Jacks'
        ]}
      ]
    },
    'direnc-bandi-egzersizleri': {
      title: 'Direnç Bandı Egzersizleri',
      image: '/images/burpees_benefits.avif',
      description: 'Minimum ekipmanla tüm vücut kaslarını çalıştıran etkili egzersizler.',
      content: [
        { type: 'heading2', value: 'Direnç Bandı Egzersizlerinin Avantajları' },
        { type: 'paragraph', value: 'Direnç bantları, evde yapabileceğiniz en pratik ve etkili fitness ekipmanlarından biridir.' },
        { type: 'heading3', value: 'Temel Direnç Bandı Egzersizleri' },
        { type: 'list', value: [
          'Bent Over Row',
          'Band Squat',
          'Band Push-up',
          'Band Pull-down',
          'Band Lateral Raise'
        ]},
        { type: 'paragraph', value: 'Her egzersizi 12-15 tekrar, 3 set olarak yapın. Setler arası 30 saniye dinlenin.' },
        { type: 'image', value: '/images/direnc-bandi.avif', alt: 'Resistance Band' }
      ]
    },
    'en-cok-kalori-yakan-egzersizler': {
      title: 'En Çok Kalori Yakan Egzersizler',
      image: '/images/burn_most_calories.jpg',
      description: 'Zaman kısıtlaması olanlar için verimli kalori yakma yöntemleri.',
      content: [
        { type: 'heading2', value: 'En Etkili Kalori Yakma Yöntemleri' },
        { type: 'paragraph', value: 'Bazı egzersizler diğerlerine göre daha fazla kalori yakmanızı sağlar.' },
        { type: 'list', value: [
          'Koşu (Saatte 600-800 kalori)',
          'HIIT Antrenmanı (Saatte 500-700 kalori)',
          'Yüzme (Saatte 400-600 kalori)',
          'Bisiklet (Saatte 400-600 kalori)',
          'Kürek Çekme (Saatte 400-600 kalori)'
        ]},
        { type: 'paragraph', value: 'Haftada en az 3-4 gün, 30-45 dakika bu egzersizlerden birini yapın.' },
        { type: 'image', value: '/images/burn_most_calories.jpg', alt: 'Calorie Burn' }
      ]
    },
    'yoga-pilates-temel-hareketler': {
      title: 'Yoga ve Pilates Temel Hareketler',
      image: '/images/muscle_groups.jpg',
      description: 'Stresi azaltan ve esnekliği artıran temel yoga-pilates hareketleri.',
      content: [
        { type: 'heading2', value: 'Yoga ve Pilates\'in Faydaları' },
        { type: 'paragraph', value: 'Bu iki disiplin, hem bedensel hem de zihinsel sağlığınızı destekler.' },
        { type: 'image', value: '/images/yoga.jpg', alt: 'Yoga Pilates' },
        { type: 'heading3', value: 'Temel Yoga Hareketleri' },
        { type: 'list', value: [
          'Güneşe Selam (Surya Namaskar)',
          'Aşağı Bakan Köpek (Adho Mukha Svanasana)',
          'Savaşçı Pozu (Virabhadrasana)',
          'Köprü Pozu (Setu Bandhasana)'
        ]},
        { type: 'heading3', value: 'Temel Pilates Hareketleri' },
        { type: 'list', value: [
          'The Hundred',
          'Roll Up',
          'Single Leg Stretch',
          'Double Leg Stretch'
        ]}
      ]
    }
  };

  const selectedContent = exerciseContents[id];

  console.log('Selected Content:', selectedContent);

  if (!selectedContent) {
    return <div>İçerik bulunamadı</div>;
  }

  return (
    <div className="fitness-content-page">
      <div className="content-header">
        <div className="content-title-section">
          <h1 className="content-title">{selectedContent.title}</h1>
          <p className="content-description">{selectedContent.description}</p>
        </div>
      </div>

      <div className="content-body">
        {selectedContent.content.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={index}>{block.value}</p>;
            case 'heading2':
              return <h2 key={index}>{block.value}</h2>;
            case 'heading3':
              return <h3 key={index}>{block.value}</h3>;
            case 'list':
              return (
                <ul key={index}>
                  {block.value.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case 'image':
              return <img key={index} src={block.value} alt={block.alt} className="content-body-image" />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default FitnessContentPage; 