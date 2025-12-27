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
        
        {/* Terms & Conditions */}
        <h2 className="text-3xl font-bold text-amber-500 mt-16 mb-6 border-b border-slate-800 pb-4">
          الشروط والأحكام
        </h2>

        <div className="prose prose-invert prose-lg text-slate-300 leading-loose">
          <p>
            باستخدامك لموقع <strong>لحظات</strong> أو تواصلك معنا عبر
            <strong> واتساب</strong>، فإنك توافق على الشروط التالية:
          </p>

          <ul>
            <li>جميع المنتجات المعروضة هي حسب التوفر.</li>
            <li>الأسعار والمواصفات قابلة للتحديث دون إشعار مسبق.</li>
            <li>
              يتم الاتفاق النهائي على الطلب والتفاصيل (السعر، التوفر، التوصيل)
              عبر واتساب.
            </li>
            <li>
              يحق للمتجر الاعتذار عن تنفيذ أي طلب في حال تعذّر ذلك لأي سبب.
            </li>
          </ul>

          <p className="mt-6 font-semibold text-white">
            نحرص دائمًا على تقديم أفضل تجربة ممكنة لعملائنا.
          </p>
        </div>
      </main>
    </div>
  );
}
