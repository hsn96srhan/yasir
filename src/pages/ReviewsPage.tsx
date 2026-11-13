import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/content';

interface ReviewsPageProps {
  onOpenQuote: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onOpenQuote }) => {
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
            <span className="text-slate-800 font-bold">آراء العملاء</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            آراء عملائنا
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            شهادات واقعية نعتز بها من مسؤولي المشتريات والتسويق في كبرى المنشآت.
          </p>
        </div>
      </div>

      {/* Rating Overview Strip */}
      <div className="border-b border-slate-200 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black text-[#0A1128]">4.9</div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500 mt-1 block font-medium">
                  متوسط التقييم العام بناءً على أكثر من 450 مشروع
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>دقة ألوان 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>تقييمات موثقة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean 3-Column Reviews Grid */}
      <div className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between h-full hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded">
                      تقييم موثق
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0A1128]">
                      {review.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {review.title} • {review.company}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs flex items-center justify-center">
                    {review.name.slice(0, 1)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-sm transition-all"
            >
              كن شريكنا القادم واطلب تسعيرة الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

