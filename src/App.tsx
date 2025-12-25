import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import VisitHeal from './pages/VisitHeal';
import BuySipHeal from './pages/BuySipHeal';
import ConnectHeal from './pages/ConnectHeal';
import logoMain from './assets/images/logo-main.png';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages with light hero backgrounds need dark text
  const lightHeroPages = ['/connect'];
  const needsDarkText = lightHeroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll state and page type
  const getNavClass = () => {
    if (scrolled) {
      return 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm text-[#1a1f1a]';
    }
    return needsDarkText
      ? 'bg-transparent text-[#1a1f1a]'
      : 'bg-transparent text-white';
  };

  // Determine logo filter based on scroll state and page type
  const getLogoClass = () => {
    if (scrolled || needsDarkText) {
      return 'h-10 w-auto brightness-0'; // Dark logo
    }
    return 'h-10 w-auto brightness-0 invert'; // White logo
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${getNavClass()}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="hover:opacity-70 transition-opacity duration-500">
          <img
            src={logoMain}
            alt="Kaley Tea"
            className={`${getLogoClass()} transition-all duration-500`}
          />
        </Link>
        <div className="hidden md:flex items-center gap-12 font-medium tracking-wider text-sm">
          <Link
            to="/visit"
            className="hover:opacity-60 transition-opacity duration-500"
          >
            Visit
          </Link>
          <Link to="/buy" className="hover:opacity-60 transition-opacity duration-500">
            Buy
          </Link>
          <Link to="/connect" className="hover:opacity-60 transition-opacity duration-500">
            Connect
          </Link>
          <Link
            to="/visit"
            className="text-[#a86d4d] hover:opacity-70 transition-all duration-500"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit" element={<VisitHeal />} />
        <Route path="/buy" element={<BuySipHeal />} />
        <Route path="/connect" element={<ConnectHeal />} />
      </Routes>
    </Router>
  );
}

export default App;

