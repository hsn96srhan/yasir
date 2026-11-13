import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Cpu, ShieldCheck, Clock, Award, ArrowUpLeft } from 'lucide-react';
import { BRAND } from '../data/content';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  const capabilities = [
    {
      icon: Printer,
      title: 'طباعة أوفست كبرى',
      desc: 'ماكينات هيدلبرج ألمانية للكميات الضخمة بأعلى دقة لونية وثبات.',
    },
    {
      icon: Cpu,
      title: 'طباعة رقمية فورية',
      desc: 'إنتاج فوري للمطبوعات الفاخرة، العينات، والكتالوجات خلال ساعات.',
    },
    {
      icon: ShieldCheck,
      title: 'قص وحفر ليزري',
      desc: 'ماكينات CNC ليزرية لقص الإكريليك، الخشب، المعادن، وتجهيز الدروع.',
    },
    {
      icon: Clock,
      title: 'ورش كلادينق متخصصة',
      desc: 'فريق هندسي متخصص في تشكيل ألواح الكلادينق ولحام الحروف المضيئة.',
    },
    {
      icon: Award,
      title: 'تغليف احترافي للمركبات',
      desc: 'صالات مجهزة خالية من الغبار لتركيب استيكر الفينيل بجودة خالية من الفقاعات.',
    },
    {
      icon: ShieldCheck,
      title: 'بناء أجنحة المعارض',
      desc: 'تصنيع هياكل البوثات الخشبية والمعدنية مع كامل التجهيزات الكهربائية.',
    },
  ];

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
            <span className="text-slate-800 font-bold">من نحن</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            من نحن
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            صرح تصنيعي متقدم يجمع الطباعة والهدايا وتجهيز المعارض تحت سقف واحد.
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <div className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded inline-block mb-3">
                رؤيتنا الصناعية
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
                رواد حلول الطباعة والإنتاج الإعلاني
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                انطلقت <strong>مطبعة الأداء اليسير</strong> لترسيخ مفهوم جديد للإنتاج الإعلاني المتكامل في المملكة العربية السعودية، حيث نجمع بين أحدث ماكينات الطباعة الأوفست والرقمية، وأقسام تجهيز المعارض والكلادينق بمواصفات عالمية تلبي متطلبات كبرى الهيئات والشركات.
              </p>

              {/* 4 Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-xl font-extrabold text-[#2563EB]">
                    15+
                  </span>
                  <span className="text-[11px] text-slate-600">سنة خبرة</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-xl font-extrabold text-[#2563EB]">
                    7
                  </span>
                  <span className="text-[11px] text-slate-600">خطوط إنتاج</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-xl font-extrabold text-[#2563EB]">
                    2500+
                  </span>
                  <span className="text-[11px] text-slate-600">مشروع ناجح</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <span className="block text-xl font-extrabold text-emerald-600">
                    100%
                  </span>
                  <span className="text-[11px] text-slate-600">التزام بالمواعيد</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-all shadow-sm"
                >
                  طلب شراكة أو تسعيرة
                </button>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all"
                >
                  اتصل بالإدارة
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85"
                alt="ورش وخطوط إنتاج مطبعة الأداء اليسير"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities & Machinery Grid */}
      <div className="py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              الإمكانيات والورش
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              أحدث التجهيزات الصناعية المتطورة لضمان خروج كل منتج بأعلى درجات الإتقان.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0A1128]">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#2563EB] font-bold flex items-center gap-1">
                    <span>متاح للطلبات المباشرة</span>
                    <ArrowUpLeft className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

