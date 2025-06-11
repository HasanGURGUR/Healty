import React from 'react';
import { useNavigate } from 'react-router-dom';

const AraclarPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Araçlar Sayfası</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div
          style={{
            width: 300,
            height: 260,
            background: '#f5f5f5',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            cursor: 'pointer',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'box-shadow 0.2s',
          }}
          onClick={() => navigate('/araclar/vucut-kitle-indeksi')}
        >
          <img
            src="/images/vki_cover.png"
            alt="Vücut Kitle İndeksi"
            style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }}
          />
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textAlign: 'center', lineHeight: 1.3 }}>
            Vücut Kitle İndeksi<br />Hesaplama
          </h2>
        </div>
        <div
          style={{
            width: 300,
            height: 260,
            background: '#f5f5f5',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
            cursor: 'pointer',
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'box-shadow 0.2s',
          }}
          onClick={() => navigate('/araclar/bazal-metabolizma-hizi')}
        >
          <img
            src="/images/bazal_metabolizma.jpg"
            alt="Bazal Metabolizma Hızı"
            style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }}
          />
          <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, textAlign: 'center', lineHeight: 1.3 }}>
            Bazal Metabolizma Hızı<br />Hesaplayıcı
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AraclarPage; 