import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
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
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
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
          {/* Diğer rotalar buraya eklenecek */}
        </Routes>
      </main>
    </div>
  )
}

export default App
