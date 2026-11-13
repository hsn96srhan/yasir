import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  ChevronDown,
  Sparkles,
  ArrowUpLeft,
} from 'lucide-react';
import {
  BRAND,
  SERVICES,
  PRODUCTS,
  PARTNERS,
  REVIEWS,
  FAQS,
} from '../data/content';

interface HomePageProps {
  onOpenQuote: (item?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  // Services carousel state: index of starting card (3 items visible on desktop)
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevService = () => {
    setCarouselIndex((prev) => (prev === 0 ? SERVICES.length - 3 : prev - 1));
  };

  const nextService = () => {
    setCarouselIndex((prev) => (prev >= SERVICES.length - 3 ? 0 : prev + 1));
  };

  // Product filter state
  const [productFilter, setProductFilter] = useState<string>('الكل');
  const homeProducts = PRODUCTS.slice(0, 8);
  const filteredProducts =
    productFilter === 'الكل'
      ? homeProducts
      : homeProducts.filter((p) => p.category === productFilter);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].id);

  // Quick quote inline form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formService, setFormService] = useState('طباعة ورقية وكتالوجات');
  const [formNotes, setFormNotes] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `طلب تسعيرة جديد عبر الموقع:\n• الاسم/الشركة: ${formName}\n• رقم الجوال: ${formPhone}\n• الخدمة المطلوبة: ${formService}\n• ملاحظات سريعة: ${formNotes || 'لا يوجد'}`;
    window.open(BRAND.whatsappUrl(msg), '_blank');
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* 2. Hero Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right Column (in RTL: appears first on right) */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{BRAND.subname}</span>
              </div>

              {/* H1: 4 words max */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1128] leading-tight tracking-tight">
                نطبع هويتك.. ونصنع حضورك
              </h1>

              {/* Subheadline: 1 line */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                حلول متكاملة في الطباعة، الهدايا، تغليف السيارات، الكلادينق، وتجهيز المعارض.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-7 py-3.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base font-bold shadow-md hover:shadow-lg transition-all"
                >
                  اطلب عرض سعر
                </button>
                <Link
                  to="/products"
                  className="px-7 py-3.5 rounded-lg border-2 border-[#0A1128] text-[#0A1128] hover:bg-[#0A1128] hover:text-white text-base font-bold transition-all text-center"
                >
                  تصفح المنتجات
                </Link>
              </div>

              {/* 3 Micro-Badges */}
              <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-6 sm:gap-8 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>معاينة وتصميم</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>تنفيذ سريع</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>توريد وتركيب</span>
                </div>
              </div>
            </div>

            {/* Left Column: Clean aspect-[4/3] image */}
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85"
                  alt="مطبوعات وهويات تجارية فاخرة مطبعة الأداء اليسير"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-md hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-[#0A1128]">
                  جودة إنتاجية معتمدة 100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Partners Strip */}
      <section className="py-10 bg-[#F8FAFC] border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider shrink-0">
              شركاء النجاح
            </span>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 items-center w-full md:w-auto">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="flex items-center justify-center p-3 rounded-lg border border-slate-200/50 bg-white/60 hover:bg-white text-slate-500 hover:text-[#0A1128] transition-all"
                  title={partner.name}
                >
                  <span className="font-mono font-extrabold text-xs tracking-wider text-center">
                    {partner.logoText}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/partners"
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] shrink-0 inline-flex items-center gap-1"
            >
              <span>كافة الشركاء</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services Carousel */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              خدماتنا المتكاملة
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={prevService}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                aria-label="السابق"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={nextService}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition-colors shadow-sm"
                aria-label="التالي"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Grid: 3 equal-height cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(carouselIndex, carouselIndex + 3).map((service) => (
              <div
                key={service.id}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white flex flex-col h-full hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-200"
              >
                {/* Top: aspect-[4/3] */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Bottom: p-5 flex-1 flex flex-col justify-between */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0A1128]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-1">
                      {service.summary}
                    </p>
                  </div>
                  <a
                    href={BRAND.whatsappUrl(`أرغب في الاستفسار عن خدمة: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1 group"
                  >
                    <span>اطلب الخدمة</span>
                    <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] px-5 py-2.5 rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors"
            >
              <span>كافة تفاصيل الخدمات</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Product Catalog Grid */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              كتالوج المنتجات
            </h2>
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                'الكل',
                'مطبوعات',
                'استيكر وسيارات',
                'هدايا شركات',
                'معارض وكلادينق',
              ].map((category) => (
                <button
                  key={category}
                  onClick={() => setProductFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    productFilter === category
                      ? 'bg-[#0A1128] text-white shadow-sm'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Balanced 4-Column Grid: 8 Equal-Height Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-200 group"
              >
                <div className="aspect-square w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-[#0A1128] mt-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {product.spec}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenQuote(product.name)}
                    className="w-full mt-4 py-2.5 rounded-lg bg-[#0A1128] hover:bg-[#2563EB] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    اطلب تسعيرة
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] px-5 py-2.5 rounded-lg border border-blue-200 bg-white hover:bg-blue-50 transition-colors shadow-sm"
            >
              <span>تصفح الكتالوج الكامل</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. About Us & Metrics */}
      <section className="py-14 sm:py-20 bg-[#0A1128] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Right: Real photo of printing press workshop */}
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85"
                alt="خطوط إنتاج مطبعة الأداء اليسير"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left: Content */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                قوة تصنيعية متكاملة
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-300">
                أحدث خطوط الطباعة وورش الكلادينق وتجهيز المعارض تحت سقف واحد.
              </p>

              {/* 2x2 Symmetrical Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400">
                    15+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                    سنة خبرة
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400">
                    7
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                    خطوط إنتاج
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-blue-400">
                    2500+
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                    مشروع منفذ
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-400">
                    100%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                    التزام بالمواعيد
                  </span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-colors shadow-md"
              >
                <span>إمكانياتنا ومعداتنا</span>
                <ArrowUpLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Customer Reviews */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              آراء عملائنا
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-xl bg-[#F8FAFC] border border-slate-200/80 flex flex-col justify-between h-full hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    "{review.quote}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-[#0A1128]">
                      {review.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      {review.title} — {review.company}
                    </p>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                    معتمد
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8]"
            >
              <span>جميع التقييمات</span>
              <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128]">
              الأسئلة الشائعة
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 font-bold text-sm text-[#0A1128] hover:text-[#2563EB] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#2563EB]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Quick Quote Form */}
      <section className="py-14 sm:py-20 bg-white" id="quick-quote">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Right Panel (lg:col-span-2 bg-[#0A1128] text-white p-8 flex flex-col justify-between) */}
            <div className="lg:col-span-2 bg-[#0A1128] text-white p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-blue-400 block mb-1">
                  تواصل مباشر
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  ابدأ مشروعك الآن
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  فريقنا الهندسي والإنتاجي بانتظار استفساراتكم لإعداد أفضل عروض الأسعار.
                </p>

                <div className="mt-8 space-y-4 text-xs">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">اتصال هاتفي</span>
                      <span dir="ltr" className="font-mono font-bold text-sm">
                        {BRAND.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={BRAND.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-red-400 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">موقع المطبعة</span>
                      <span className="font-bold flex items-center gap-1">
                        خرائط جوجل <ExternalLink className="w-3 h-3 text-slate-400" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5"
                >
                  <span>صفحة التواصل والموقع</span>
                  <ArrowUpLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Left Panel (lg:col-span-3 bg-white p-8) */}
            <div className="lg:col-span-3 bg-white p-8">
              {formSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <CheckCircle className="w-14 h-14 text-emerald-500 mb-3" />
                  <h4 className="text-lg font-bold text-[#0A1128]">
                    تم استقبال بيانات طلبك!
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    جاري توجيهك إلى واتساب المطبعة لخدمتك فورياً.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الاسم / الشركة
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="اسمك الكريم أو اسم المؤسسة"
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
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-right font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      الخدمة المطلوبة
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
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
                      ملاحظات سريعة
                    </label>
                    <textarea
                      rows={2}
                      value={formNotes}
                      onChange={(e) => setFormNotes(e.target.value)}
                      placeholder="المقاس، الكمية المتوقعة، أو موعد التسليم المطلوب..."
                      className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>إرسال الطلب</span>
                    <Send className="w-4 h-4 rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

