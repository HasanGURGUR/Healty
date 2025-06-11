import React, { useState } from 'react';

const kategoriler = [
  { label: 'Zayıf', min: 0, max: 18.4, color: '#4fc3f7' },
  { label: 'Sağlıklı', min: 18.5, max: 24.9, color: '#8bc34a' },
  { label: 'Şişman', min: 25, max: 29.9, color: '#ffd600' },
  { label: 'Obez', min: 30, max: 39.9, color: '#ff9800' },
  { label: 'Aşırı Obez', min: 40, max: 100, color: '#f44336' },
];

const VucutKitleIndeksiPage = () => {
  const [boy, setBoy] = useState('170');
  const [kilo, setKilo] = useState('70');
  const [yas, setYas] = useState('');
  const [cinsiyet, setCinsiyet] = useState('Kadın');
  const [vki, setVki] = useState(null);
  const [kategori, setKategori] = useState(null);

  const handleBoyChange = (e) => {
    let val = e.target.value.replace(/^0+/, '');
    if (val === '') setBoy('');
    else if (/^\d+$/.test(val)) setBoy(val);
  };
  const handleKiloChange = (e) => {
    let val = e.target.value.replace(/^0+/, '');
    if (val === '') setKilo('');
    else if (/^\d+$/.test(val)) setKilo(val);
  };

  const hesapla = () => {
    const boyNum = Number(boy);
    const kiloNum = Number(kilo);
    if (!boyNum || !kiloNum) return;
    const boyMetre = boyNum / 100;
    const vkiHesap = kiloNum / (boyMetre * boyMetre);
    setVki(vkiHesap.toFixed(1));
    const kat = kategoriler.find(k => vkiHesap >= k.min && vkiHesap <= k.max);
    setKategori(kat);
  };

  return (
    <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
        <div style={{ background: '#29b6f6', color: '#fff', borderRadius: 8, padding: '12px 20px', fontWeight: 600, marginBottom: 32, fontSize: 18 }}>
          Vücut Kitle Endeksi Hesaplama Aracı
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginBottom: 32 }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ marginBottom: 18 }}>
              <label>Boyunuz:</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <input type="range" min={120} max={220} value={boy || 120} onChange={e => setBoy(e.target.value)} style={{ flex: 1 }} />
                <input
                  type="number"
                  min={120}
                  max={220}
                  value={boy}
                  onChange={handleBoyChange}
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    background: '#f7f7f7',
                    borderRadius: 8,
                    padding: '4px 12px',
                    width: 70,
                    border: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                />
                <span>cm</span>
              </div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label>Kilonuz:</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <input type="range" min={30} max={180} value={kilo || 30} onChange={e => setKilo(e.target.value)} style={{ flex: 1 }} />
                <input
                  type="number"
                  min={30}
                  max={180}
                  value={kilo}
                  onChange={handleKiloChange}
                  style={{
                    fontWeight: 600,
                    fontSize: 22,
                    background: '#f7f7f7',
                    borderRadius: 8,
                    padding: '4px 12px',
                    width: 70,
                    border: '1px solid #ccc',
                    textAlign: 'center',
                  }}
                />
                <span>kg</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <label>Yaşınız:</label>
                <input type="number" min={1} max={120} value={yas} onChange={e => setYas(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', height: 38, boxSizing: 'border-box' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Cinsiyetiniz:</label>
                <select value={cinsiyet} onChange={e => setCinsiyet(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', height: 38, boxSizing: 'border-box' }}>
                  <option>Kadın</option>
                  <option>Erkek</option>
                </select>
              </div>
            </div>
            <button 
              onClick={hesapla} 
              disabled={!yas}
              style={{ 
                width: '100%', 
                background: !yas ? '#b0bec5' : '#1565c0', 
                color: '#fff', 
                border: 'none', 
                borderRadius: 8, 
                padding: '12px 0', 
                fontWeight: 700, 
                fontSize: 18, 
                marginTop: 12, 
                cursor: !yas ? 'not-allowed' : 'pointer',
                opacity: !yas ? 0.7 : 1
              }}
            >
              VKİ Hesapla
            </button>
          </div>
          <div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: 110 }}>
              <div style={{ fontWeight: 600, color: '#1565c0', fontSize: 18, minHeight: 24, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Vücut Kitle İndeksiniz:
              </div>
              <div style={{ height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {vki && kategori ? (
                  <>
                    <div style={{ fontSize: 38, fontWeight: 700, color: kategori.color, marginBottom: 8 }}>{vki}</div>
                    <div style={{ fontWeight: 600, color: kategori.color, fontSize: 20 }}>{kategori.label}</div>
                  </>
                ) : (
                  <div style={{ color: '#aaa', fontSize: 32, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&mdash;</div>
                )}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 24, gap: 4 }}>
              {kategoriler.map((k, i) => (
                <div key={k.label} style={{ flex: 1, textAlign: 'center' }}>
                  <div style={{ height: 8, background: k.color, borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ fontSize: 13, color: '#888', fontWeight: 500 }}>{k.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '20px 24px', marginTop: 24, fontSize: 16, color: '#333' }}>
          <strong>Vücut Kitle İndeksi (VKİ) Nedir?</strong><br /><br />
          Vücut Kitle İndeksi (VKİ), bir kişinin kilo ve boy oranını değerlendirerek vücut ağırlığının sağlık açısından uygun olup olmadığını belirlemek için kullanılan bir ölçüttür. VKİ, kilogram cinsinden ağırlığın, metre cinsinden boyun karesine bölünmesiyle hesaplanır. Sonuç, bireyin zayıf, normal kilolu, fazla kilolu veya obez kategorilerinden hangisinde olduğunu belirlemek için kullanılır.<br /><br />
          <strong>VKİ Nasıl Hesaplanır?</strong><br />
          VKİ = ağırlık (kg) / boy (m)²<br /><br />
          <strong>Örnek:</strong> 75 kilogram ağırlığında ve 1.65 metre boyundaki bir kişinin VKİ'si:<br />
          1.65 x 1.65 = 2.72<br />
          75 / 2.72 = 27.5<br />
          Bu kişinin vücut kitle indeksi 27.5'tir.<br /><br />
          <strong>VKİ Değerleri ve Anlamları:</strong><br />
          18.4 ve altı: Zayıf<br />
          18.5 – 24.9: Sağlıklı<br />
          25.0 – 29.9: Şişman<br />
          30.0 – 39.9: Obez<br />
          40.0 ve üzeri: Aşırı Obez<br /><br />
          VKİ'nizi öğrenmek, ideal kilonuzu belirlemek ve sağlığınız hakkında daha fazla bilgi sahibi olmak için yukarıdaki aracı kullanabilirsiniz.
        </div>
      </div>
      <style>
        {`
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
        `}
      </style>
    </div>
  );
};

export default VucutKitleIndeksiPage; 