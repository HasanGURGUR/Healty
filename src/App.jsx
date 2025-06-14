import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/home/HomePage'
import SaglikPage from './pages/saglik/SaglikPage'
import SaglikliYasamPage from './pages/saglikli-yasam/SaglikliYasamPage'
import BeslenmePage from './pages/beslenme/BeslenmePage'
import FitnessPage from './pages/fitness/FitnessPage'
import UykuPage from './pages/uyku/UykuPage'
import PsikolojiPage from './pages/psikoloji/PsikolojiPage'
import AraclarPage from './pages/araclar/AraclarPage'
import CinselSaglikPage from './pages/cinsel-saglik/CinselSaglikPage'
import NewsDetailPage from './pages/NewsDetailPage'
import MacroCalculatorPage from './pages/araclar/MacroCalculatorPage'
import VucutKitleIndeksiPage from './pages/araclar/VucutKitleIndeksiPage'
import BazalMetabolizmaHiziPage from './pages/araclar/BazalMetabolizmaHiziPage'
import TopicDetailPage from './pages/TopicDetailPage'
import HakkimizdaPage from './pages/hakkimizda/HakkimizdaPage'
import IletisimPage from './pages/iletisim/IletisimPage'
import GizlilikPolitikasiPage from './pages/gizlilik-politikasi/GizlilikPolitikasiPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToTop />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/saglik" element={<SaglikPage />} />
            <Route path="/saglikli-yasam" element={<SaglikliYasamPage />} />
            <Route path="/beslenme" element={<BeslenmePage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/uyku" element={<UykuPage />} />
            <Route path="/psikoloji" element={<PsikolojiPage />} />
            <Route path="/araclar" element={<AraclarPage />} />
            <Route path="/cinsel-saglik" element={<CinselSaglikPage />} />
            <Route path="/news/japanese-walking" element={<NewsDetailPage />} />
            <Route path="/araclar/macro-calculator" element={<MacroCalculatorPage />} />
            <Route path="/araclar/vucut-kitle-indeksi" element={<VucutKitleIndeksiPage />} />
            <Route path="/araclar/bazal-metabolizma-hizi" element={<BazalMetabolizmaHiziPage />} />
            <Route path="/saglikli-yasam/:topicSlug" element={<TopicDetailPage />} />
            <Route path="/ruh-sagligi" element={<PsikolojiPage />} />
            <Route path="/hakkimizda" element={<HakkimizdaPage />} />
            <Route path="/iletisim" element={<IletisimPage />} />
            <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasiPage />} />
            {/* Diğer rotalar buraya eklenecek */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
