import type { ServiceItem, ProductItem, ReviewItem, FAQItem, PartnerItem, ProjectShowcase } from '../types';

export const BRAND = {
  name: 'الأداء اليسير',
  subname: 'مطبعة الأداء اليسير للطباعة والإعلان',
  fullName: 'شركة الأداء اليسير الدولية للدعاية والإعلان',
  phone: '0566871640',
  phoneFormatted: '056 687 1640',
  city: 'الرياض',
  district: 'حي طويق',
  street: 'شارع أسماء بنت أبي بكر',
  address: 'الرياض — حي طويق، شارع أسماء بنت أبي بكر',
  postalCode: '14921',
  whatsappUrl: (text?: string) => {
    const defaultText = 'مرحباً مطبعة الأداء اليسير، أرغب في طلب تسعيرة';
    return `https://wa.me/966566871640?text=${encodeURIComponent(text || defaultText)}`;
  },
  mapsUrl: 'https://maps.app.goo.gl/LeU5zSLpq5GB2UxbA',
};

// 7 exact services with realistic corporate & commercial images
export const SERVICES: ServiceItem[] = [
  {
    id: 'design',
    title: 'التصميم الإبداعي',
    summary: 'تصميم الكتب، الكروت، الهويات، وتجهيز ملفات المشاريع.',
    detail: 'فريق متخصص لإعداد تصاميم الطباعة بأعلى المعايير الهندسية واللونية المعتمدة.',
    features: ['تصميم هويات بصرية', 'إخراج كتب ومجلات', 'تجهيز ملفات الطباعة الفورية'],
    image: './images/services/design.jpg',
  },
  {
    id: 'paper-printing',
    title: 'الطباعة الورقية',
    summary: 'طباعة كافة أنواع الورق، الكتب، الكتالوجات، والعلب.',
    detail: 'ماكينات أوفست وديجيتال متطورة تنتج آلاف النسخ يومياً بدقة ألوان استثنائية.',
    features: ['طباعة أوفست وديجيتال', 'تجليد فاخر وسلوفان', 'علب كرتونية ومنتجات فاخرة'],
    image: './images/services/paper.jpg',
  },
  {
    id: 'sticker-printing',
    title: 'طباعة الاستيكر',
    summary: 'استيكر فينيل، شفاف، مقاوم للماء، وليبل المنتجات.',
    detail: 'خامات فينيل أصلية مع قص ليزري وإلكتروني متطابق مع جميع الأشكال والأحجام.',
    features: ['فينيل ألماني عالي الثبات', 'استيكر شفاف وعاكس', 'مقاوم للشمس والرطوبة'],
    image: './images/services/sticker.jpg',
  },
  {
    id: 'corporate-gifts',
    title: 'هدايا الشركات',
    summary: 'باقات الموظفين، الدروع، الأجندات، والأكواب المطبوعة.',
    detail: 'حلول هدايا ترويجية فاخرة تعزز مكانة علامتك التجارية في كافة المناسبات والفعاليات.',
    features: ['بوكسات VIP مخصصة', 'دروع تكريم وحفر ليزر', 'أجندات وأقلام راقية'],
    image: './images/services/gifts.jpg',
  },
  {
    id: 'vehicle-wrapping',
    title: 'تغليف السيارات',
    summary: 'تصميم وطباعة وتركيب استيكرات أساطيل وسيارات الشركات.',
    detail: 'تغليف احترافي يحول مركبات شركتك إلى واجهات إعلانية متحركة ومحمية بالكامل.',
    features: ['تغليف جزئي وكامل', 'طباعة عالية المقاومة للأشعة', 'فريق تركيب محترف'],
    image: './images/services/vehicle.jpg',
  },
  {
    id: 'exhibition-booths',
    title: 'تجهيز المعارض',
    summary: 'تصميم وتنفيذ البوثات، خلفيات المسارح، والستاندات.',
    detail: 'تنفيذ شامل لأجنحة المعارض والفعاليات الكبرى من المخطط ثلاثي الأبعاد حتى التسليم.',
    features: ['تصميم بوثات 3D مخصصة', 'خلفيات مسارح وبانرات', 'ستاندات رول أب وبوب أب'],
    image: './images/services/exhibition.jpg',
  },
  {
    id: 'cladding-signage',
    title: 'الكلادينق والحروف',
    summary: 'توريد وتركيب واجهات الكلادينق والحروف البارزة المضيئة.',
    detail: 'واجهات معمارية فخمة بألواح الكلادينق المقاوم للحريق وحروف بارزة بإضاءة LED عصرية.',
    features: ['ألواح كلادينق معتمدة', 'حروف إكريليك وزانكور مضيء', 'ضمان شامل على التثبيت'],
    image: './images/services/cladding.jpg',
  },
];

// 16 products with accurate, premium commercial Saudi market visuals
export const PRODUCTS: ProductItem[] = [
  {
    id: 'p1',
    name: 'بوكس هدايا VIP',
    category: 'هدايا شركات',
    spec: 'تغليف فاخر بشعار شركتك',
    image: './images/products/p1_box.jpg',
  },
  {
    id: 'p2',
    name: 'واجهة كلادينق LED',
    category: 'معارض وكلادينق',
    spec: 'توريد وتركيب بضمان شامل',
    image: './images/products/p2_cladding.jpg',
  },
  {
    id: 'p3',
    name: 'كروت شخصية Spot UV',
    category: 'مطبوعات',
    spec: 'ورق 350 جم سلوفان مخملي',
    image: './images/products/p3_cards.jpg',
  },
  {
    id: 'p4',
    name: 'تغليف سيارة تجارية',
    category: 'استيكر وسيارات',
    spec: 'فينيل ألماني مقاوم للشمس',
    image: './images/products/p4_car.jpg',
  },
  {
    id: 'p5',
    name: 'طباعة كتب ومجلات',
    category: 'مطبوعات',
    spec: 'طباعة أوفست وتجليد فاخر',
    image: './images/products/p5_books.jpg',
  },
  {
    id: 'p6',
    name: 'بوث معرض 3D',
    category: 'معارض وكلادينق',
    spec: 'تصميم وتنفيذ متكامل',
    image: './images/products/p6_booth.jpg',
  },
  {
    id: 'p7',
    name: 'رول استيكر منتجات',
    category: 'استيكر وسيارات',
    spec: 'قص إلكتروني مقاوم للماء',
    image: './images/products/p7_stickers.jpg',
  },
  {
    id: 'p8',
    name: 'دروع وأجندات جلدية',
    category: 'هدايا شركات',
    spec: 'حفر ليزر وطباعة دقيقة',
    image: './images/products/p8_shield.jpg',
  },
  {
    id: 'p9',
    name: 'بروشورات وكتالوجات دورية',
    category: 'مطبوعات',
    spec: 'ورق كوشيه فاخر ولميع',
    image: './images/products/p9_brochures.jpg',
  },
  {
    id: 'p10',
    name: 'أكياس ورقية مطبوعة',
    category: 'مطبوعات',
    spec: 'مقاسات متعددة بمقابض متينة',
    image: './images/products/p10_bags.jpg',
  },
  {
    id: 'p11',
    name: 'استيكر أسطح وجدران',
    category: 'استيكر وسيارات',
    spec: 'طباعة عالية الدقة وسهلة الإزالة',
    image: './images/products/p11_wall.jpg',
  },
  {
    id: 'p12',
    name: 'تغليف شاحنات التوزيع',
    category: 'استيكر وسيارات',
    spec: 'حماية كاملة وألوان عاكسة',
    image: './images/products/p12_truck.jpg',
  },
  {
    id: 'p13',
    name: 'أكواب وحوافظ حرارية',
    category: 'هدايا شركات',
    spec: 'طباعة ليزرية مقاومة للغسيل',
    image: './images/products/p13_cup.jpg',
  },
  {
    id: 'p14',
    name: 'حقائب ومفكرات مؤتمرات',
    category: 'هدايا شركات',
    spec: 'خامات جلدية بشعار محفور',
    image: './images/products/p14_notebook.jpg',
  },
  {
    id: 'p15',
    name: 'ستاندات رول أب فاخرة',
    category: 'معارض وكلادينق',
    spec: 'قاعدة ألمنيوم قوية وسريعة التركيب',
    image: './images/products/p15_rollup.jpg',
  },
  {
    id: 'p16',
    name: 'حروف زنكور مضيئة',
    category: 'معارض وكلادينق',
    spec: 'إضاءة سامسونج كورية ضد الماء',
    image: './images/products/p16_letters.jpg',
  },
];

export const PARTNERS: PartnerItem[] = [
  { id: '1', name: 'أرامكو السعودية', category: 'طاقة وصناعة', logoText: 'ARAMCO', logo: './images/partners/aramco.png' },
  { id: '2', name: 'الراجحي المالية', category: 'مصارف واستثمار', logoText: 'AL RAJHI', logo: './images/partners/alrajhi.png' },
  { id: '3', name: 'شركة الاتصالات STC', category: 'اتصالات وتقنية', logoText: 'stc', logo: './images/partners/stc.jpeg' },
  { id: '4', name: 'مجموعة الفوزان', category: 'تطوير وتجارة', logoText: 'AL FOZAN', logo: './images/partners/alfozan.png' },
  { id: '5', name: 'شركة المراعي', category: 'صناعات غذائية', logoText: 'ALMARAI', logo: './images/partners/almarai.png' },
  { id: '6', name: 'وزارة الثقافة', category: 'قطاع حكومي', logoText: 'MOC', logo: './images/partners/moc.png' },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: '1',
    name: 'م. عبد العزيز الشمري',
    title: 'مدير التسويق',
    company: 'شركة الأفق المتقدم',
    rating: 5,
    quote: 'سرعة استثنائية في إنجاز مطبوعات المؤتمر السنوي مع التزام دقيق بألوان الهوية المعتمدة.',
  },
  {
    id: '2',
    name: 'أ. سارة المنصور',
    title: 'مسؤولة العلاقات والمشتريات',
    company: 'مجموعة المدى القابضة',
    rating: 5,
    quote: 'جودة بوكسات الهدايا والدروع الفاخرة نالت إعجاب كافة أعضاء مجلس الإدارة والضيوف.',
  },
  {
    id: '3',
    name: 'فهد القحطاني',
    title: 'مدير العمليات والأسطول',
    company: 'مؤسسة مسار اللوجستية',
    rating: 5,
    quote: 'تم تغليف أكثر من 30 سيارة وشاحنة بدقة متناهية وفينيل عالي الثبات ضد عوامل الجو.',
  },
  {
    id: '4',
    name: 'د. خالد العمري',
    title: 'الرئيس التنفيذي',
    company: 'ريادة للاستشارات',
    rating: 5,
    quote: 'واجهة الكلادينق والحروف المضيئة أحدثت نقلة نوعية في المظهر الخارجي لمقر الشركة.',
  },
  {
    id: '5',
    name: 'م. ناصر الشهري',
    title: 'مدير الفعاليات',
    company: 'قمم لتنظيم المعارض',
    rating: 5,
    quote: 'تسليم بوث المعرض قبل الموعد بـ 12 ساعة مع تشطيبات متقونة ودعم فني متواصل.',
  },
  {
    id: '6',
    name: 'هدى السبيعي',
    title: 'مديرة علامة تجارية',
    company: 'نقاء للأغذية العضوية',
    rating: 5,
    quote: 'طباعة رولات الاستيكر للمنتجات واضحة جداً ومقاومة للمياه والرطوبة بشكل مبهر.',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'كم يستغرق تجهيز وطباعة الطلبات؟',
    answer: 'تنفذ المطبوعات الرقمية والاستيكرات خلال 24 إلى 48 ساعة، بينما تتطلب مشاريع الأوفست والكلادينق والمعارض من 3 إلى 5 أيام عمل بحسب الكميات.',
  },
  {
    id: 'f2',
    question: 'هل تقدمون خدمة معاينة العينات قبل اعتماد الطباعة؟',
    answer: 'نعم، نوفر عينة تجريبية معتمدة ملونة لكافة مشاريع المطبوعات والعلب والهدايا للتأكد من المقاسات ودقة الألوان قبل بدء الإنتاج الكامل.',
  },
  {
    id: 'f3',
    question: 'هل يشمل عملكم التوريد والتركيب الميداني؟',
    answer: 'بالتأكيد، نمتلك فرق تركيب متخصصة للكلادينق والحروف المضيئة، تغليف أساطيل السيارات، وبناء وتجهيز أجنحة المعارض في كافة مناطق المملكة.',
  },
  {
    id: 'f4',
    question: 'ما هي صيغ الملفات المطلوبة للطباعة؟',
    answer: 'نستقبل ملفات PDF عالية الجودة بألوان CMYK وخطوط محولة (Outlines)، إضافة إلى ملفات AI و EPS و PSD بدقة لا تقل عن 300 DPI.',
  },
  {
    id: 'f5',
    question: 'هل توفرون ضماناً على لوحات الكلادينق والاستيكر؟',
    answer: 'نقدم ضماناً شاملاً يصل حتى 5 سنوات على ألواح الكلادينق ومحولات LED، وضماناً ضد التقشير وتغير الألوان لفينيل تغليف السيارات.',
  },
];

export const PROJECTS: ProjectShowcase[] = [
  {
    id: 'pr1',
    title: 'تجهيز جناح معرض سيتي سكيب الرياض',
    category: 'معارض وفعاليات',
    image: './images/projects/pr1.jpg',
  },
  {
    id: 'pr2',
    title: 'واجهة كلادينق برج الأعمال الحديث',
    category: 'كلادينق وحروف',
    image: './images/projects/pr2.jpg',
  },
  {
    id: 'pr3',
    title: 'تغليف أسطول سيارات شركة تموين',
    category: 'تغليف سيارات',
    image: './images/projects/pr3.jpg',
  },
  {
    id: 'pr4',
    title: 'باقات هدايا تكريم الشركاء السنوية',
    category: 'هدايا شركات',
    image: './images/projects/pr4.jpg',
  },
  {
    id: 'pr5',
    title: 'إصدار كتالوج المشروعات القومية',
    category: 'مطبوعات ورقية',
    image: './images/projects/pr5.jpg',
  },
  {
    id: 'pr6',
    title: 'خط ليبل استيكر منتجات فاخرة',
    category: 'استيكرات وليبل',
    image: './images/projects/pr6.jpg',
  },
];
