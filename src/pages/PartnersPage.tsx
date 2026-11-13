import React from 'react';
import { Link } from 'react-router-dom';
import { PARTNERS, PROJECTS } from '../data/content';

interface PartnersPageProps {
  onOpenQuote: (item?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenQuote }) => {
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
            <span className="text-slate-800 font-bold">شركاؤنا</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            شركاء النجاح
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            نعتز بثقة كبرى الشركات والمؤسسات والهيئات الحكومية في المملكة.
          </p>
        </div>
      </div>

      {/* Balanced Logo Grid */}
      <div className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              عملاؤنا وشركاؤنا
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              علاقات شراكة ممتدة مبنية على الجودة العالية والدقة في مواعيد التسليم.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#2563EB] shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-between text-center group min-h-[170px]"
              >
                <div className="w-full h-16 flex items-center justify-center p-2 mb-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0A1128] group-hover:text-[#2563EB] transition-colors">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Completed Projects Photo Grid */}
      <div className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              أعمال نفذناها
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              لقطات حية من مشاريعنا المنفذة في الطباعة، البوثات، الكلادينق، وتغليف المركبات.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm flex flex-col group"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#0A1128] mt-2">
                      {proj.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => onOpenQuote(proj.title)}
                    className="mt-4 text-xs font-bold text-[#0A1128] hover:text-[#2563EB] text-right inline-flex items-center gap-1"
                  >
                    <span>طلب مشروع مماثل ←</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-sm transition-all"
            >
              انضم إلى شركاء النجاح واطلب تسعيرة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

