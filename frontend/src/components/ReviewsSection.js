// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
// import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
// import { UserCircleIcon, PlusIcon } from '@heroicons/react/24/outline';

// // Swiper
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function ReviewsSection() {
//   const [reviews, setReviews] = useState([]);
//   const [showModal, setShowModal] = useState(false);
  
//   // Form State
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState('');

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/`);
//       setReviews(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
//     if (!userInfo) {
//         alert("يجب تسجيل الدخول لإضافة تقييم");
//         return;
//     }

//     try {
//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${userInfo.access}`,
//                 'Content-Type': 'application/json'
//             }
//         };
//         await axios.post(
//             `${process.env.NEXT_PUBLIC_API_URL}/api/reviews/add/`,
//             { stars: rating, comment },
//             config
//         );
//         setShowModal(false);
//         setComment('');
//         setRating(5);
//         fetchReviews(); // Refresh list
//         alert("شكراً لتقييمك!");
//     } catch (error) {
//         alert("حدث خطأ أثناء الإرسال");
//     }
//   };

//   return (
//     <div className="py-20 bg-slate-900 border-t border-slate-800">
//       <div className="max-w-7xl mx-auto px-4 text-center">
        
//         <h2 className="text-4xl font-serif font-black text-white mb-4">آراء عملائنا</h2>
//         <p className="text-slate-400 mb-12">نفتخر بثقتكم ونسعد بخدمتكم دائماً</p>

//         {/* --- ADD BUTTON --- */}
//         <button 
//             onClick={() => setShowModal(true)}
//             className="mb-10 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-gold border border-gold-700 px-6 py-3 rounded-full transition"
//         >
//             <PlusIcon className="h-5 w-5" />
//             <span>أضف تقييمك</span>
//         </button>

//         {/* --- REVIEWS SLIDER --- */}
//         <Swiper
//             modules={[Autoplay, Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 4000 }}
//             breakpoints={{
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//             }}
//             className="pb-16"
//         >
//             {reviews.map((review, index) => (
//                 <SwiperSlide key={index}>
//                     <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
//                         <div className="flex justify-center gap-1 mb-4 text-amber-500">
//                             {[...Array(5)].map((_, i) => (
//                                 <StarSolid key={i} className={`h-5 w-5 ${i < review.stars ? 'text-amber-500' : 'text-slate-700'}`} />
//                             ))}
//                         </div>
//                         <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.comment}"</p>
//                         <div className="flex items-center justify-center gap-3 border-t border-slate-900 pt-4">
//                             <UserCircleIcon className="h-10 w-10 text-slate-500" />
//                             <span className="font-bold text-white">{review.user_name}</span>
//                         </div>
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>

//         {/* --- ADD REVIEW MODAL --- */}
//         {showModal && (
//             <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//                 <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md border border-slate-700">
//                     <h3 className="text-2xl font-bold text-white mb-6">شاركنا تجربتك</h3>
                    
//                     <form onSubmit={handleSubmit}>
//                         {/* Star Input */}
//                         <div className="flex justify-center gap-2 mb-6">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <button
//                                     type="button"
//                                     key={star}
//                                     onClick={() => setRating(star)}
//                                     className="focus:outline-none transition transform hover:scale-110"
//                                 >
//                                     {star <= rating ? (
//                                         <StarSolid className="h-8 w-8 text-amber-500" />
//                                     ) : (
//                                         <StarOutline className="h-8 w-8 text-slate-600" />
//                                     )}
//                                 </button>
//                             ))}
//                         </div>

//                         <textarea 
//                             className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl text-white mb-6 focus:border-amber-500 outline-none"
//                             rows="4"
//                             placeholder="اكتب تعليقك هنا..."
//                             value={comment}
//                             onChange={(e) => setComment(e.target.value)}
//                             required
//                         ></textarea>

//                         <div className="flex gap-3">
//                             <button type="submit" className="flex-1 btn-gold text-black font-bold py-3 rounded-xl">نشر التقييم</button>
//                             <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700">إلغاء</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )}

//       </div>
//     </div>
//   );
// }

//deepseek
// components/ReviewsSection.js
'use client';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

export default function ReviewsSection() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the review to your backend
    console.log({ rating, review, name });
    setSubmitted(true);
    setRating(0);
    setReview('');
    setName('');
    
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">
            تقييمات العملاء
          </h2>
          <p className="text-slate-400 text-lg">شاركنا تجربتك مع متجر لحظات</p>
        </div>

        {/* Add Review Form */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">أضف تقييمك</h3>
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="inline-block p-4 bg-emerald-500/20 rounded-full mb-4">
                <svg className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-emerald-400 text-lg font-bold">شكراً لتقييمك!</p>
              <p className="text-slate-400">سيتم نشر تقييمك بعد المراجعة.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating Stars */}
              <div className="text-center">
                <p className="text-slate-300 mb-4">ما هو تقييمك لمنتجاتنا؟</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                    >
                      {star <= rating ? (
                        <StarIconSolid className="h-10 w-10 text-yellow-500" />
                      ) : (
                        <StarIcon className="h-10 w-10 text-yellow-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-slate-300 mb-2 text-right">الاسم (اختياري)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  placeholder="أدخل اسمك"
                />
              </div>

              {/* Review Textarea */}
              <div>
                <label className="block text-slate-300 mb-2 text-right">تقييمك</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold"
                  placeholder="اكتب تقييمك هنا..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={rating === 0 || !review.trim()}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  rating === 0 || !review.trim()
                    ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                    : 'bg-gold hover:bg-amber-600 text-black'
                }`}
              >
                إرسال التقييم
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}