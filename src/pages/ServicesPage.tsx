import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpLeft } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';

interface ServicesPageProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Subpage Compact Header */}
      <div className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link to="/" className="hover:text-[#2563EB] transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-bold">خدماتنا</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            خدماتنا المتكاملة
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            حلول تصنيعية شاملة للشركات والجهات الحكومية بأعلى معايير الدقة.
          </p>
        </div>
      </div>

      {/* 7 Balanced Alternating Image/Text Blocks */}
      <div className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-white hover:border-slate-300 transition-all ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Block: aspect-[4/3] */}
                <div
                  className={`aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Block */}
                <div
                  className={`flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded inline-block mb-3">
                      خدمة 0{index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-[#0A1128]">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 font-medium">
                      {service.summary}
                    </p>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {service.detail}
                    </p>

                    {/* Features list */}
                    <div className="mt-5 space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <a
                      href={BRAND.whatsappUrl(`أرغب في طلب تسعيرة لخدمة: ${service.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                    >
                      <span>اطلب الخدمة الآن</span>
                      <ArrowUpLeft className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all"
                    >
                      طلب تسعيرة سريعة
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

