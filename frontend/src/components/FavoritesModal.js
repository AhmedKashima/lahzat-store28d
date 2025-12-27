// 'use client';
// import { useState, useEffect } from 'react';
// import { XMarkIcon, TrashIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

// export default function FavoritesModal({ isOpen, onClose, allProducts }) {
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   // Load Favorites when Modal Opens
//   useEffect(() => {
//     if (isOpen) {
//       const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
//       // Filter the full product list to find the saved ones
//       const items = allProducts.filter(p => savedIds.includes(p.id));
//       setFavoriteItems(items);
//     }
//   }, [isOpen, allProducts]);

//   // Remove Item
//   const removeItem = (id) => {
//     const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
//     const newIds = savedIds.filter(itemId => itemId !== id);
//     localStorage.setItem('favorites', JSON.stringify(newIds));
    
//     // Update State
//     setFavoriteItems(favoriteItems.filter(item => item.id !== id));
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[70] flex justify-end">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
//         onClick={onClose}
//       ></div>

//       {/* Sidebar Panel */}
//       <div className="relative w-full max-w-md bg-slate-900 h-full shadow-2xl border-l border-slate-800 flex flex-col animate-slide-in-right">
        
//         {/* Header */}
//         <div className="p-6 border-b border-slate-800 flex justify-between items-center">
//           <h2 className="text-2xl font-bold text-white">قائمة المفضلة ❤️</h2>
//           <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition">
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         {/* List */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-4">
//           {favoriteItems.length === 0 ? (
//             <div className="text-center text-slate-500 mt-20">
//               <p>لم تقم بحفظ أي منتجات بعد.</p>
//             </div>
//           ) : (
//             favoriteItems.map((item) => (
//               <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex gap-4 items-center">
                
//                 {/* Image */}
//                 <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 flex items-center justify-center">
//                    <img 
//                      src={item.image ? (item.image.toString().startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`) : '/placeholder.png'} 
//                      alt={item.name} 
//                      className="max-h-full max-w-full object-contain" 
//                    />
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 text-right">
//                   <h3 className="text-white font-bold text-sm truncate">{item.name}</h3>
//                   <p className="text-emerald-400 font-bold mt-1">{item.price} ريال</p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col gap-2">
//                   <a 
//                     href={`https://wa.me/967782875877?text=I want ${item.name}`} 
//                     target="_blank"
//                     className="p-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition"
//                     title="شراء"
//                   >
//                     <ChatBubbleLeftRightIcon className="h-5 w-5" />
//                   </a>
//                   <button 
//                     onClick={() => removeItem(item.id)}
//                     className="p-2 bg-slate-800 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition"
//                     title="حذف"
//                   >
//                     <TrashIcon className="h-5 w-5" />
//                   </button>
//                 </div>

//               </div>
//             ))
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }



'use client';
import { useState, useEffect } from 'react';
import { XMarkIcon, TrashIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function FavoritesModal({ isOpen, onClose, allProducts }) {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const ADMIN_PHONE = "967782875877"; // Your Number

  // Load Favorites when Modal Opens
  useEffect(() => {
    if (isOpen) {
      const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      const items = allProducts.filter(p => savedIds.includes(p.id));
      setFavoriteItems(items);
    }
  }, [isOpen, allProducts]);

  // Remove Item
  const removeItem = (id) => {
    const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newIds = savedIds.filter(itemId => itemId !== id);
    localStorage.setItem('favorites', JSON.stringify(newIds));
    setFavoriteItems(favoriteItems.filter(item => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div className="relative w-full max-w-md bg-slate-900 h-full shadow-2xl border-l border-slate-800 flex flex-col animate-slide-in-right">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">قائمة المفضلة ❤️</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {favoriteItems.length === 0 ? (
            <div className="text-center text-slate-500 mt-20">
              <p>لم تقم بحفظ أي منتجات بعد.</p>
            </div>
          ) : (
            favoriteItems.map((item) => {
              
              // --- 1. GENERATE WHATSAPP LINK FOR THIS ITEM ---
              const message = `مرحباً، أنا مهتم بهذا العرض: *${item.name}* - السعر: ${item.price} ريال`;
              const whatsappUrl = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

              return (
                <div key={item.id} className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex gap-4 items-center">
                  
                  {/* Image */}
                  <div className="w-20 h-20 bg-white rounded-lg flex-shrink-0 flex items-center justify-center">
                     <img 
                       src={item.image ? (item.image.toString().startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`) : '/placeholder.png'} 
                       alt={item.name} 
                       className="max-h-full max-w-full object-contain" 
                     />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-right">
                    <h3 className="text-white font-bold text-sm truncate">{item.name}</h3>
                    <p className="text-emerald-400 font-bold mt-1">{item.price} ريال</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    {/* 2. USE THE NEW LINK HERE */}
                    <a 
                      href={whatsappUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition flex items-center justify-center"
                      title="شراء عبر واتساب"
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    </a>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 bg-slate-800 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                      title="حذف"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}