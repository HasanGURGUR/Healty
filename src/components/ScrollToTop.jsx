import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfanın en üstüne kaydırmak için daha kesin yöntemler
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0; // Modern tarayıcılar için
      document.body.scrollTop = 0; // Eski tarayıcılar için veya uyumluluk amacıyla
    };

    // Küçük bir gecikme ile kaydırma işlemini çağır
    const timer = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 