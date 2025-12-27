'use client';
import { ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      {/* Header */}
      <nav className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
          <h1 className="text-2xl font-black text-white">
            watch<span className="text-amber-500">Store</span>
          </h1>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white"
        >
          <span>العودة للرئيسية</span>
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-amber-500 mb-8 border-b border-slate-800 pb-4">
          سياسة الاستبدال والاسترجاع
        </h1>

        <div className="prose prose-invert prose-lg text-slate-300 leading-loose">
          <p>
            في <strong>متجر لحظات</strong>، رضا العميل هو أولويتنا الأولى.
          </p>

          <p>
            يتم الاستبدال أو الاسترجاع حسب الاتفاق المسبق عبر
            <strong> واتساب</strong>، وذلك بما يتوافق مع حالة المنتج وطبيعة الطلب.
          </p>

          <p>
            يرجى التواصل معنا مباشرة خلال مدة مناسبة من استلام الطلب للنظر في
            الطلب واتخاذ الإجراء المناسب.
          </p>
        </div>
      </main>
    </div>
  );
}
