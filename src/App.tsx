import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { PartnersPage } from './pages/PartnersPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteItem, setSelectedQuoteItem] = useState('');

  const handleOpenQuote = (item?: string) => {
    setSelectedQuoteItem(item || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-[#2563EB] selection:text-white" dir="rtl">
        {/* Sticky Header (h-[72px]) */}
        <Header onOpenQuote={handleOpenQuote} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/partners" element={<PartnersPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/reviews" element={<ReviewsPage onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
          </Routes>
        </main>

        {/* Clean Main Footer */}
        <Footer />

        {/* Floating Action Icons ONLY */}
        <FloatingActions />

        {/* Global Interactive Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={handleCloseQuote}
          initialItem={selectedQuoteItem}
        />
      </div>
    </Router>
  );
}

export default App;
