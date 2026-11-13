import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, ArrowUpLeft } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const sitelinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'خدماتنا', path: '/services' },
    { name: 'المنتجات', path: '/products' },
    { name: 'من نحن', path: '/about' },
    { name: 'شركاؤنا', path: '/partners' },
    { name: 'آراء العملاء', path: '/reviews' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0A1128] text-slate-300 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                يسير
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              حلول متكاملة في الطباعة، الهدايا، تغليف السيارات، الكلادينق، وتجهيز المعارض.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              جاهزون لاستقبال وتنفيذ طلباتكم الفورية
            </div>
          </div>

          {/* Col 2: Sitelinks */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider mb-4 border-r-2 border-blue-500 pr-2">
              روابط الموقع
            </h4>
            <ul className="space-y-2.5 text-sm">
              {sitelinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-blue-500 text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider mb-4 border-r-2 border-blue-500 pr-2">
              خدماتنا
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-blue-500 text-xs">›</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Maps */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-wider mb-4 border-r-2 border-blue-500 pr-2">
              التواصل والمقر
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span dir="ltr" className="font-mono">{BRAND.phone}</span>
              </a>

              <a
                href={BRAND.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">W</span>
                <span>واتساب مباشر</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-300 hover:text-blue-400 transition-colors pt-2"
              >
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="leading-snug">موقع المطبعة على خرائط جوجل</span>
                <ExternalLink className="w-3 h-3 text-slate-500 shrink-0 mt-1" />
              </a>

              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 pt-2"
              >
                <span>صفحة التواصل والموقع</span>
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} مطبعة الأداء اليسير. كافة الحقوق محفوظة.</p>
          <p className="text-slate-400">تصميم وتطوير هندسي فائق الدقة</p>
        </div>
      </div>
    </footer>
  );
};

