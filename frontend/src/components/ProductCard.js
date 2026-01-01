'use client'; 
import React, { useState } from 'react';
import { EyeIcon, HeartIcon, ChatBubbleLeftRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'; 
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import QuickViewModal from './QuickViewModal';

const ProductCard = ({ product, onQuickView }) => {
  // --- 1. CONFIGURATION ---
  const ADMIN_PHONE = "967782875877"; 
  const message = `مرحباً، أنا مهتم بهذا العرض: *${product.name}* - السعر: ${product.price} ريال`;
  const whatsappLink = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

  // --- 2. FAVORITES LOGIC ---
  const [isLiked, setIsLiked] = useState(false);

  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(product.id)) {
      setIsLiked(true);
    }
  }, [product.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(product.id)) {
      favorites = favorites.filter(id => id !== product.id);
      setIsLiked(false);
    } else {
      favorites.push(product.id);
      setIsLiked(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  // --- 3. DISCOUNT & IMAGE LOGIC ---
  const hasDiscount = product.old_price && Number(product.old_price) > Number(product.price);
  const discountPercent = hasDiscount 
    ? Math.round(((Number(product.old_price) - Number(product.price)) / Number(product.old_price)) * 100)
    : 0;

  const imageUrl = product.image 
    ? (product.image.startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
    : "https://via.placeholder.com/400x400?text=No+Image";
  
  return (
    <>
      <div className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-lg h-full flex flex-col">
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
            خصم {discountPercent}%
          </div>
        )}

        {/* SQUARE Image Container */}
        <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Hover Buttons */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            
            {/* Quick View */}
            <button 
              onClick={() => onQuickView(product)}
              className="bg-white text-slate-900 p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white cursor-pointer"
              title="معاينة سريعة"
            >
              <EyeIcon className="h-6 w-6" />
            </button>

            {/* Favorite */}
            <button 
              onClick={toggleFavorite}
              className={`p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 cursor-pointer ${
                isLiked 
                  ? 'bg-red-500 text-white hover:bg-white hover:text-red-500' 
                  : 'bg-white text-slate-900 hover:bg-red-500 hover:text-white' 
              }`}
              title="إضافة للمفضلة"
            >
              {isLiked ? (
                <HeartIconSolid className="h-6 w-6 animate-bounce" /> 
              ) : (
                <HeartIconOutline className="h-6 w-6" />
              )}
            </button>

          </div>
        </div>

        {/* Details */}
        <div className="p-4 text-right flex-1 flex flex-col justify-between" dir="rtl">
          <div>
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-amber-500 transition-colors truncate">
                {product.name}
            </h3>
            
            <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold text-amber-400">{product.price} ريال</span>
                {hasDiscount && (
                <span className="text-sm text-slate-500 line-through decoration-red-500/50 font-mono">
                    {product.old_price} ريال
                </span>
                )}
            </div>
          </div>

          {/* Buy Button */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
            تواصل للشراء
          </a>
          
          {/* Best Seller Badge */}
          {product.is_bestseller && (
            <div className="mt-3 inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full">
              <span>🔥</span>
              <span>الأكثر مبيعاً</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;