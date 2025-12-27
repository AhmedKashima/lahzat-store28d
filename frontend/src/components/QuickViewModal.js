// 'use client';
// import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// export default function QuickViewModal({ product, isOpen, onClose }) {
//   if (!isOpen || !product) return null;

//   const ADMIN_PHONE = "967782875877"; 
//   const message = `مرحباً، أنا مهتم بهذا العرض: *${product.name}* - السعر: ${product.price} ريال`;
//   const whatsappLink = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
//       <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative flex flex-col md:flex-row">
        
//         {/* Close Button */}
//         <button onClick={onClose} className="absolute top-4 left-4 z-10 text-slate-400 hover:text-white bg-black/50 rounded-full p-2 transition">
//           <XMarkIcon className="h-6 w-6" />
//         </button>

//         {/* Image Side */}
//         <div className="w-full md:w-1/2 bg-white h-64 md:h-auto flex items-center justify-center p-6">
//           <img 
//             src={product.image ? `${process.env.NEXT_PUBLIC_API_URL}${product.image}` : '/placeholder.png'} 
//             alt={product.name} 
//             className="max-h-full object-contain hover:scale-110 transition duration-500"
//           />
//         </div>

//         {/* Details Side */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-right" dir="rtl">
//           <span className="text-amber-500 text-sm font-bold tracking-wider mb-2 uppercase">
//              {/* Category Name Mapping (Optional) */}
//              {product.category}
//           </span>
          
//           <h2 className="text-3xl font-black text-white mb-4">{product.name}</h2>
          
//           <div className="flex items-center gap-3 mb-6">
//             <span className="text-3xl font-bold text-emerald-400">{product.price} ريال</span>
//             {product.old_price && (
//               <span className="text-xl text-slate-500 line-through decoration-red-500/50">
//                 {product.old_price} ريال
//               </span>
//             )}
//           </div>

//           <p className="text-slate-300 leading-relaxed mb-8">
//             {product.description}
//           </p>

//           <a 
//             href={whatsappLink} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
//           >
//             <ChatBubbleLeftRightIcon className="h-6 w-6" />
//             <span>طلب عبر واتساب</span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function QuickViewModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const ADMIN_PHONE = "967782875877"; 
  const message = `مرحباً، أنا مهتم بهذا العرض: *${product.name}* - السعر: ${product.price} ريال`;
  const whatsappLink = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

  // 1. FIX IMAGE URL
  const imageUrl = product.image 
    ? (product.image.toString().startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
    : "/placeholder.png";

  // 2. FIX CATEGORY NAME (Translate to Arabic)
  const categoryNames = {
    'men_watches': 'ساعات رجالي',
    'women_watches': 'ساعات نسائي',
    'rings': 'الخواتم العقيق',
    'perfumes': 'العطور',
    'accessories': 'الاكسسوارات',
    'gifts': 'تحف وهدايا',
    'glasses': 'نظارات'
  };

  const arabicCategory = categoryNames[product.category] || product.category;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 relative flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 left-4 z-10 text-slate-400 hover:text-white bg-black/50 rounded-full p-2 transition">
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-1/2 bg-white h-72 md:h-auto flex items-center justify-center p-6 relative">
          <img 
            src={imageUrl} 
            alt={product.name} 
            className="max-h-full max-w-full object-contain hover:scale-110 transition duration-500"
          />
        </div>

        {/* Details Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-right bg-slate-900" dir="rtl">
          <span className="text-amber-500 text-sm font-bold tracking-wider mb-2 uppercase border border-amber-500/30 px-2 py-1 rounded w-fit">
             {arabicCategory}
          </span>
          
          <h2 className="text-3xl font-black text-white mb-4">{product.name}</h2>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-emerald-400">{product.price} ريال</span>
            {product.old_price && (
              <span className="text-xl text-slate-500 line-through decoration-red-500/50">
                {product.old_price} ريال
              </span>
            )}
          </div>

          <p className="text-slate-300 leading-relaxed mb-8 border-t border-slate-800 pt-4">
            {product.description}
          </p>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span>طلب عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
}