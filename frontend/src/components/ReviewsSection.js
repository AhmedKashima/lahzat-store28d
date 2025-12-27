'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { UserCircleIcon, PlusIcon } from '@heroicons/react/24/outline';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  // Form State
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/`);
      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (!userInfo) {
        alert("يجب تسجيل الدخول لإضافة تقييم");
        return;
    }

    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.access}`,
                'Content-Type': 'application/json'
            }
        };
        await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/reviews/add/`,
            { stars: rating, comment },
            config
        );
        setShowModal(false);
        setComment('');
        setRating(5);
        fetchReviews(); // Refresh list
        alert("شكراً لتقييمك!");
    } catch (error) {
        alert("حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <div className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        <h2 className="text-4xl font-serif font-black text-white mb-4">آراء عملائنا</h2>
        <p className="text-slate-400 mb-12">نفتخر بثقتكم ونسعد بخدمتكم دائماً</p>

        {/* --- ADD BUTTON --- */}
        <button 
            onClick={() => setShowModal(true)}
            className="mb-10 inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-gold border border-gold-700 px-6 py-3 rounded-full transition"
        >
            <PlusIcon className="h-5 w-5" />
            <span>أضف تقييمك</span>
        </button>

        {/* --- REVIEWS SLIDER --- */}
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-16"
        >
            {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
                        <div className="flex justify-center gap-1 mb-4 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                                <StarSolid key={i} className={`h-5 w-5 ${i < review.stars ? 'text-amber-500' : 'text-slate-700'}`} />
                            ))}
                        </div>
                        <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.comment}"</p>
                        <div className="flex items-center justify-center gap-3 border-t border-slate-900 pt-4">
                            <UserCircleIcon className="h-10 w-10 text-slate-500" />
                            <span className="font-bold text-white">{review.user_name}</span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

        {/* --- ADD REVIEW MODAL --- */}
        {showModal && (
            <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md border border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-6">شاركنا تجربتك</h3>
                    
                    <form onSubmit={handleSubmit}>
                        {/* Star Input */}
                        <div className="flex justify-center gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className="focus:outline-none transition transform hover:scale-110"
                                >
                                    {star <= rating ? (
                                        <StarSolid className="h-8 w-8 text-amber-500" />
                                    ) : (
                                        <StarOutline className="h-8 w-8 text-slate-600" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <textarea 
                            className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl text-white mb-6 focus:border-amber-500 outline-none"
                            rows="4"
                            placeholder="اكتب تعليقك هنا..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        ></textarea>

                        <div className="flex gap-3">
                            <button type="submit" className="flex-1 btn-gold text-black font-bold py-3 rounded-xl">نشر التقييم</button>
                            <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700">إلغاء</button>
                        </div>
                    </form>
                </div>
            </div>
        )}

      </div>
    </div>
  );
}
