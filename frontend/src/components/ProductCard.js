
// 'use client';
// import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';

// export default function ProductCard({ product }) {
  
//   // Format the price to be more readable (e.g., 5,000)
//   const formattedPrice = new Intl.NumberFormat('ar-SA').format(product.price);

//   // The WhatsApp message logic
//   const handleWhatsAppInquiry = () => {
//     const message = `
//       مرحباً، أنا مهتم بشراء هذه الغرض:
//       *${product.name}*
//       - السعر: ${formattedPrice} ريال
//       هل ما زالت متوفرة؟
//     `.trim();
    
//     // Use your actual phone number here
//     const whatsappUrl = `https://wa.me/967782875877?text=${encodeURIComponent(message)}`;
    
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-amber-500/50 hover:shadow-2xl hover:shadow-black/50">
      
//       {/* Product Image */}
//       <div className="relative w-full h-72 overflow-hidden">
//         <img
//           src={product.image || '/placeholder.png'} // Use a placeholder if no image
//           alt={product.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />
//         {/* Subtle overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
//       </div>

//       {/* Product Info */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        
//         <p className="text-slate-400 mb-4 h-12 overflow-hidden">
//           {product.description}
//         </p>
        
//         <div className="flex justify-between items-center mt-4">
//           {/* Price */}
//           <p className="text-2xl font-black text-amber-500">
//             {formattedPrice}
//             <span className="text-base font-medium text-slate-400"> ريال</span>
//           </p>
          
//           {/* WhatsApp Button */}
//           <button
//             onClick={handleWhatsAppInquiry}
//             className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-2 px-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
//           >
//             <PhoneArrowUpRightIcon className="h-5 w-5" />
//             <span>شراء عبر واتساب</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// 'use client'; 
// import React, { useState } from 'react';
// import { EyeIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
// import QuickViewModal from './QuickViewModal';

// const ProductCard = ({ product }) => {
//   const [showQuickView, setShowQuickView] = useState(false);
//   const ADMIN_PHONE = "966500000000"; 
  
//   // Logic for Discount Calculation
//   const hasDiscount = product.old_price && Number(product.old_price) > Number(product.price);
//   const discountPercent = hasDiscount 
//     ? Math.round(((Number(product.old_price) - Number(product.price)) / Number(product.old_price)) * 100)
//     : 0;

//   const imageUrl = product.image ? `${process.env.NEXT_PUBLIC_API_URL}${product.image}` : "https://via.placeholder.com/300";

//   return (
//     <>
//       <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl">
        
//         {/* --- DISCOUNT BADGE --- */}
//         {hasDiscount && (
//           <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
//             خصم {discountPercent}%
//           </div>
//         )}

//         {/* --- IMAGE CONTAINER --- */}
//         <div className="relative h-72 w-full bg-white overflow-hidden flex items-center justify-center p-4">
//           <img 
//             src={imageUrl} 
//             alt={product.name} 
//             className="object-contain max-h-full max-w-full transform group-hover:scale-110 transition-transform duration-700"
//           />
          
//           {/* --- HOVER BUTTONS (The Cardial Effect) --- */}
//           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            
//             {/* Quick View */}
//             <button 
//               onClick={() => setShowQuickView(true)}
//               className="bg-white text-slate-900 p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white"
//               title="معاينة سريعة"
//             >
//               <EyeIcon className="h-6 w-6" />
//             </button>

//             {/* Wishlist (Visual Only for now) */}
//             <button 
//               className="bg-white text-slate-900 p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-red-500 hover:text-white"
//               title="إضافة للمفضلة"
//             >
//               <HeartIcon className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {/* --- DETAILS --- */}
//         <div className="p-5 text-right" dir="rtl">
//           <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors truncate">
//             {product.name}
//           </h3>
          
//           <p className="text-slate-500 text-xs mb-3 line-clamp-1">
//             {product.description}
//           </p>
          
//           <div className="flex items-center gap-3 mb-4">
//             <span className="text-xl font-bold text-emerald-400">{product.price} ريال</span>
//             {hasDiscount && (
//                <span className="text-sm text-slate-500 line-through decoration-red-500/50 font-mono">
//                  {product.old_price}
//                </span>
//             )}
//           </div>

//           {/* Simple WhatsApp Button (Always visible) */}
//           <a 
//             href={`https://wa.me/${ADMIN_PHONE}?text=I want ${product.name}`} 
//             target="_blank" 
//             className="w-full border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
//           >
//             <ChatBubbleLeftRightIcon className="h-5 w-5" />
//             تواصل للشراء
//           </a>
//         </div>
//       </div>

//       {/* --- RENDER MODAL --- */}
//       <QuickViewModal 
//         isOpen={showQuickView} 
//         onClose={() => setShowQuickView(false)} 
//         product={product} 
//       />
//     </>
//   );
// };

// export default ProductCard;

// 'use client'; 
// import React, { useState } from 'react';
// import { EyeIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
// import QuickViewModal from './QuickViewModal';

// const ProductCard = ({ product }) => {
//   const [showQuickView, setShowQuickView] = useState(false);
//   const ADMIN_PHONE = "967782875877"; 
  
//   // Logic for Discount Calculation
//   const hasDiscount = product.old_price && Number(product.old_price) > Number(product.price);
//   const discountPercent = hasDiscount 
//     ? Math.round(((Number(product.old_price) - Number(product.price)) / Number(product.old_price)) * 100)
//     : 0;

//   // --- FIX: SMART IMAGE URL HANDLING ---
//   // If it's Cloudinary, it starts with http. If it's local, it needs the backend URL.
//   const imageUrl = product.image 
//     ? (product.image.toString().startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
//     : "https://via.placeholder.com/300";

//   return (
//     <>
//       <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl h-full flex flex-col">
        
//         {/* --- DISCOUNT BADGE --- */}
//         {hasDiscount && (
//           <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
//             خصم {discountPercent}%
//           </div>
//         )}

//         {/* --- IMAGE CONTAINER --- */}
//         <div className="relative h-72 w-full bg-white overflow-hidden flex items-center justify-center p-4">
//           <img 
//             src={imageUrl} 
//             alt={product.name} 
//             className="object-contain max-h-full max-w-full transform group-hover:scale-110 transition-transform duration-700"
//           />
          
//           {/* --- HOVER BUTTONS --- */}
//           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
//             <button 
//               onClick={() => setShowQuickView(true)}
//               className="bg-white text-slate-900 p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white"
//               title="معاينة سريعة"
//             >
//               <EyeIcon className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {/* --- DETAILS --- */}
//         <div className="p-5 text-right flex-1 flex flex-col justify-between" dir="rtl">
//           <div>
//             <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors truncate">
//                 {product.name}
//             </h3>
            
//             <p className="text-slate-500 text-xs mb-3 line-clamp-1">
//                 {product.description}
//             </p>
            
//             <div className="flex items-center gap-3 mb-4">
//                 <span className="text-xl font-bold text-emerald-400">{product.price} ريال</span>
//                 {hasDiscount && (
//                 <span className="text-sm text-slate-500 line-through decoration-red-500/50 font-mono">
//                     {product.old_price}
//                 </span>
//                 )}
//             </div>
//           </div>

//           <a 
//             href={`https://wa.me/${ADMIN_PHONE}?text=I want ${product.name}`} 
//             target="_blank" 
//             className="w-full border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
//           >
//             <ChatBubbleLeftRightIcon className="h-5 w-5" />
//             تواصل للشراء
//           </a>
//         </div>
//       </div>

//       <QuickViewModal 
//         isOpen={showQuickView} 
//         onClose={() => setShowQuickView(false)} 
//         product={product} 
//       />
//     </>
//   );
// };

// export default ProductCard;

// 'use client'; 
// import React from 'react';
// import { EyeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// // Note: We accept a new prop called 'onQuickView'
// const ProductCard = ({ product, onQuickView }) => {
//   const ADMIN_PHONE = "966500000000"; 
  
//   const hasDiscount = product.old_price && Number(product.old_price) > Number(product.price);
//   const discountPercent = hasDiscount 
//     ? Math.round(((Number(product.old_price) - Number(product.price)) / Number(product.old_price)) * 100)
//     : 0;

//   const imageUrl = product.image 
//     ? (product.image.toString().startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
//     : "/placeholder.png";

//   return (
//     <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl h-full flex flex-col">
      
//       {/* --- DISCOUNT BADGE --- */}
//       {hasDiscount && (
//         <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
//           خصم {discountPercent}%
//         </div>
//       )}

//       {/* --- IMAGE CONTAINER --- */}
//       <div className="relative h-72 w-full bg-white overflow-hidden flex items-center justify-center p-4">
//         <img 
//           src={imageUrl} 
//           alt={product.name} 
//           className="object-contain max-h-full max-w-full transform group-hover:scale-110 transition-transform duration-700"
//         />
        
//         {/* --- HOVER BUTTONS --- */}
//         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
//           <button 
//             // HERE IS THE CHANGE: We call the parent function
//             onClick={() => onQuickView(product)}
//             className="bg-white text-slate-900 p-3 rounded-full shadow-xl transform translate-y-10 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-500 hover:text-white cursor-pointer"
//             title="معاينة سريعة"
//           >
//             <EyeIcon className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       {/* --- DETAILS --- */}
//       <div className="p-5 text-right flex-1 flex flex-col justify-between" dir="rtl">
//         <div>
//           <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors truncate">
//               {product.name}
//           </h3>
          
//           <p className="text-slate-500 text-xs mb-3 line-clamp-1">
//               {product.description}
//           </p>
          
//           <div className="flex items-center gap-3 mb-4">
//               <span className="text-xl font-bold text-emerald-400">{product.price} ريال</span>
//               {hasDiscount && (
//               <span className="text-sm text-slate-500 line-through decoration-red-500/50 font-mono">
//                   {product.old_price}
//               </span>
//               )}
//           </div>
//         </div>

//         <a 
//           href={`https://wa.me/${ADMIN_PHONE}?text=I want ${product.name}`} 
//           target="_blank" 
//           className="w-full border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
//         >
//           <ChatBubbleLeftRightIcon className="h-5 w-5" />
//           تواصل للشراء
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

'use client'; 
import React, { useState } from 'react';
import { EyeIcon, HeartIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
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
    ? (product.image.toString().startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
    : "/placeholder.png";

  return (
    <>
      <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl h-full flex flex-col">
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-20 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg animate-pulse">
            خصم {discountPercent}%
          </div>
        )}

        {/* Image Container */}
        <div className="relative h-72 w-full bg-white overflow-hidden flex items-center justify-center p-4">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="object-contain max-h-full max-w-full transform group-hover:scale-110 transition-transform duration-700"
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
        <div className="p-5 text-right flex-1 flex flex-col justify-between" dir="rtl">
          <div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-500 transition-colors truncate">
                {product.name}
            </h3>
            
            <p className="text-slate-500 text-xs mb-3 line-clamp-1">
                {product.description}
            </p>
            
            <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-bold text-emerald-400">{product.price} ريال</span>
                {hasDiscount && (
                <span className="text-sm text-slate-500 line-through decoration-red-500/50 font-mono">
                    {product.old_price}
                </span>
                )}
            </div>
          </div>

          {/* --- 4. UPDATED WHATSAPP BUTTON --- */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full border border-slate-700 hover:border-emerald-500 hover:bg-emerald-500/10 text-slate-300 hover:text-emerald-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
            تواصل للشراء
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCard;