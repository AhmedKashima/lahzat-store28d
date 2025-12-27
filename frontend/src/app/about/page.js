'use client';
import { ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      {/* Header */}
      <nav className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
           <h1 className="text-2xl font-black text-white">watch<span className="text-amber-500">Store</span></h1>
        </div>
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white">
           <span>العودة للرئيسية</span>
           <ArrowLeftIcon className="h-5 w-5" />
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
         <h1 className="text-4xl font-bold text-amber-500 mb-8 border-b border-slate-800 pb-4">من نحن</h1>
         <div className="prose prose-invert prose-lg text-slate-300 leading-loose">
            <p>
               مرحباً بكم في <strong>لحظات</strong>، وجهتكم الأولى للأناقة والفخامة.
            </p>
            <p>
               منذ تأسيسنا في عام 2025، أخذنا على عاتقنا مهمة تقديم أرقى الساعات، العطور، والاكسسوارات التي تعكس ذوقكم الرفيع. نحن لا نبيع مجرد منتجات، بل نقدم تجربة فريدة تجمع بين الأصالة والمعاصرة.
            </p>
            <p>
               فريقنا من الخبراء يختار كل قطعة بعناية فائقة لضمان أعلى معايير الجودة. نؤمن أن الأناقة ليست ترفاً، بل هي أسلوب حياة.
            </p>
            <h3 className="text-white font-bold mt-8 mb-4">رؤيتنا</h3>
            <p>أن نكون الخيار الأول لكل باحث عن التميز في عالم الموضة والاكسسوارات في اليمن.</p>
         </div>
      </main>
    </div>
  );
}
