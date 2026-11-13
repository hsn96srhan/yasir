import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { PRODUCTS } from '../data/content';

interface ProductsPageProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'الكل',
    'مطبوعات',
    'استيكر وسيارات',
    'هدايا شركات',
    'معارض وكلادينق',
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat =
        selectedCategory === 'الكل' || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.spec.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

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
            <span className="text-slate-800 font-bold">المنتجات</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1128]">
            كتالوج المنتجات
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            تصفح نماذج منتجاتنا المطبوعة وخيارات التصنيع الفاخرة للشركات.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border-b border-slate-200 bg-white py-6 sticky top-[72px] z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0A1128] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن منتج..."
                className="w-full text-xs px-3.5 py-2 pl-9 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* 16 Products Grid */}
      <div className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8">
              <p className="text-base text-slate-600 font-bold">
                لا توجد نتائج مطابقة لبحثك.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('الكل');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-xs font-bold"
              >
                إعادة ضبط البحث
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          )}
        </div>
      </div>
    </div>
  );
};

