import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BRAND } from '../data/content';

interface HeaderProps {
  onOpenQuote: (serviceOrProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'خدماتنا', path: '/services' },
    { name: 'المنتجات', path: '/products' },
    { name: 'من نحن', path: '/about' },
    { name: 'شركاؤنا', path: '/partners' },
    { name: 'آراء العملاء', path: '/reviews' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 h-[72px] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Right: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#0A1128] text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-[#2563EB] transition-colors">
            يسير
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#0A1128] tracking-tight group-hover:text-[#2563EB] transition-colors font-sans">
              {BRAND.name}
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:block -mt-1 font-medium">
              للطباعة والإعلان
            </span>
          </div>
        </Link>

        {/* Center: 5 links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-150 relative py-1 ${
                isActive(link.path)
                  ? 'text-[#2563EB]'
                  : 'text-slate-700 hover:text-[#2563EB]'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#2563EB] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Left: Compact CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenQuote()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
          >
            اطلب تسعيرة
          </button>

          <Link
            to="/contact"
            className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-[#0A1128]"
            title="تواصل معنا"
          >
            <PhoneCall className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-[#0A1128] hover:bg-slate-100 transition-colors"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive('/') ? 'bg-slate-100 text-[#2563EB]' : 'text-slate-800'
              }`}
            >
              الرئيسية
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                  isActive(link.path)
                    ? 'bg-slate-100 text-[#2563EB]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm font-semibold ${
                isActive('/contact')
                  ? 'bg-slate-100 text-[#2563EB]'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              تواصل معنا
            </Link>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-semibold shadow-sm"
              >
                اطلب تسعيرة
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

