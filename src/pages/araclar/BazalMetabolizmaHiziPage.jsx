import React, { useState } from 'react';

const BazalMetabolizmaHiziPage = () => {
  const [cinsiyet, setCinsiyet] = useState('Kadın');
  const [yas, setYas] = useState('');
  const [boy, setBoy] = useState('170');
  const [kilo, setKilo] = useState('70');
  const [bmr, setBmr] = useState(null);

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
    const yasNum = Number(yas);
    const boyNum = Number(boy);
    const kiloNum = Number(kilo);
    if (!yasNum || !boyNum || !kiloNum) return;
    let sonuc = 0;
    if (cinsiyet === 'Erkek') {
      sonuc = 88.362 + (13.397 * kiloNum) + (4.799 * boyNum) - (5.677 * yasNum);
    } else {
      sonuc = 447.593 + (9.247 * kiloNum) + (3.098 * boyNum) - (4.330 * yasNum);
    }
    setBmr(sonuc.toFixed(0));
  };

  return (
    <div style={{ background: '#f7f7f7', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', padding: 32 }}>
        <div style={{ background: '#29b6f6', color: '#fff', borderRadius: 8, padding: '12px 20px', fontWeight: 600, marginBottom: 32, fontSize: 18, textAlign: 'center' }}>
          Bazal Metabolizma Hızı Hesaplayıcı
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', marginBottom: 32 }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ marginBottom: 18 }}>
              <label>Cinsiyetiniz:</label>
              <select value={cinsiyet} onChange={e => setCinsiyet(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', height: 38, boxSizing: 'border-box' }}>
                <option>Kadın</option>
                <option>Erkek</option>
              </select>
            </div>
            <div style={{ marginBottom: 18 }}>
              <label>Yaşınız:</label>
              <input type="number" min={1} max={120} value={yas} onChange={e => setYas(e.target.value)} style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #ccc', height: 38, boxSizing: 'border-box' }} />
            </div>
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
              Hesapla
            </button>
          </div>
          <div style={{ flex: 1, minWidth: 220, textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', minHeight: 110 }}>
              <div style={{ fontWeight: 600, color: '#1565c0', fontSize: 18, minHeight: 24, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Bazal Metabolizma Hızınız:
              </div>
              <div style={{ height: 70, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {bmr ? (
                  <>
                    <div style={{ fontSize: 38, fontWeight: 700, color: '#29b6f6', marginBottom: 8 }}>{bmr} kcal/gün</div>
                  </>
                ) : (
                  <div style={{ color: '#aaa', fontSize: 32, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&mdash;</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: 8, padding: '20px 24px', marginTop: 24, fontSize: 16, color: '#333' }}>
          <strong>Bazal Metabolizma Nedir?</strong><br /><br />
          Bazal metabolizma, vücudun hiçbir fiziksel aktivite yapmadan, yalnızca yaşamsal fonksiyonlarını sürdürebilmek için harcadığı minimum enerji miktarıdır. Nefes alma, vücut ısısını koruma, hücre yenilenmesi gibi temel işlevler için gereklidir.<br /><br />
          <strong>Bazal Metabolizma Hızı Nedir?</strong><br />
          Bazal metabolizma hızı (BMR), kişinin dinlenme halindeyken harcadığı günlük kalori miktarıdır. Yaş, cinsiyet, boy ve kilo gibi faktörlere göre değişir. BMR, kilo yönetimi ve sağlıklı yaşam için önemli bir göstergedir.<br /><br />
          <strong>Bazal Metabolizma Hızı Nasıl Hesaplanır?</strong><br />
          <ul style={{margin:0, paddingLeft:20}}>
            <li>Erkekler için: <b>BMR = 88.362 + (13.397 × kilo) + (4.799 × boy) – (5.677 × yaş)</b></li>
            <li>Kadınlar için: <b>BMR = 447.593 + (9.247 × kilo) + (3.098 × boy) – (4.330 × yaş)</b></li>
          </ul>
          <br />
          BMR'nizi öğrenmek, günlük kalori ihtiyacınızı ve kilo yönetiminizi planlamak için yukarıdaki aracı kullanabilirsiniz.
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
    </div>
  );
};

export default BazalMetabolizmaHiziPage; 