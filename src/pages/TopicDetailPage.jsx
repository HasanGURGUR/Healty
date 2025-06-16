import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TopicDetailPage.css';

const TopicDetailPage = () => {
  const { topicSlug } = useParams();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // HIIT antrenmanı için örnek içerik
  const hiitContent = {
    title: "15 Dakikalık HIIT Antrenmanı",
    description: "Yüksek yoğunluklu interval antrenmanı (HIIT), kısa sürede maksimum kalori yakmanızı sağlayan etkili bir egzersiz programıdır.",
    image: "/images/hiit-antrenman.jpg",
    benefits: [
      "Metabolizmayı hızlandırır",
      "Yağ yakımını artırır",
      "Kardiyovasküler sağlığı iyileştirir",
      "Kas kütlesini korur",
      "Zaman verimlidir"
    ],
    exercises: [
      {
        name: "Jumping Jacks",
        duration: "30 saniye",
        rest: "15 saniye",
        description: "Ayakta durarak kolları ve bacakları açıp kapatan temel bir egzersiz."
      },
      {
        name: "Mountain Climbers",
        duration: "30 saniye",
        rest: "15 saniye",
        description: "Plank pozisyonunda dizleri göğse çekerek yapılan dinamik bir egzersiz."
      },
      {
        name: "Burpees",
        duration: "30 saniye",
        rest: "15 saniye",
        description: "Şınav, squat ve zıplama kombinasyonu içeren tam vücut egzersizi."
      },
      {
        name: "High Knees",
        duration: "30 saniye",
        rest: "15 saniye",
        description: "Yerinde koşarak dizleri yükseğe çekme egzersizi."
      }
    ],
    tips: [
      "Antrenman öncesi 5-10 dakika ısınma yapın",
      "Her egzersiz arasında belirtilen dinlenme sürelerine uyun",
      "Doğru form ve tekniğe odaklanın",
      "Su tüketimini unutmayın",
      "Vücudunuzu dinleyin ve gerektiğinde dinlenin"
    ],
    sets: [
      {
        name: "Set 1",
        rounds: 2,
        totalTime: "3 dakika",
        exercises: ["Jumping Jacks", "Mountain Climbers"]
      },
      {
        name: "Set 2",
        rounds: 2,
        totalTime: "3 dakika",
        exercises: ["Burpees", "High Knees"]
      },
      {
        name: "Set 3",
        rounds: 2,
        totalTime: "3 dakika",
        exercises: ["Jumping Jacks", "Burpees"]
      },
      {
        name: "Set 4",
        rounds: 2,
        totalTime: "3 dakika",
        exercises: ["Mountain Climbers", "High Knees"]
      }
    ]
  };

  const handleImageError = (e) => {
    console.error('Resim yüklenemedi:', e);
    setImageError(true);
    e.target.style.display = 'none';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  useEffect(() => {
    // Resmi önceden yükle
    const img = new Image();
    img.src = hiitContent.image;
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
  }, []);

  return (
    <div className="topic-detail-container">
      <div className="topic-header">
        <h1 className="topic-title">{hiitContent.title}</h1>
        <div className="topic-image-container">
          {!imageError && (
            <img 
              src={hiitContent.image} 
              alt="HIIT Antrenmanı" 
              className="topic-image"
              onError={handleImageError}
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
          )}
          {!imageLoaded && !imageError && (
            <div className="image-loading">
              Resim yükleniyor...
            </div>
          )}
          {imageError && (
            <div className="image-error-message">
              Resim yüklenemedi
            </div>
          )}
        </div>
        <p className="topic-description">{hiitContent.description}</p>
      </div>

      <section className="benefits-section">
        <h2>Faydaları</h2>
        <ul className="benefits-list">
          {hiitContent.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="exercises-section">
        <h2>Egzersiz Programı</h2>
        <table className="exercises-table">
          <thead>
            <tr>
              <th>Egzersiz</th>
              <th>Süre</th>
              <th>Dinlenme</th>
              <th>Açıklama</th>
            </tr>
          </thead>
          <tbody>
            {hiitContent.exercises.map((exercise, index) => (
              <tr key={index}>
                <td className="exercise-name">{exercise.name}</td>
                <td className="exercise-duration">{exercise.duration}</td>
                <td className="exercise-rest">{exercise.rest}</td>
                <td className="exercise-description">{exercise.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ marginTop: '2rem' }}>Antrenman Setleri</h2>
        {hiitContent.sets.map((set, index) => (
          <div key={index} className="set-card">
            <h3>{set.name}</h3>
            <div className="set-info">
              <div className="set-info-item">
                <strong>Tur Sayısı</strong>
                <span>{set.rounds}</span>
              </div>
              <div className="set-info-item">
                <strong>Toplam Süre</strong>
                <span>{set.totalTime}</span>
              </div>
              <div className="set-info-item">
                <strong>Egzersizler</strong>
                <span>{set.exercises.join(' → ')}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="tips-section">
        <h2>Önemli İpuçları</h2>
        <ul className="tips-list">
          {hiitContent.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TopicDetailPage; 