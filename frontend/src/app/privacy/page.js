// 'use client';
// import { ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
//       {/* Header */}
//       <nav className="p-6 border-b border-slate-800 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//            <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//            <h1 className="text-2xl font-black text-white">watch<span className="text-amber-500">Store</span></h1>
//         </div>
//         <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white">
//            <span>العودة للرئيسية</span>
//            <ArrowLeftIcon className="h-5 w-5" />
//         </Link>
//       </nav>

//       <main className="max-w-4xl mx-auto px-4 py-16">
//          <h1 className="text-4xl font-bold text-amber-500 mb-8 border-b border-slate-800 pb-4">من نحن</h1>
//          <div className="prose prose-invert prose-lg text-slate-300 leading-loose">
//             <p>
//                مرحباً بكم في <strong>لحظات</strong>، وجهتكم الأولى للأناقة والفخامة.

//                فريقنا من الخبراء يختار كل قطعة بعناية فائقة لضمان أعلى معايير الجودة. نؤمن أن الأناقة ليست ترفاً، بل هي أسلوب حياة.
//             </p>
//             <h3 className="text-white font-bold mt-8 mb-4">ddddddddd</h3>
//             <p>أن نكون الخيار الأول لكل باحث عن التميز في عالم الموضة والاكسسوارات في المملكة.</p>
//          </div>
//       </main>
//     </div>
//   );
// }


'use client';
import { ShoppingBagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          سياسة الخصوصية
        </h1>

        <div className="prose prose-invert prose-lg text-slate-300 leading-loose">
          <p>
            نلتزم في <strong>متجر لحظات</strong> بحماية خصوصية عملائنا واحترام
            بياناتهم الشخصية.
          </p>

          <p>
            أي معلومات يتم مشاركتها معنا عبر الموقع أو من خلال تطبيق
            <strong> واتساب</strong> تُستخدم فقط لغرض التواصل مع العميل وتنفيذ
            الطلبات، ولا يتم بيعها أو مشاركتها مع أي طرف ثالث تحت أي ظرف.
          </p>

          <p>
            نحن نستخدم المعلومات المقدمة فقط لتحسين جودة الخدمة وضمان تجربة
            تسوق آمنة وموثوقة.
          </p>

          <p className="mt-6 font-semibold text-white">
            باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا.
          </p>
        </div>
      </main>
    </div>
  );
}
