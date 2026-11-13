import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(SERVICES[0].title);
  const [city, setCity] = useState('الرياض');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `طلب استفسار وتسعيرة من صفحة التواصل:\n• الاسم: ${name}\n• الجوال: ${phone}\n• المدينة: ${city}\n• الخدمة: ${service}\n• الملاحظات: ${notes || 'لا يوجد'}`;
    window.open(BRAND.whatsappUrl(msg), '_blank');
    setSubmitted(true);
  };

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
            <span className="text-slate-800 font-bold">تواصل معنا</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            تواصل معنا
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            فريق المبيعات والدعم الفني في خدمتكم للرد على جميع الاستفسارات والطلبات.
          </p>
        </div>
      </div>

      <div className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Right: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Phone Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">الهاتف الموحد والواتساب</span>
                    <h3 className="text-lg font-bold text-[#0A1128] font-mono" dir="ltr">
                      {BRAND.phone}
                    </h3>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex-1 text-center py-2 rounded-lg bg-[#0A1128] text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                  >
                    اتصال هاتفي
                  </a>
                  <a
                    href={BRAND.whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
                  >
                    محادثة واتساب
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">مقر المطبعة والمعرض</span>
                    <h3 className="text-sm font-bold text-[#0A1128] leading-snug">
                      المملكة العربية السعودية — الرياض
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      شارع الإنتاج الصناعي، منطقة المطابع الكبرى
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors"
                  >
                    <span>فتح الموقع على خرائط جوجل</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">أوقات العمل والإنتاج</span>
                    <h3 className="text-sm font-bold text-[#0A1128]">
                      السبت — الخميس: 8:00 ص إلى 10:00 م
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  خدمة استلام الطلبات عبر الواتساب والموقع متاحة على مدار 24 ساعة.
                </p>
              </div>
            </div>

            {/* Left: Detailed Quote Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <h2 className="text-xl font-bold text-[#0A1128] mb-1">
                  نموذج طلب تسعيرة تفصيلي
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  املأ البيانات وسيقوم مهندس التسعير بالتواصل معك فوراً بعرض السعر الرسمي.
                </p>

                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-bold text-[#0A1128]">
                      تم إرسال طلبك بنجاح!
                    </h3>
                    <p className="text-xs text-slate-600 mt-2">
                      تم توجيه بياناتك عبر الواتساب، وسيقوم ممثلنا بالتواصل المباشر معك.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-lg bg-[#2563EB] text-white text-xs font-bold"
                    >
                      إرسال طلب آخر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          الاسم / المنشأة
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="الاسم الكامل أو اسم الشركة"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          رقم الجوال
                        </label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="05XXXXXXXX"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-right font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          الخدمة المطلوبة
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] bg-white"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          المدينة / المنطقة
                        </label>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="الرياض، جدة، الدمام..."
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        تفاصيل ومواصفات الطلب
                      </label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="أذكر الكميات التقريبية، الأبعاد، نوع الورق أو الخامات، أو أي ملفات ترغب في إرفاقها..."
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>إرسال الطلب والتسعير الفوري</span>
                      <Send className="w-4 h-4 rotate-180" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
