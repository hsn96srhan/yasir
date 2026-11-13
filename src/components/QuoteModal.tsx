import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { BRAND, SERVICES } from '../data/content';
import logoImg from '../assets/logo.jpeg';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialItem = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialItem || SERVICES[0].title);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setService(initialItem);
    }
    if (isOpen) {
      setSubmitted(false);
    }
  }, [initialItem, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `طلب تسعيرة جديد:\n• الاسم/الشركة: ${name}\n• رقم الجوال: ${phone}\n• الخدمة أو المنتج: ${service}\n• ملاحظات: ${notes || 'لا يوجد'}`;
    window.open(BRAND.whatsappUrl(msg), '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-lg rounded-2xl border border-slate-200 shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#0A1128] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="شعار"
              className="w-7 h-7 object-contain rounded-md bg-white p-0.5"
            />
            <h3 className="font-bold text-base">اطلب تسعيرة سريعة</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-3" />
            <h4 className="text-xl font-bold text-navy-900">تم إرسال طلبك بنجاح!</h4>
            <p className="text-sm text-slate-600 mt-2">
              جاري فتح المحادثة المباشرة مع فريق المبيعات لمراجعة التسعيرة فوراً.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                الاسم / الشركة
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: شركة الرؤية للتطوير"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                رقم الجوال
              </label>
              <input
                type="tel"
                required
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05XXXXXXXX"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-right font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                الخدمة أو المنتج المطلوب
              </label>
              <input
                type="text"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                placeholder="حدد نوع المطبوعات أو المقاسات المطلوبة"
                className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                ملاحظات سريعة (الكمية / المواصفات)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="أذكر الكمية التقريبية أو تفاصيل إضافية..."
                className="w-full text-sm px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>إرسال الطلب والتواصل</span>
              <Send className="w-4 h-4 rotate-180" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

