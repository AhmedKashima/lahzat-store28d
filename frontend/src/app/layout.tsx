// import type { Metadata } from "next";
// import { Cairo } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";

// const cairo = Cairo({
//   subsets: ["arabic", "latin"],
//   weight: ["400", "700", "900"],
// });

// export const metadata: Metadata = {
//   title: "watchStore | متجر الساعات",
//   description: "متجر ساعات فاخرة",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="ar" dir="rtl">
//       <body
//         className={`${cairo.className} bg-slate-950 selection:bg-amber-500 selection:text-black`}
//       >
//         <Toaster position="bottom-center" />
//         {children}
//       </body>
//     </html>
//   );
// }


import './globals.css'
import { Cairo, Amiri } from 'next/font/google' // Import Luxury Fonts

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo', // Modern font for UI
})

const amiri = Amiri({ 
  subsets: ['arabic'], 
  weight: ['400', '700'],
  variable: '--font-amiri', // Classic font for Headings
})

export const metadata = {
  title: 'متجر لحظات | WatchStore',
  description: 'أفضل الساعات الفاخرة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${amiri.variable} font-sans bg-slate-950`}>
        <main className="min-h-screen">
           {children}
        </main>
      </body>
    </html>
  )
}