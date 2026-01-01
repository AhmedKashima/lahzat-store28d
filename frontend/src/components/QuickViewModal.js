'use client';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid'; // For potential future use or if ratings are shown in modal
import Link from 'next/link';

export default function QuickViewModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const ADMIN_PHONE = "967782875877"; 
  const message = `مرحباً، أنا مهتم بهذا العرض: *${product.name}* - السعر: ${product.price} ريال`;
  const whatsappLink = `https://wa.me/${ADMIN_PHONE}?text=${encodeURIComponent(message)}`;

  // Fix Image URL: Ensure absolute path for local development
  const imageUrl = product.image 
    ? (product.image.startsWith('http') ? product.image : `${process.env.NEXT_PUBLIC_API_URL}${product.image}`)
    : "https://via.placeholder.com/400x400?text=No+Image";

  // Category Name Mapping
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


  // For potential future use if ratings are added back to quick view
  const renderStars = (ratingValue) => {
    return (
      <div className="flex items-center" dir="ltr">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`h-4 w-4 ${ratingValue >= index + 1 ? 'text-amber-400' : 'text-slate-600'}`}
          />
        ))}
      </div>
    );
  };


  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-slate-900 border border-slate-700 p-0 text-right shadow-2xl transition-all">
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 left-4 z-10 text-slate-400 hover:text-white bg-black/50 rounded-full p-2 transition"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                <div className="flex flex-col md:flex-row">
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 flex items-center justify-center p-0 bg-slate-800 aspect-square"> {/* Removed bg-white, p-6, added aspect-square */}
                    <img 
                      src={imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover" // Added w-full, h-full, object-cover
                    />
                  </div>

                  {/* Details Side */}
                  <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-right" dir="rtl">
                    <span className="text-amber-500 text-sm font-bold tracking-wider mb-2 uppercase px-2 py-1 rounded w-fit inline-block border border-amber-500/30">
                      {arabicCategory}
                    </span>
                    
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-3 md:mb-4">{product.name}</h2>
                    
                    {/* Price Display */}
                    <div className={`mb-6 ${product.old_price ? 'flex flex-col items-end' : 'flex items-center gap-3'}`}>
                      {product.old_price && (
                        <span className="text-base sm:text-lg text-slate-500 line-through mb-1"> {/* Adjusted font size */}
                          {product.old_price} ريال
                        </span>
                      )}
                      <span className="text-xl sm:text-2xl font-bold text-emerald-400"> {/* Adjusted font size */}
                        {product.price} ريال
                      </span>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-6 md:mb-8 border-t border-slate-800 pt-4">
                      {product.description}
                    </p>

                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 md:py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-amber-500/20"
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      <span>طلب عبر واتساب</span>
                    </a>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
