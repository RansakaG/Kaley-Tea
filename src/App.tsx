import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import VisitHeal from './pages/VisitHeal';
import BuySipHeal from './pages/BuySipHeal';
import ConnectHeal from './pages/ConnectHeal';

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
      return 'bg-[#faf8f5]/95 backdrop-blur-sm shadow-sm text-[#1a4d2e]';
    }
    return needsDarkText
      ? 'bg-transparent text-[#1a4d2e]'
      : 'bg-transparent text-white';
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${getNavClass()}`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-light tracking-[0.3em] hover:opacity-70 transition-opacity duration-500">
          KALEY TEA
        </Link>
        <div className="hidden md:flex items-center gap-12 font-light tracking-wider text-sm">
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
            className="text-[#c9a66b] hover:opacity-70 transition-all duration-500"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
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

