'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import AuthModal from '../components/AuthModal';
import QuickViewModal from '../components/QuickViewModal';
import FavoritesModal from '../components/FavoritesModal';
import ReviewsSection from '../components/ReviewsSection';
import {
  UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
  PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
  FireIcon, HeartIcon, Bars3Icon, XMarkIcon,
  ChevronLeftIcon, ChevronRightIcon, StarIcon
} from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isFavOpen, setFavOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const heroImages = [
    'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
  ];

  const categories = [
    { id: 'men_watches', name: 'ساعات رجالي' },
    { id: 'women_watches', name: 'ساعات نسائي' },
    { id: 'rings', name: 'خواتم العقيق' },
    { id: 'perfumes', name: 'العطور' },
    { id: 'accessories', name: 'إكسسوارات' },
    { id: 'gifts', name: 'تحف وهدايا' },
    { id: 'glasses', name: 'نظارات' },
  ];

  const categoryQuotes = {
    all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
    men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب، ارتد ما يليق بمكانتك." },
    women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
    perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
    gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
    rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
    accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
    glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
  };

  // Preload images and setup background slideshow
  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) setUser(JSON.parse(userInfo));
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    window.location.reload();
  };

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    setShowAllProducts(false);
    setMobileMenuOpen(false);
    const section = document.getElementById('collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShowAll = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAllProducts(true);
    const section = document.getElementById('collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get products for each category
  const bestSellers = products.filter(p => p.is_bestseller === true);
  const productsByCategory = categories.map(cat => ({
    ...cat,
    products: products.filter(p => p.category === cat.id),
  }));

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* NAVBAR - Professional & Elegant */}
      <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative">
                <ShoppingBagIcon className="h-9 w-9 text-amber-500 transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h1 className="text-1xl font-black text-white tracking-gold">
              <span className="text-gold">
                Lahazat Sotre
              </span>
            </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => handleShowAll('all')}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                    : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
                }`}
              >
                الرئيسية
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleShowAll(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Favorites */}
              <button
                onClick={() => setFavOpen(true)}
                className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                title="المفضلة"
              >
                <HeartIcon className="h-6 w-6" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-lg transition-all"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>

              {/* User Area - Desktop */}
              {user ? (
                <div className="hidden lg:flex items-center gap-3">
                  {user.isAdmin && (
                    <button
                      onClick={() => router.push('/admin')}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                    >
                      <WrenchScrewdriverIcon className="h-4 w-4" />
                      <span>لوحة التحكم</span>
                    </button>
                  )}
                  <div className="flex items-center gap-3 text-slate-300 border-r border-white/10 pr-3">
                    <UserCircleIcon className="h-5 w-5" />
                    <span className="font-medium text-sm">
                      {user.name}
                    </span>
                  </div>
                  <button
                    onClick={logoutHandler}
                    className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                    title="تسجيل خروج"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="hidden lg:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                >
                  <UserCircleIcon className="h-5 w-5" />
                  <span>دخول الأعضاء</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-4">
              <div className="flex flex-col gap-1 px-2">
                <button
                  onClick={() => handleShowAll('all')}
                  className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                      : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
                  }`}
                >
                  الرئيسية
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleShowAll(cat.id)}
                    className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                        : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
                
                {/* Mobile User Actions */}
                {user ? (
                  <>
                    {user.isAdmin && (
                      <button
                        onClick={() => {
                          router.push('/admin');
                          setMobileMenuOpen(false);
                        }}
                        className="mt-2 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg text-sm font-medium justify-center"
                      >
                        <WrenchScrewdriverIcon className="h-4 w-4" />
                        <span>لوحة التحكم</span>
                      </button>
                    )}
                    <button
                      onClick={() => {
                        logoutHandler();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-slate-300 py-3 px-4 rounded-lg text-sm font-medium hover:text-red-500 hover:bg-red-500/10 justify-center"
                    >
                      <ArrowRightOnRectangleIcon className="h-4 w-4" />
                      <span>تسجيل الخروج</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setAuthOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="mt-2 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black py-3 px-4 rounded-lg text-sm font-medium justify-center"
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>دخول الأعضاء</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION - Cinematic Luxury */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Slideshow */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
              index === currentBgIndex
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-3 tracking-tight">
              <span className="text-gold">
                 متجر لحظات
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
            </p>
          </div>

          {/* Elegant Text Box */}
          <div className="bg-white/5 backdrop-blur-60xl border border-white/10 rounded-2xl p-6 md:p-10 mb-8 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/20">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/50"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/50"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/50"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/50"></div>
              
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4">
                نختار لك بعناية <span className="text-gold font-medium">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span> 
                لتكون اختيارك الأمثل في كل مناسبة.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-4"></div>
              
              <p className="text-gold/90 text-lg font-serif italic">
                "الأناقة ليست صدفة... بل اختيار مدروس"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* BEST SELLERS SECTION - Horizontal Slider */}
        {bestSellers.length > 0 && (
          <div className="mb-20">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="relative">
                <FireIcon className="h-10 w-10 text-amber-500" />
                <div className="absolute inset-0 bg-amber-500/20 blur-lg animate-pulse"></div>
              </div>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  الأكثر مبيعاً
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto"></div>
              </div>
            </div>

            {/* Best Sellers Slider */}
            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{
                  prevEl: '.best-seller-prev',
                  nextEl: '.best-seller-next',
                }}
                pagination={{
                  clickable: true,
                  el: '.best-seller-pagination',
                }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                className="pb-12"
              >
                {bestSellers.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="px-2">
                      <ProductCard 
                        product={product} 
                        onQuickView={(p) => setQuickViewProduct(p)} 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <button className="best-seller-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button className="best-seller-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
              
              {/* Pagination Dots */}
              <div className="best-seller-pagination flex justify-center gap-2 mt-6"></div>
            </div>
          </div>
        )}

        {/* CATEGORY SECTIONS - Each as Horizontal Slider */}
        {productsByCategory.map((category) => {
          if (category.products.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-gold rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gold">
                    {category.name}
                  </h3>
                </div>
                <button
                  onClick={() => handleShowAll(category.id)}
                  className="text-gold hover:text-amber-600 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <span>عرض الكل</span>
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
              </div>

              {/* Category Products Slider */}
              <div className="relative group">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation={{
                    prevEl: `.${category.id}-prev`,
                    nextEl: `.${category.id}-next`,
                  }}
                  pagination={{
                    clickable: true,
                    el: `.${category.id}-pagination`,
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                  }}
                  className="pb-12"
                >
                  {category.products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="px-2">
                        <ProductCard 
                          product={product} 
                          onQuickView={(p) => setQuickViewProduct(p)} 
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <button className={`${category.id}-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0`}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button className={`${category.id}-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}>
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
                
                {/* Pagination Dots */}
                <div className={`${category.id}-pagination flex justify-center gap-2 mt-6`}></div>
              </div>
            </div>
          );
        })}

        {/* SHOW ALL PRODUCTS SECTION - When "عرض الكل" is clicked */}
        {showAllProducts && (
          <div id="collection" className="pt-8 animate-fadeIn">
            {/* Category Quote */}
            <div className="mb-12 text-center">
              <div className="inline-block relative p-8 md:p-10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-slate-950 p-2 rounded-full">
                    <SparklesIcon className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gold mb-3">
                  {categoryQuotes[activeCategory]?.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  "{categoryQuotes[activeCategory]?.text}"
                </p>
              </div>
            </div>

            {/* All Products Grid */}
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="relative">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold"></div>
                  <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold/30" style={{ animationDirection: 'reverse' }}></div>
                </div>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickView={(p) => setQuickViewProduct(p)} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-block p-8 bg-white/5 rounded-2xl">
                  <p className="text-slate-400 text-lg mb-2">لا توجد منتجات في هذه الفئة حالياً</p>
                  <p className="text-slate-500 text-sm">سيتم إضافة منتجات جديدة قريباً</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* REVIEWS SECTION */}
      <ReviewsSection />

      {/* PRE-FOOTER CTA */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            هل تحتاج مساعدة في الاختيار؟
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            فريق <span className="text-gold font-semibold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة وتقديم الاستشارات المجانية.
          </p>
          <a
            href="https://wa.me/967782875877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-slate-950 to-black pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
              <div className="relative">
              <ShoppingBagIcon className="h-8 w-8 text-yellow-500" />
                <div className="absolute inset-0 bg-yellow/20 blur-md"></div>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-gold">
                    Lahazat Sotre
                  </span>
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1AG3Qk9XJR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
                روابط مهمة
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>الشروط والأحكام</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>سياسة الخصوصية</span>
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>سياسة الاسترجاع والاستبدال</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
                تواصل معنا
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <span dir="ltr" className="font-medium">+967 782 875 877</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <span>اليمن - صنعاء</span>
                </li>
               
              </ul>
            </div>
          </div>

          {/* SIGNATURE SECTION - Elegant & Professional */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Copyright */}
              <div className="order-2 md:order-1">
                <p className="text-slate-500 text-sm">
                  جميع الحقوق محفوظة © 2025 لحظات
                </p>
              </div>

              {/* Developer Signature - Professional & Elegant */}
              <div className="order-1 md:order-2">
                <div className="flex flex-col items-center gap-1 group">
                  <span className="text-slate-600 text-xs font-light tracking-[0.3em] uppercase">
                    Developed by
                  </span>
                  <a
                    href="https://wa.me/967774072721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-3 no-underline transition-all duration-500 group-hover:scale-105"
                  >
                    {/* Name with Elegant Gradient */}
                    <span className="text-gold font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                      IBRAHIM SALEH KASHIMA
                    </span>
                    
                    {/* Elegant Code Icon */}
                    <div className="relative p-2 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-lg group-hover:border-amber-500/50 transition-all duration-300">
                      <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-amber-500/10 blur-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    </div>

                    {/* Underline Effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
      <FavoritesModal
        isOpen={isFavOpen}
        onClose={() => setFavOpen(false)}
        allProducts={products}
      />
    </div>
  );
}