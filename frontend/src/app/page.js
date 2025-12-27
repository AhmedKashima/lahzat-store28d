// // 'use client'; // We use client side fetching for simplicity

// // import AuthModal from '../components/AuthModal';
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import ProductCard from '../components/ProductCard';

// // export default function Home() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isAuthOpen, setAuthOpen] = useState(false);
// //   // Fetch data from Django when the page loads
// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await axios.get('`${process.env.NEXT_PUBLIC_API_URL}`/api/products/');
// //         setProducts(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching products:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   return (
// //     <div className="min-h-screen">
// //       {/* --- HEADER / NAVBAR --- */}
// //       <nav className="bg-white shadow-sm sticky top-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between h-16 items-center">
// //             <h1 className="text-2xl font-black text-gray-900">watchStore ⌚</h1>
            
// //             {/* Placeholder for Login Button (We will build this next) */}
// //               <button 
// //                 onClick={() => setAuthOpen(true)}
// //                 className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
// //               >
// //                 تسجيل الدخول
// //               </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* --- MAIN CONTENT --- */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
// //             أحدث الساعات الفاخرة
// //           </h2>
// //           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
// //             تسوق مجموعتنا الحصرية وتواصل معنا مباشرة للشراء.
// //           </p>
// //         </div>

// //         {/* --- LOADING STATE --- */}
// //         {loading ? (
// //           <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
// //           </div>
// //         ) : (
// //           /* --- PRODUCT GRID --- */
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {products.map((product) => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>
// //         )}
        
// //         {/* Empty State Check */}
// //         {!loading && products.length === 0 && (
// //           <div className="text-center text-gray-500 mt-10">
// //             لا توجد ساعات مضافة حالياً.
// //           </div>
// //         )}

// //       </main>
// //     </div>
// //   );
// // }



// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';
// // 1. IMPORT THE MODAL HERE
// import AuthModal from '../components/AuthModal';

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // 2. ADD THIS STATE TO CONTROL THE POPUP
//   const [isAuthOpen, setAuthOpen] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('`${process.env.NEXT_PUBLIC_API_URL}`/api/products/');
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <nav className="bg-white shadow-sm sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <h1 className="text-2xl font-black text-gray-900">watchStore ⌚</h1>
            
//             {/* 3. UPDATE THE BUTTON CLICK ACTION */}
//             <button 
//               onClick={() => setAuthOpen(true)}
//               className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
//             >
//               تسجيل الدخول
//             </button>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             أحدث الساعات الفاخرة
//           </h2>
//           <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
//             تسوق مجموعتنا الحصرية وتواصل معنا مباشرة للشراء.
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && products.length === 0 && (
//           <div className="text-center text-gray-500 mt-10">
//             لا توجد ساعات مضافة حالياً.
//           </div>
//         )}

//       </main>

//       {/* 4. PLACE THE MODAL COMPONENT HERE (AT THE END) */}
//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />

//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { UserCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

// export default function Home() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAuthOpen, setAuthOpen] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/products/`
//         );
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* --- NAVBAR --- */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             {/* Login Button */}
//             <button 
//               onClick={() => setAuthOpen(true)}
//               className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50"
//             >
//               <UserCircleIcon className="h-5 w-5" />
//               <span className="text-sm font-bold">دخول الأعضاء</span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- HERO SECTION (Banner) --- */}
//       <div className="relative bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
//             فخامة <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">الوقت</span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
//             اكتشف مجموعتنا الحصرية من الساعات الفاخرة. الأناقة التي تستحقها، بأسعار تنافسية. تواصل معنا مباشرة للشراء.
//           </p>
//           <a href="#collection" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105">
//             تصفح المجموعة
//           </a>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT (Collection) --- */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
//         <div className="flex items-center justify-between mb-12 border-b border-slate-800 pb-4">
//           <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//             <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
//             أحدث الساعات
//           </h2>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && products.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد ساعات مضافة حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* --- FOOTER --- */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-black text-white mb-4">watch<span className="text-amber-500">Store</span></h2>
//           <p className="text-slate-500">جميع الحقوق محفوظة © 2025</p>
//         </div>
//       </footer>

//       {/* Auth Modal */}
//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />

//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation'; // For navigation
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth States
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null); // Holds user info if logged in

//   // 1. Check Login Status on Load
//   useEffect(() => {
//     // Check local storage for user info
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setUser(JSON.parse(userInfo));
//     }
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       // Using environment variable
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   // 2. Logout Function
//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload(); // Refresh to clear state
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* --- NAVBAR --- */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             {/* Logo */}
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             {/* --- DYNAMIC USER SECTION --- */}
//             <div className="flex items-center gap-4">
              
//               {user ? (
//                 // IF LOGGED IN: Show Name + Actions
//                 <div className="flex items-center gap-3">
                  
//                   {/* Show Admin Button ONLY if isAdmin is true */}
//                   {user.isAdmin && (
//                     <button 
//                       onClick={() => router.push('/admin')}
//                       className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-amber-500/20"
//                     >
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}

//                   {/* User Name */}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>

//                   {/* Logout Button */}
//                   <button 
//                     onClick={logoutHandler}
//                     className="text-red-400 hover:text-red-300 transition"
//                     title="تسجيل خروج"
//                   >
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 // IF LOGGED OUT: Show Login Button
//                 <button 
//                   onClick={() => setAuthOpen(true)}
//                   className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50"
//                 >
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}

//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --- HERO SECTION --- */}
//       <div className="relative bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
//             فخامة <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">الوقت</span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
//             اكتشف مجموعتنا الحصرية من الساعات الفاخرة. الأناقة التي تستحقها، بأسعار تنافسية. تواصل معنا مباشرة للشراء.
//           </p>
//           <a href="#collection" className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105">
//             تصفح المجموعة
//           </a>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
//         <div className="flex items-center justify-between mb-12 border-b border-slate-800 pb-4">
//           <h2 className="text-3xl font-bold text-white flex items-center gap-3">
//             <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
//             أحدث الساعات
//           </h2>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && products.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد ساعات مضافة حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* --- FOOTER --- */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-black text-white mb-4">watch<span className="text-amber-500">Store</span></h2>
//           <p className="text-slate-500">جميع الحقوق محفوظة © 2025</p>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />

//     </div>
//   );
// }




// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth States
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   // CATEGORY STATE
//   const [activeCategory, setActiveCategory] = useState('all');

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setUser(JSON.parse(userInfo));
//     }
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   // FILTER LOGIC
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-amber-500/20">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
//             فخامة <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">الاختيار</span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
//              ساعات، عطور، اكسسوارات، وأكثر. كل ما تحتاجه من أناقة في مكان واحد.
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
//         {/* --- CATEGORY TABS (TOGGLE BUTTONS) --- */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* --- PRODUCTS GRID --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && filteredProducts.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* FOOTER */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-black text-white mb-4">watch<span className="text-amber-500">Store</span></h2>
//           <p className="text-slate-500">جميع الحقوق محفوظة © 2025</p>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { 
//   UserCircleIcon, 
//   ShoppingBagIcon, 
//   WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon,
//   SparklesIcon 
// } from '@heroicons/react/24/outline';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth States
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   // CATEGORY STATE
//   const [activeCategory, setActiveCategory] = useState('all');

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   // --- MARKETING QUOTES (The New Feature) ---
//   const categoryQuotes = {
//     all: {
//       title: "مجموعتنا الكاملة",
//       text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة."
//     },
//     men_watches: {
//       title: "فخامة الوقت",
//       text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك. ساعات تجمع بين دقة الزمن وفخامة التصميم."
//     },
//     women_watches: {
//       title: "أناقة معصمك",
//       text: "لأن الوقت من ذهب، كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك."
//     },
//     perfumes: {
//       title: "عبير لا يُنسى",
//       text: "عطرك هو توقيعك الذي يتركه حضورك.. اختر من لحظات رائحة تسبق وصولك وتظل بعد رحيلك."
//     },
//     gifts: {
//       title: "لغة القلوب",
//       text: "لأن الهدايا لغة القلوب، اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب."
//     },
//     rings: {
//       title: "لمسة من التراث",
//       text: "الجمال يكمن في التفاصيل الصغيرة.. خواتم عقيق تمنحك هيبة لا تخطئها العين."
//     },
//     accessories: {
//       title: "التفاصيل تكتمل",
//       text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي."
//     },
//     glasses: {
//       title: "رؤية عصرية",
//       text: "احم عينيك وأبرز شخصيتك مع تشكيلة نظارات تجمع بين الحماية والأناقة."
//     }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setUser(JSON.parse(userInfo));
//     }
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   // FILTER LOGIC
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-amber-500/20">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
//             فخامة <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600">الاختيار</span>
//           </h2>
//           <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
//              ساعات، عطور، اكسسوارات، وأكثر. كل ما تحتاجه من أناقة في مكان واحد.
//           </p>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
//         {/* --- CATEGORY BUTTONS --- */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* --- MARKETING QUOTE BANNER (The New Feature) --- */}
//         <div className="mb-12 animate-fade-in text-center">
//             <div className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">
//                     {categoryQuotes[activeCategory]?.title || "تشكيلة فاخرة"}
//                 </h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">
//                     "{categoryQuotes[activeCategory]?.text}"
//                 </p>
//             </div>
//         </div>

//         {/* --- PRODUCTS GRID --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && filteredProducts.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* FOOTER */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-black text-white mb-4">watch<span className="text-amber-500">Store</span></h2>
//           <p className="text-slate-500">جميع الحقوق محفوظة © 2025</p>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { 
//   UserCircleIcon, 
//   ShoppingBagIcon, 
//   WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon,
//   SparklesIcon,
//   ChevronDownIcon
// } from '@heroicons/react/24/outline';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth States
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   // CATEGORY STATE
//   const [activeCategory, setActiveCategory] = useState('all');

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   // MARKETING QUOTES
//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك. ساعات تجمع بين دقة الزمن وفخامة التصميم." },
//     women_watches: { title: "أناقة معصمك", text: "لأن الوقت من ذهب، كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك.. اختر من لحظات رائحة تسبق وصولك وتظل بعد رحيلك." },
//     gifts: { title: "لغة القلوب", text: "لأن الهدايا لغة القلوب، اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "الجمال يكمن في التفاصيل الصغيرة.. خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك مع تشكيلة نظارات تجمع بين الحماية والأناقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setUser(JSON.parse(userInfo));
//     }
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   // FILTER LOGIC
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-amber-500/20">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --- HERO SECTION (NEW LUXURY DESIGN) --- */}
//       <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        
//         {/* Background Image with Dark Overlay */}
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        
//         {/* Content Container */}
//         <div className="relative max-w-4xl mx-auto px-4 text-center z-10 pt-10">
          
//           {/* 1. HUGE GOLD TITLE */}
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>

//           {/* 2. SUBTITLE */}
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>

//           {/* 3. GLASS BOX (THE TEXT) */}
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//                <br className="hidden md:block"/>
//                قطع لا تُشترى فقط، بل تُختار لتعكس شخصيتك وتعبر عن ذوقك.
//              </p>
             
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
             
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">
//                "لأننا نؤمن أن الهدية ليست سعراً... بل إحساس.
//                <br />
//                والأناقة ليست صدفة... بل اختيار."
//              </p>
             
//              <p className="mt-4 text-amber-500 font-bold text-lg">
//                لحظات... اختيار أنيق يدوم
//              </p>
//           </div>

//           {/* 4. BUTTON */}
//           <a 
//             href="#collection" 
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300"
//           >
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>

//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
//         {/* --- CATEGORY BUTTONS --- */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* --- DYNAMIC MARKETING QUOTE --- */}
//         <div className="mb-12 text-center transition-all duration-500">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">
//                     {categoryQuotes[activeCategory]?.title || "تشكيلة فاخرة"}
//                 </h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">
//                     "{categoryQuotes[activeCategory]?.text}"
//                 </p>
//             </div>
//         </div>

//         {/* --- PRODUCTS GRID --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && filteredProducts.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* FOOTER */}
//       <footer className="bg-slate-900 border-t border-slate-800 py-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-black text-white mb-4">watch<span className="text-amber-500">Store</span></h2>
//           <p className="text-slate-500">جميع الحقوق محفوظة © 2025</p>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//     </div>
//   );
// }



// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import { 
//   UserCircleIcon, 
//   ShoppingBagIcon, 
//   WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon,
//   SparklesIcon,
//   ChevronDownIcon,
//   PhoneIcon,
//   EnvelopeIcon,
//   MapPinIcon,
//   ChatBubbleLeftRightIcon
// } from '@heroicons/react/24/outline';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth States
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);

//   // CATEGORY STATE
//   const [activeCategory, setActiveCategory] = useState('all');

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   // MARKETING QUOTES
//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك. ساعات تجمع بين دقة الزمن وفخامة التصميم." },
//     women_watches: { title: "أناقة معصمك", text: "لأن الوقت من ذهب، كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك.. اختر من لحظات رائحة تسبق وصولك وتظل بعد رحيلك." },
//     gifts: { title: "لغة القلوب", text: "لأن الهدايا لغة القلوب، اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "الجمال يكمن في التفاصيل الصغيرة.. خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك مع تشكيلة نظارات تجمع بين الحماية والأناقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) {
//       setUser(JSON.parse(userInfo));
//     }
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition shadow-lg shadow-amber-500/20">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
//         <div className="relative max-w-4xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//                <br className="hidden md:block"/>
//                قطع لا تُشترى فقط، بل تُختار لتعكس شخصيتك وتعبر عن ذوقك.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">
//                "لأننا نؤمن أن الهدية ليست سعراً... بل إحساس.
//                <br />
//                والأناقة ليست صدفة... بل اختيار."
//              </p>
//              <p className="mt-4 text-amber-500 font-bold text-lg">
//                لحظات... اختيار أنيق يدوم
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
//         {/* CATEGORY BUTTONS */}
//         <div className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* DYNAMIC MARKETING QUOTE */}
//         <div className="mb-12 text-center transition-all duration-500">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">
//                     {categoryQuotes[activeCategory]?.title || "تشكيلة فاخرة"}
//                 </h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">
//                     "{categoryQuotes[activeCategory]?.text}"
//                 </p>
//             </div>
//         </div>

//         {/* PRODUCTS GRID */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
        
//         {!loading && filteredProducts.length === 0 && (
//           <div className="text-center py-20 bg-slate-900 rounded-3xl border border-slate-800">
//             <p className="text-slate-500 text-lg">لا توجد منتجات في هذا القسم حالياً.</p>
//           </div>
//         )}

//       </main>

//       {/* --- PRE-FOOTER CTA (New Addition) --- */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك في اختيار القطعة الأنسب لك أو لمن تحب.
//               <br />
//               لا تتردد في استشارتنا.
//             </p>
//             <a 
//               href="https://wa.me/967782875877" // Replace with Admin Number
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
//             >
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//       {/* --- SUPER FOOTER (New Addition) --- */}
//       <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
//             {/* Col 1: About */}
//             <div className="col-span-1 md:col-span-1">
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">:<span className="text-amber-500">لحظات</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">
//                 منذ 2025 ونحن نخلق مفهوماً جديداً للحظة. مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات ويمنحك شعور الفخامة والدلال.
//               </p>
//               <div className="flex gap-4">
//                  {/* Social Icons (SVGs) */}
//                  <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-900 hover:bg-blue-600 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                  </a>
//                  <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-pink-600 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//                  </a>
//               </div>
//             </div>

//             {/* Col 2: Important Links */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><a href="#" className="hover:text-amber-500 transition">من نحن</a></li>
//                   <li><a href="#" className="hover:text-amber-500 transition">الشروط والأحكام</a></li>
//                   <li><a href="#" className="hover:text-amber-500 transition">سياسة الخصوصية</a></li>
//                   <li><a href="#" className="hover:text-amber-500 transition">سياسة الاسترجاع</a></li>
//                </ul>
//             </div>

//             {/* Col 3: Contact */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+967 782 875 877 </span>
//                   </li>
                 
//                   <li className="flex items-center gap-3">
//                      <MapPinIcon className="h-5 w-5 text-amber-500" />
//                      <span>اليمن صنعاء </span>
//                   </li>
//                </ul>
//             </div>

//             {/* Col 4: Trust */}
     

//           </div>

//           {/* Bottom Bar */}
//           <div className="border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
             
//              {/* Payment Icons (Simulated CSS) */}
//              <div className="flex gap-2">
//                 <div className="bg-white px-2 py-1 rounded w-10 h-6 flex items-center justify-center"><span className="text-[8px] font-bold text-blue-800 tracking-tighter">VISA</span></div>
//                 <div className="bg-white px-2 py-1 rounded w-10 h-6 flex items-center justify-center"><span className="text-[8px] font-bold text-red-600 tracking-tighter">Master</span></div>
//                 <div className="bg-white px-2 py-1 rounded w-10 h-6 flex items-center justify-center"><span className="text-[8px] font-bold text-black tracking-tighter">Apple</span></div>
//                 <div className="bg-white px-2 py-1 rounded w-10 h-6 flex items-center justify-center"><span className="text-[8px] font-bold text-blue-500 tracking-tighter">mada</span></div>
//              </div>
//           </div>

//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//     </div>
//   );
// }

// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link'; // Import Link
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';

// // Icons
// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon
// } from '@heroicons/react/24/outline';

// // Swiper for Slider
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';


// export default function Home() {
//   const router = useRouter();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك." },
//     women_watches: { title: "أناقة معصمك", text: "كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك." },
//     gifts: { title: "لغة القلوب", text: "اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   // Logic: Separate Best Sellers from Regular List
//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
//         <div className="relative max-w-4xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">
//                "الأناقة ليست صدفة... بل اختيار."
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* --- 1. BEST SELLERS SLIDER (NEW) --- */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-2 mb-8">
//               <FireIcon className="h-8 w-8 text-amber-500" />
//               <h2 className="text-3xl font-black text-white">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="pb-12"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* --- 2. CATEGORY BUTTONS --- */}
//         <div id="collection" className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* --- 3. DYNAMIC QUOTE --- */}
//         <div className="mb-12 text-center transition-all duration-500">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">
//                     {categoryQuotes[activeCategory]?.title || "تشكيلة فاخرة"}
//                 </h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">
//                     "{categoryQuotes[activeCategory]?.text}"
//                 </p>
//             </div>
//         </div>

//         {/* --- 4. MAIN GRID --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* --- PRE-FOOTER --- */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك.
//             </p>
//             <a 
//               href="https://wa.me/967782875877" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:-translate-y-1"
//             >
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//       {/* --- FOOTER (FIXED LINKS) --- */}
//       <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
//             {/* 1. About */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">watch<span className="text-amber-500">Store</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات ويمنحك شعور الفخامة.
//               </p>
//               <div className="flex gap-4">
//                  <a href="#" className="bg-slate-900 hover:bg-blue-600 p-2 rounded-lg transition text-white">
//                     <span className="text-xs">Facebook</span>
//                  </a>
//                  <a href="#" className="bg-slate-900 hover:bg-pink-600 p-2 rounded-lg transition text-white">
//                     <span className="text-xs">Instagram</span>
//                  </a>
//               </div>
//             </div>

//             {/* 2. Links (FIXED) */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>

//             {/* 3. Contact */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+967 782 875 877</span>
//                   </li>
            
//                   <li className="flex items-center gap-3">
//                      <MapPinIcon className="h-5 w-5 text-amber-500" />
//                      <span> اليمن صنعاء</span>
//                   </li>
//                </ul>
//             </div>
//           </div>

//           <div className="border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//              <div className="flex gap-2 text-slate-500 text-xs">
//                 <span>VISA</span> | <span>MADA</span> | <span>APPLE PAY</span>
//              </div>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal'; // Import New Modal

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
  
//   // Filtering
//   const [activeCategory, setActiveCategory] = useState('all');

//   // --- NEW: Global Quick View State ---
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك." },
//     women_watches: { title: "أناقة معصمك", text: "كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك." },
//     gifts: { title: "لغة القلوب", text: "اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-amber-500">Store</span>
//               </h1>
//             </div>
//             <div className="flex items-center gap-4">
//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
//         <div className="relative max-w-4xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-2xl">لحظات</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">"الأناقة ليست صدفة... بل اختيار."</p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* --- BEST SELLERS --- */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-2 mb-8">
//               <FireIcon className="h-8 w-8 text-amber-500" />
//               <h2 className="text-3xl font-black text-white">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="pb-12"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   {/* PASS THE CLICK FUNCTION */}
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* --- CATEGORY BUTTONS --- */}
//         <div id="collection" className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* --- QUOTE --- */}
//         <div className="mb-12 text-center">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">{categoryQuotes[activeCategory]?.title}</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">"{categoryQuotes[activeCategory]?.text}"</p>
//             </div>
//         </div>

//         {/* --- MAIN GRID --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               // PASS THE CLICK FUNCTION
//               <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* --- FOOTER --- */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//       <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">watch<span className="text-amber-500">Store</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات.</p>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                      <EnvelopeIcon className="h-5 w-5 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-8 text-center">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
      
//       {/* --- GLOBAL MODAL (Sits on top of everything) --- */}
//       <QuickViewModal 
//         isOpen={!!quickViewProduct} // Open if product exists
//         onClose={() => setQuickViewProduct(null)} 
//         product={quickViewProduct} 
//       />

//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// // 1. IMPORT FAVORITES MODAL
// import FavoritesModal from '../components/FavoritesModal'; 

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon // Import Heart Icon
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
  
//   // Filtering
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Modals
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 
//   const [isFavOpen, setFavOpen] = useState(false); // 2. FAVORITES STATE

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك." },
//     women_watches: { title: "أناقة معصمك", text: "كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك." },
//     gifts: { title: "لغة القلوب", text: "اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//               <span className="text-gold">متجر لحظات</span> {/* Added text-gold class */}
//             </h1>
//             </div>
            
//             {/* LEFT SIDE BUTTONS */}
//             <div className="flex items-center gap-3">
              
//               {/* 3. NEW FAVORITES BUTTON */}
//               <button 
//                 onClick={() => setFavOpen(true)}
//                 className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-full transition border border-slate-700 relative"
//                 title="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6 text-red-500" />
//               </button>

//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <div className="relative min-h-[85vh] flex items-center justify-center bg-slate-900 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
//         <div className="relative max-w-4xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-2xl">لحظات</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">"الأناقة ليست صدفة... بل اختيار."</p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-2 mb-8">
//               <FireIcon className="h-8 w-8 text-amber-500" />
//               <h2 className="text-3xl font-black text-white">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               className="pb-12"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* CATEGORY BUTTONS */}
//         <div id="collection" className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* QUOTE */}
//         <div className="mb-12 text-center">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">{categoryQuotes[activeCategory]?.title}</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">"{categoryQuotes[activeCategory]?.text}"</p>
//             </div>
//         </div>

//         {/* MAIN GRID */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* PRE-FOOTER */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//      {/* --- FOOTER (With Social Links & Icons) --- */}
//      <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
//             {/* 1. About */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">watch<span className="text-amber-500">Store</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات ويمنحك شعور الفخامة.
//               </p>
              
//               {/* --- SOCIAL ICONS (UPDATED) --- */}
//               <div className="flex gap-4">
//                  {/* Instagram */}
//                  <a 
//                     href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="group bg-slate-800 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl transition-all duration-300"
//                     title="Instagram"
//                  >
//                     <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                     </svg>
//                  </a>

//                  {/* Facebook */}
//                  <a 
//                     href="https://www.facebook.com/share/1AG3Qk9XJR/" 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="bg-slate-800 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300"
//                     title="Facebook"
//                  >
//                     <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                     </svg>
//                  </a>
//               </div>
//             </div>

//             {/* 2. Links */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>

//             {/* 3. Contact */}
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                      <EnvelopeIcon className="h-5 w-5 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-8 text-center">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
      
//       {/* 4. INSERT FAVORITES MODAL */}
//       <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon 
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
  
//   // Filtering
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Modals
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 
//   const [isFavOpen, setFavOpen] = useState(false);

//   // --- HERO BACKGROUND SLIDER STATE ---
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
//   // High-Quality Unsplash Images representing your categories
//   const heroImages = [
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop', // Watches (Dark/Gold)
//     'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=1920&auto=format&fit=crop', // Perfume (Luxury)
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop', // Sunglasses
//     'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1920&auto=format&fit=crop'  // Jewelry/Gifts (Gold)
//   ];

//   // Auto-Change Background every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     { id: 'all', name: 'الكل' },
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك." },
//     women_watches: { title: "أناقة معصمك", text: "كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك." },
//     gifts: { title: "لغة القلوب", text: "اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
//         <div className="w-full px-6 md:px-12"> {/* CHANGED: Full Width Padding */}
//           <div className="flex justify-between h-20 items-center">
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-gold">Store</span>
//               </h1>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setFavOpen(true)}
//                 className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-full transition border border-slate-700 relative"
//                 title="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6 text-red-500" />
//               </button>

//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --- DYNAMIC HERO SECTION --- */}
//       <div className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        
//         {/* Background Slider */}
//         {heroImages.map((img, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
//               index === currentBgIndex ? 'opacity-40' : 'opacity-0'
//             }`}
//             style={{ backgroundImage: `url('${img}')` }}
//           ></div>
//         ))}
        
//         {/* Overlay for Readability */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>

//         <div className="relative max-w-5xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-gold drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">
//                "الأناقة ليست صدفة... بل اختيار."
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT (FULL WIDTH FIX) --- */}
//       <main className="w-full px-4 md:px-12 py-20"> {/* CHANGED: max-w-7xl REMOVED */}

//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-2 mb-8 px-4">
//               <FireIcon className="h-8 w-8 text-amber-500" />
//               <h2 className="text-3xl font-black text-white">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={20}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 }, // Added 4 columns for wide screens
//                 1536: { slidesPerView: 5 }, // Added 5 columns for huge screens
//               }}
//               className="pb-12 px-4"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* CATEGORY BUTTONS */}
//         <div id="collection" className="flex flex-wrap justify-center gap-3 mb-8">
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'btn-gold shadow-lg scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* QUOTE */}
//         <div className="mb-12 text-center">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">{categoryQuotes[activeCategory]?.title}</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">"{categoryQuotes[activeCategory]?.text}"</p>
//             </div>
//         </div>

//         {/* --- MAIN GRID (RESPONSIVE FULL WIDTH) --- */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6"> {/* CHANGED: Added more columns */}
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* PRE-FOOTER */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//       <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12"> {/* CHANGED: Footer Full Width */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">watch<span className="text-gold">Store</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات.</p>
//               <div className="flex gap-4">
//                  <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//                  </a>
//                  <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                  </a>
//               </div>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                      <EnvelopeIcon className="h-5 w-5 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-8 text-center">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
//       <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

//     </div>
//   );
// }


// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon 
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
  
//   // Filtering
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Modals
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 
//   const [isFavOpen, setFavOpen] = useState(false);

//   // --- HERO BACKGROUND SLIDER (7 Images for 7 Sections) ---
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
//   const heroImages = [
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop', // 1. Men Watches
//     'https://images.unsplash.com/photo-1508057198894-247b6d788d87?q=80&w=1920&auto=format&fit=crop', // 2. Women Watches
//     'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1920&auto=format&fit=crop', // 3. Rings (Agate)
//     'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=1920&auto=format&fit=crop', // 4. Perfumes
//     'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1920&auto=format&fit=crop', // 5. Accessories
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop', // 6. Gifts
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop', // 7. Glasses
//   ];

//   // Auto-Change Background every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "فخامة الوقت", text: "لأن الوقت من ذهب، ارتد ما يليق بثوانيك." },
//     women_watches: { title: "أناقة معصمك", text: "كوني سيدة اللحظة مع تشكيلة ساعات تليق بأنوثتك." },
//     perfumes: { title: "عبير لا يُنسى", text: "عطرك هو توقيعك الذي يتركه حضورك." },
//     gifts: { title: "لغة القلوب", text: "اخترنا لك قطعاً فنية تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "لمسة من التراث", text: "خواتم عقيق تمنحك هيبة لا تخطئها العين." },
//     accessories: { title: "التفاصيل تكتمل", text: "لمسات بسيطة تصنع فارقاً كبيراً في مظهرك اليومي." },
//     glasses: { title: "رؤية عصرية", text: "احم عينيك وأبرز شخصيتك." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const handleCategoryClick = (id) => {
//     setActiveCategory(id);
//     // Smooth scroll to collection
//     document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
//         <div className="w-full px-4 md:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             {/* 1. Logo */}
//             <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-2xl font-black text-white tracking-wider">
//                 watch<span className="text-gold">Store</span>
//               </h1>
//             </div>

//             {/* 2. CENTER MENU (Desktop Only) - THE NEW REQUEST */}
//             <div className="hidden xl:flex items-center gap-6">
//                 <button 
//                     onClick={() => handleCategoryClick('all')} 
//                     className={`text-sm font-bold transition hover:text-amber-500 ${activeCategory === 'all' ? 'text-amber-500' : 'text-slate-300'}`}
//                 >
//                     الرئيسية
//                 </button>
//                 {categories.map((cat) => (
//                     <button
//                         key={cat.id}
//                         onClick={() => handleCategoryClick(cat.id)}
//                         className={`text-sm font-bold transition hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500' : 'text-slate-300'}`}
//                     >
//                         {cat.name}
//                     </button>
//                 ))}
//             </div>
            
//             {/* 3. ACTIONS (Right Side) */}
//             <div className="flex items-center gap-3 flex-shrink-0">
//               <button 
//                 onClick={() => setFavOpen(true)}
//                 className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-full transition border border-slate-700 relative"
//                 title="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6 text-red-500" />
//               </button>

//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-bold transition">
//                       <WrenchScrewdriverIcon className="h-5 w-5" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-sm hidden sm:block">{user.username || user.email}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-red-400 hover:text-red-300 transition">
//                     <ArrowRightOnRectangleIcon className="h-6 w-6" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --- DYNAMIC HERO SECTION (CINEMATIC SLOW MOTION) --- */}
//       <div className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        
//         {/* Background Slider with Ken Burns Effect (Slow Zoom) */}
//         {heroImages.map((img, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
//               index === currentBgIndex ? 'opacity-50 scale-110' : 'opacity-0 scale-100'
//             }`}
//             style={{ 
//                 backgroundImage: `url('${img}')`,
//                 transitionProperty: 'opacity, transform',
//                 transitionDuration: '5s, 10s' // 5s fade, 10s zoom
//             }}
//           ></div>
//         ))}
        
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60"></div>

//         <div className="relative max-w-5xl mx-auto px-4 text-center z-10 pt-10">
//           <h1 className="text-7xl md:text-9xl font-black mb-2 tracking-tighter animate-fade-in-up">
//             <span className="text-gold drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-white font-light mb-8 tracking-wide opacity-90 animate-fade-in-up delay-100">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى لا تُنسى
//           </p>
//           <div className="bg-slate-950/60 backdrop-blur-md border border-gold/10 p-8 md:p-10 rounded-3xl shadow-2xl mb-10 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                في <span className="text-amber-500 font-bold">لحظات</span> نختار لك بعناية ساعات أنيقة، نظارات عصرية، عطور فاخرة، تحف مميزة، وإكسسوارات راقية.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-lg md:text-xl font-serif italic">
//                "الأناقة ليست صدفة... بل اختيار."
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-2 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-fade-in-up delay-300">
//             <span>اكتشف مجموعتنا الآن</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="w-full px-4 md:px-12 py-20">

//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-2 mb-8 px-4">
//               <FireIcon className="h-8 w-8 text-amber-500" />
//               <h2 className="text-3xl font-black text-white">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={20}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 2500, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//                 1536: { slidesPerView: 5 },
//               }}
//               className="pb-12 px-4"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* CATEGORY BUTTONS (Mobile & Desktop) */}
//         <div id="collection" className="flex flex-wrap justify-center gap-3 mb-8">
//           <button
//               onClick={() => setActiveCategory('all')}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === 'all' 
//                   ? 'btn-gold shadow-lg scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               الكل
//           </button>
//           {categories.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => setActiveCategory(cat.id)}
//               className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
//                 activeCategory === cat.id 
//                   ? 'btn-gold shadow-lg scale-105' 
//                   : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* QUOTE */}
//         <div className="mb-12 text-center">
//             <div key={activeCategory} className="inline-block relative p-6 bg-slate-900/50 border border-amber-500/30 rounded-2xl max-w-3xl backdrop-blur-sm animate-fade-in">
//                 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-950 px-3 text-amber-500">
//                     <SparklesIcon className="h-6 w-6" />
//                 </div>
//                 <h3 className="text-amber-500 font-bold text-lg mb-2">{categoryQuotes[activeCategory]?.title}</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed italic">"{categoryQuotes[activeCategory]?.text}"</p>
//             </div>
//         </div>

//         {/* MAIN GRID */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* PRE-FOOTER */}
//       <div className="bg-slate-900 border-t border-slate-800 py-16 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-lg mb-8 leading-relaxed">
//               فريق <span className="text-amber-500">لحظات</span> جاهز لمساعدتك.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-6 w-6" />
//               <span>تواصل معنا عبر واتساب الآن</span>
//             </a>
//         </div>
//       </div>

//       <footer className="bg-slate-950 pt-16 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//                  <h2 className="text-2xl font-black text-white">watch<span className="text-gold">Store</span></h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-6 text-sm">مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات.</p>
//               <div className="flex gap-4">
//                  <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//                  </a>
//                  <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-800 hover:bg-blue-600 p-2 rounded-lg transition text-white">
//                     <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                  </a>
//               </div>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>
//             <div>
//                <h3 className="text-white font-bold text-lg mb-6">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400 text-sm">
//                   <li className="flex items-center gap-3">
//                      <PhoneIcon className="h-5 w-5 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-3">
//                      <EnvelopeIcon className="h-5 w-5 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-8 text-center">
//              <p className="text-slate-500 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
//       <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

//     </div>
//   );
// }



// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image'; // <--- NEW IMPORT
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 

// import { 
//   UserCircleIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon 
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [activeCategory, setActiveCategory] = useState('all');
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 
//   const [isFavOpen, setFavOpen] = useState(false);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
//   const heroImages = [
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1508057198894-247b6d788d87?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب، ارتد ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتيمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   const handleCategoryClick = (id) => {
//     setActiveCategory(id);
//     document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
//         <div className="w-full px-4 md:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             {/* 1. LOGO IMAGE (Replaced Text) */}
//             <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
//               {/* Ensure logo.png is in your public folder */}
//               <div className="relative w-32 h-12 md:w-40 md:h-14">
//                 <Image 
//                   src="/logo.png" 
//                   alt="Lahazat Store Logo" 
//                   fill 
//                   className="object-contain" 
//                   priority
//                 />
//               </div>
//             </div>

//             {/* 2. MENU */}
//             <div className="hidden xl:flex items-center gap-5">
//                 <button 
//                     onClick={() => handleCategoryClick('all')} 
//                     className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${activeCategory === 'all' ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-300'}`}
//                 >
//                     الرئيسية
//                 </button>
//                 {categories.map((cat) => (
//                     <button
//                         key={cat.id}
//                         onClick={() => handleCategoryClick(cat.id)}
//                         className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-300'}`}
//                     >
//                         {cat.name}
//                     </button>
//                 ))}
//             </div>
            
//             {/* 3. ACTIONS */}
//             <div className="flex items-center gap-3 flex-shrink-0">
//               <button onClick={() => setFavOpen(true)} className="text-slate-300 hover:text-red-500 transition p-2" title="المفضلة">
//                 <HeartIcon className="h-7 w-7" />
//               </button>

//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-lg font-bold transition text-sm">
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <button onClick={logoutHandler} className="text-slate-300 hover:text-white transition">
//                     <ArrowRightOnRectangleIcon className="h-7 w-7" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//         {heroImages.map((img, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-all ease-in-out ${
//               index === currentBgIndex ? 'opacity-50 scale-110' : 'opacity-0 scale-100'
//             }`}
//             style={{ 
//                 backgroundImage: `url('${img}')`,
//                 transitionDuration: '2000ms',
//                 transitionProperty: 'opacity'
//             }}
//           >
//              <div className={`absolute inset-0 transition-transform duration-[15000ms] ease-linear ${index === currentBgIndex ? 'scale-110' : 'scale-100'}`}></div>
//           </div>
//         ))}
        
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60"></div>

//         <div className="relative max-w-5xl mx-auto px-4 text-center z-10 pt-10">
//           {/* Main Title - Matches Logo Text Concept */}
//           <h1 className="text-8xl md:text-[9rem] font-black mb-4 tracking-tighter animate-fade-in-up font-serif">
//             <span className="text-gold drop-shadow-2xl">
//               لحظات
//             </span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-slate-100 font-light mb-10 tracking-wide opacity-90 animate-fade-in-up delay-100 font-serif">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
//           </p>
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-12 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                نختار لك بعناية <span className="text-amber-400 font-serif">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span>.
//                <br />
//                قطع لا تُشترى فقط، بل تُختار لتعكس شخصيتك.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-xl font-serif italic">
//                "الأناقة ليست صدفة... بل اختيار."
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-2 hover:shadow-amber-500/20 animate-fade-in-up delay-300">
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="w-full px-4 md:px-12 py-20">
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-3 mb-10 px-4 justify-center">
//               <span className="h-px w-20 bg-slate-800"></span>
//               <h2 className="text-4xl font-serif font-black text-white text-center">الأكثر مبيعاً</h2>
//               <span className="h-px w-20 bg-slate-800"></span>
//             </div>
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={25}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//                 1536: { slidesPerView: 5 },
//               }}
//               className="pb-12 px-4"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* CATEGORY BUTTONS (Mobile) */}
//         <div id="collection" className="xl:hidden flex flex-wrap justify-center gap-3 mb-8">
//           <button onClick={() => setActiveCategory('all')} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === 'all' ? 'btn-gold' : 'bg-slate-800'}`}>الكل</button>
//           {categories.map((cat) => (
//             <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === cat.id ? 'btn-gold' : 'bg-slate-800 text-slate-400'}`}>{cat.name}</button>
//           ))}
//         </div>

//         {/* QUOTE */}
//         <div className="mb-16 text-center">
//             <div key={activeCategory} className="inline-block relative p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm animate-fade-in">
//                 <SparklesIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
//                 <h3 className="text-amber-500 font-serif font-bold text-2xl mb-3">{categoryQuotes[activeCategory]?.title}</h3>
//                 <p className="text-slate-300 text-xl font-light italic">"{categoryQuotes[activeCategory]?.text}"</p>
//             </div>
//         </div>

//         {/* GRID */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* PRE-FOOTER */}
//       <div className="bg-slate-900 border-t border-slate-800 py-24 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-xl mb-10 font-light">
//               فريق <span className="text-amber-500 font-bold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-7 w-7" />
//               <span>تواصل معنا عبر واتساب</span>
//             </a>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-20 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            
//             {/* 1. LOGO IMAGE (Footer) */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  {/* Replaced Text with Image */}
//                  <div className="relative w-40 h-16">
//                     <Image 
//                       src="/logo.png" 
//                       alt="Lahazat Store Logo" 
//                       fill 
//                       className="object-contain" 
//                     />
//                  </div>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-8 text-base font-light">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
//               </p>
//               <div className="flex gap-4">
//                  <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl transition text-white">
//                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//                  </a>
//                  <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-xl transition text-white">
//                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                  </a>
//               </div>
//             </div>
            
//             {/* Links */}
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8 font-serif">روابط مهمة</h3>
//                <ul className="space-y-5 text-slate-400">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>
            
//             {/* Contact */}
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8 font-serif">تواصل معنا</h3>
//                <ul className="space-y-5 text-slate-400">
//                   <li className="flex items-center gap-4">
//                      <PhoneIcon className="h-6 w-6 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-4">
//                      <EnvelopeIcon className="h-6 w-6 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-10 text-center">
//              <p className="text-slate-500">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
//       <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

//     </div>
//   );
// }



// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image'; // Required for the Logo
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon 
// } from '@heroicons/react/24/outline';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// export default function Home() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Auth
//   const [isAuthOpen, setAuthOpen] = useState(false);
//   const [user, setUser] = useState(null);
  
//   // Filtering
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Modals
//   const [quickViewProduct, setQuickViewProduct] = useState(null); 
//   const [isFavOpen, setFavOpen] = useState(false);

//   // --- HERO IMAGES ---
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
//   const heroImages = [
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1508057198894-247b6d788d87?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 7000);
//     return () => clearInterval(interval);
//   }, []);

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   const categoryQuotes = {
//     all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب، ارتد ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتيمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       setLoading(false);
//     }
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('userInfo');
//     setUser(null);
//     window.location.reload();
//   };

//   // --- FIXED SCROLL FUNCTION ---
//   const handleCategoryClick = (id) => {
//     setActiveCategory(id);
//     // Finds the MAIN section (works on Desktop & Mobile)
//     const section = document.getElementById('collection');
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
//         <div className="w-full px-4 md:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             {/* Logo */}
//             <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
//               <div className="relative w-32 h-12 md:w-40 md:h-14">
//                 <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
//               </div>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden xl:flex items-center gap-5">
//                 <button 
//                     onClick={() => handleCategoryClick('all')} 
//                     className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${activeCategory === 'all' ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-300'}`}
//                 >
//                     الرئيسية
//                 </button>
//                 {categories.map((cat) => (
//                     <button
//                         key={cat.id}
//                         onClick={() => handleCategoryClick(cat.id)}
//                         className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-300'}`}
//                     >
//                         {cat.name}
//                     </button>
//                 ))}
//             </div>
            
//             {/* Actions */}
//             <div className="flex items-center gap-3 flex-shrink-0">
//               <button onClick={() => setFavOpen(true)} className="text-slate-300 hover:text-red-500 transition p-2" title="المفضلة">
//                 <HeartIcon className="h-7 w-7" />
//               </button>

//               {user ? (
//                 <div className="flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-lg font-bold transition text-sm">
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <button onClick={logoutHandler} className="text-slate-300 hover:text-white transition">
//                     <ArrowRightOnRectangleIcon className="h-7 w-7" />
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50">
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span className="text-sm font-bold">دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//         {heroImages.map((img, index) => (
//           <div 
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-all ease-in-out ${
//               index === currentBgIndex ? 'opacity-50 scale-110' : 'opacity-0 scale-100'
//             }`}
//             style={{ 
//                 backgroundImage: `url('${img}')`,
//                 transitionDuration: '2000ms',
//                 transitionProperty: 'opacity'
//             }}
//           >
//              <div className={`absolute inset-0 transition-transform duration-[15000ms] ease-linear ${index === currentBgIndex ? 'scale-110' : 'scale-100'}`}></div>
//           </div>
//         ))}
        
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60"></div>

//         <div className="relative max-w-5xl mx-auto px-4 text-center z-10 pt-10">
          
//           {/* --- BRANDING FIX: LOGO IMAGE AS TITLE --- */}
//           <div className="relative w-64 h-32 md:w-96 md:h-48 mx-auto mb-6 animate-fade-in-up">
//              <Image 
//                src="/logo.png" 
//                alt="Lahazat Logo" 
//                fill 
//                className="object-contain drop-shadow-2xl brightness-125" // Brightness makes it pop
//                priority 
//              />
//           </div>
          
//           <p className="text-2xl md:text-3xl text-slate-100 font-light mb-10 tracking-wide opacity-90 animate-fade-in-up delay-100 font-serif">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
//           </p>
          
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-12 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
//              <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
//                نختار لك بعناية <span className="text-amber-400 font-serif">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span>.
//                <br />
//                قطع لا تُشترى فقط، بل تُختار لتعكس شخصيتك.
//              </p>
//              <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
//              <p className="text-amber-100/90 text-xl font-serif italic">
//                "الأناقة ليست صدفة... بل اختيار."
//              </p>
//           </div>
//           <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-2 hover:shadow-amber-500/20 animate-fade-in-up delay-300">
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       <main className="w-full px-4 md:px-12 py-20">
        
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center gap-3 mb-10 px-4 justify-center">
//               <span className="h-px w-20 bg-slate-800"></span>
//               <h2 className="text-4xl font-serif font-black text-white text-center">الأكثر مبيعاً</h2>
//               <span className="h-px w-20 bg-slate-800"></span>
//             </div>
//             <Swiper
//               modules={[Autoplay, Navigation]}
//               spaceBetween={25}
//               slidesPerView={1}
//               navigation
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               breakpoints={{
//                 640: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//                 1280: { slidesPerView: 4 },
//                 1536: { slidesPerView: 5 },
//               }}
//               className="pb-12 px-4"
//             >
//               {bestSellers.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         {/* --- SCROLL TARGET ID IS HERE (FIXED) --- */}
//         <div id="collection" className="pt-8"> 
            
//             {/* CATEGORY BUTTONS (Mobile) */}
//             <div className="xl:hidden flex flex-wrap justify-center gap-3 mb-8">
//                 <button onClick={() => setActiveCategory('all')} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === 'all' ? 'btn-gold' : 'bg-slate-800'}`}>الكل</button>
//                 {categories.map((cat) => (
//                     <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === cat.id ? 'btn-gold' : 'bg-slate-800 text-slate-400'}`}>{cat.name}</button>
//                 ))}
//             </div>

//             {/* QUOTE */}
//             <div className="mb-16 text-center">
//                 <div key={activeCategory} className="inline-block relative p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm animate-fade-in">
//                     <SparklesIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
//                     <h3 className="text-amber-500 font-serif font-bold text-2xl mb-3">{categoryQuotes[activeCategory]?.title}</h3>
//                     <p className="text-slate-300 text-xl font-light italic">"{categoryQuotes[activeCategory]?.text}"</p>
//                 </div>
//             </div>

//             {/* GRID */}
//             {loading ? (
//             <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
//             </div>
//             ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
//                 {filteredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
//                 ))}
//             </div>
//             )}
//         </div>
//       </main>

//       {/* PRE-FOOTER */}
//       <div className="bg-slate-900 border-t border-slate-800 py-24 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
//         <div className="max-w-4xl mx-auto px-4 text-center">
//             <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">هل تحتاج مساعدة في الاختيار؟</h2>
//             <p className="text-slate-400 text-xl mb-10 font-light">
//               فريق <span className="text-amber-500 font-bold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة.
//             </p>
//             <a href="https://wa.me/966500000000" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-7 w-7" />
//               <span>تواصل معنا عبر واتساب</span>
//             </a>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-20 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            
//             {/* LOGO IMAGE (Footer) */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <div className="relative w-40 h-16">
//                     <Image src="/logo.png" alt="Logo" fill className="object-contain" />
//                  </div>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-8 text-base font-light">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
//               </p>
//               <div className="flex gap-4">
//                  <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl transition text-white">
//                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//                  </a>
//                  <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-xl transition text-white">
//                     <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//                  </a>
//               </div>
//             </div>
            
//             {/* Links */}
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8 font-serif">روابط مهمة</h3>
//                <ul className="space-y-5 text-slate-400">
//                   <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
//                   <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
//                </ul>
//             </div>
            
//             {/* Contact */}
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8 font-serif">تواصل معنا</h3>
//                <ul className="space-y-5 text-slate-400">
//                   <li className="flex items-center gap-4">
//                      <PhoneIcon className="h-6 w-6 text-amber-500" />
//                      <span dir="ltr">+966 50 000 0000</span>
//                   </li>
//                   <li className="flex items-center gap-4">
//                      <EnvelopeIcon className="h-6 w-6 text-amber-500" />
//                      <span>info@watchstore.com</span>
//                   </li>
//                </ul>
//             </div>
//           </div>
//           <div className="border-t border-slate-900 py-10 text-center">
//              <p className="text-slate-500">جميع الحقوق محفوظة | 2025 لحظات</p>
//           </div>
//         </div>
//       </footer>

//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
//       <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

//     </div>
//   );
// }



'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import AuthModal from '../components/AuthModal';
import QuickViewModal from '../components/QuickViewModal';
import FavoritesModal from '../components/FavoritesModal'; 

import ReviewsSection from '../components/ReviewsSection';

import { 
  UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
  ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
  PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
  FireIcon, HeartIcon 
} from '@heroicons/react/24/outline';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Auth
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  // Filtering
  const [activeCategory, setActiveCategory] = useState('all');

  // Modals
  const [quickViewProduct, setQuickViewProduct] = useState(null); 
  const [isFavOpen, setFavOpen] = useState(false);

  // --- HERO IMAGES ---
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // const heroImages = [
  //   'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1920&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1620794341491-76be6eeb6946?q=80&w=1920&auto=format&fit=crop',
  //   'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1920&auto=format&fit=crop',
  // ];

  const heroImages = [
    'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg', //ring
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop', // watch
    'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop', //gift
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop', //glass
  ];

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'men_watches', name: 'ساعات رجالي' },
    { id: 'women_watches', name: 'ساعات نسائي' },
    { id: 'rings', name: 'الخواتم العقيق' },
    { id: 'perfumes', name: 'العطور' },
    { id: 'accessories', name: 'الاكسسوارات' },
    { id: 'gifts', name: 'تحف وهدايا' },
    { id: 'glasses', name: 'نظارات' },
  ];

  const categoryQuotes = {
    all: { title: "مجموعتنا الكاملة", text: "تصفح أرقى المقتنيات التي اخترناها لك بعناية فائقة." },
    men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب، ارتد ما يليق بمكانتك." },
    women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
    perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
    gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
    rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
    accessories: { title: "اكتيمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
    glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
  };

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) setUser(JSON.parse(userInfo));
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    window.location.reload();
  };

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const section = document.getElementById('collection');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const bestSellers = products.filter(p => p.is_bestseller === true);
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
     {/* NAVBAR */}
<nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 transition-all duration-300">
  <div className="w-full px-4 md:px-8">
    <div className="flex justify-between h-20 items-center">
      
      {/* LOGO */}
      <div
        className="flex items-center gap-2 cursor-pointer flex-shrink-0"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
        <h1 className="text-2xl font-black text-white tracking-wider font-serif">
          <span className="text-gold drop-shadow-2xl"> Lahazat Store</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden xl:flex items-center gap-5">
        <button
          onClick={() => handleCategoryClick('all')}
          className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${
            activeCategory === 'all'
              ? 'text-amber-500 border-b-2 border-amber-500 pb-1'
              : 'text-slate-300'
          }`}
        >
          الرئيسية
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`text-sm font-bold transition duration-300 tracking-wide hover:text-amber-500 ${
              activeCategory === cat.id
                ? 'text-amber-500 border-b-2 border-amber-500 pb-1'
                : 'text-slate-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => setFavOpen(true)}
          className="text-slate-300 hover:text-red-500 transition p-2"
          title="المفضلة"
        >
          <HeartIcon className="h-7 w-7" />
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            {user.isAdmin && (
              <button
                onClick={() => router.push('/admin')}
                className="hidden md:flex items-center gap-2 btn-gold px-4 py-2 rounded-lg font-bold transition text-sm"
              >
                <WrenchScrewdriverIcon className="h-4 w-4" />
                <span>لوحة التحكم</span>
              </button>
            )}

            <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-4 ml-2">
              <UserCircleIcon className="h-6 w-6" />
              <span className="font-bold text-sm hidden sm:block">
                {user.name || user.username || user.email}
              </span>
            </div>

            <button
              onClick={logoutHandler}
              className="text-slate-300 hover:text-white transition"
              title="تسجيل خروج"
            >
              <ArrowRightOnRectangleIcon className="h-7 w-7" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setAuthOpen(true)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-full border border-slate-700 transition-all hover:border-amber-500/50"
          >
            <UserCircleIcon className="h-5 w-5" />
            <span className="text-sm font-bold">دخول الأعضاء</span>
          </button>
        )}
      </div>

    </div>
  </div>
</nav>

{/* HERO SECTION (CINEMATIC FASHION STYLE) */}
<div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        
        {/* Background Slider - SLOW MOTION KEN BURNS EFFECT */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ease-in-out ${
              index === currentBgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ 
                backgroundImage: `url('${img}')`,
            }}
          >
             {/* The Movement Layer: Very Slow Zoom (25 seconds) */}
             <div 
                className={`absolute inset-0 transition-transform duration-[25000ms] ease-out ${
                    index === currentBgIndex ? 'scale-110' : 'scale-100'
                }`} 
             />
          </div>
        ))}
        
        {/* Dark Gradient Overlay (For Text Readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60 z-20"></div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto px-4 text-center z-30 pt-10">
          
          {/* Logo Title */}
          <h1 className="text-8xl md:text-[9rem] font-black mb-4 tracking-tighter animate-fade-in-up font-serif">
            <span className="text-gold drop-shadow-2xl">
              متجر لحظات 
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-100 font-light mb-10 tracking-wide opacity-90 animate-fade-in-up delay-100 font-serif">
            حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
          </p>
          
          {/* Glass Text Box */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-12 mx-auto max-w-3xl transform transition hover:scale-[1.01] duration-500 animate-fade-in-up delay-200">
             <p className="text-slate-200 text-lg md:text-xl leading-loose font-light">
               نختار لك بعناية <span className="text-amber-400 font-serif">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span>.
               <br />
               قطع لا تُشترى فقط، بل تُختار لتعكس شخصيتك.
             </p>
             <div className="my-6 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
             <p className="text-amber-100/90 text-xl font-serif italic">
               "الأناقة ليست صدفة... بل اختيار."
             </p>
          </div>

          <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-2xl transition-all transform hover:-translate-y-2 hover:shadow-amber-500/20 animate-fade-in-up delay-300">
            <span>اكتشف المجموعة</span>
            <ChevronDownIcon className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
      
      <main className="w-full px-4 md:px-12 py-20">
        
        {/* BEST SELLERS */}
        {bestSellers.length > 0 && (
          <div className="mb-24">
            
            {/* 3. RESTORED FIRE ICON & TEXT */}
            <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
              <FireIcon className="h-10 w-10 text-amber-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-serif font-black text-gold drop-shadow-2xl tracking-wide">
                الأكثر مبيعاً
              </h2>
            </div>
            
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={25}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
                1536: { slidesPerView: 5 },
              }}
              className="pb-12 px-4"
            >
              {bestSellers.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} onQuickView={(p) => setQuickViewProduct(p)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        <div id="collection" className="pt-8"> 
            
            {/* CATEGORY BUTTONS (Mobile) */}
            <div className="xl:hidden flex flex-wrap justify-center gap-3 mb-8">
                <button onClick={() => setActiveCategory('all')} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === 'all' ? 'btn-gold' : 'bg-slate-800'}`}>الكل</button>
                {categories.map((cat) => (
                    <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-2 rounded-full font-bold text-sm ${activeCategory === cat.id ? 'btn-gold' : 'bg-slate-800 text-slate-400'}`}>{cat.name}</button>
                ))}
            </div>

            {/* QUOTE */}
            <div className="mb-16 text-center">
                <div key={activeCategory} className="inline-block relative p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm animate-fade-in">
                    <SparklesIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-amber-500 font-serif font-bold text-2xl mb-3">{categoryQuotes[activeCategory]?.title}</h3>
                    <p className="text-slate-300 text-xl font-light italic">"{categoryQuotes[activeCategory]?.text}"</p>
                </div>
            </div>

            {/* GRID */}
            {loading ? (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-8">
                {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={(p) => setQuickViewProduct(p)} />
                ))}
            </div>
            )}
        </div>
      </main>

      {/* PRE-FOOTER */}
      <div className="bg-slate-900 border-t border-slate-800 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">هل تحتاج مساعدة في الاختيار؟</h2>
            <p className="text-slate-400 text-xl mb-10 font-light">
              فريق <span className="text-amber-500 font-bold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة.
            </p>
            <a href="https://wa.me/967782875877" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1">
              <ChatBubbleLeftRightIcon className="h-7 w-7" />
              <span>تواصل معنا عبر واتساب</span>
            </a>
        </div>
      </div>

{/* ... pre-footer is here ... */}
      
      {/* Add this: */}
      <ReviewsSection />

      <footer className="bg-slate-950 pt-20 border-t border-slate-900"></footer>
      
      {/* FOOTER */}
      <footer className="bg-slate-950 pt-20 border-t border-slate-900">
        <div className="w-full px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            {/* ... pre-footer is here ... */}
      

            {/* 4. RESTORED FOOTER LOGO (TEXT) */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <ShoppingBagIcon className="h-10 w-10 text-amber-500" />
                 <h2 className="text-3xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 text-base font-light">
                مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
              </p>
              <div className="flex gap-4">
                 <a href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn" target="_blank" className="bg-slate-900 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl transition text-white">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                 </a>
                 <a href="https://www.facebook.com/share/1AG3Qk9XJR/" target="_blank" className="bg-slate-800 hover:bg-blue-600 p-3 rounded-xl transition text-white">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                 </a>
              </div>
            </div>
            
            {/* Links */}
            <div>
               <h3 className="text-white font-bold text-xl mb-8 font-serif">روابط مهمة</h3>
               <ul className="space-y-5 text-slate-400">
                  <li><Link href="/about" className="hover:text-amber-500 transition">من نحن</Link></li>
                  <li><Link href="/terms" className="hover:text-amber-500 transition">الشروط والأحكام</Link></li>
                  <li><Link href="/privacy" className="hover:text-amber-500 transition">سياسة الخصوصية</Link></li>
                  <li><Link href="/refund" className="hover:text-amber-500 transition">سياسة الاسترجاع والاستبدال</Link></li>
               </ul>
            </div>
            
            {/* Contact */}
            <div>
               <h3 className="text-white font-bold text-xl mb-8 font-serif">تواصل معنا</h3>
               <ul className="space-y-5 text-slate-400">
                  <li className="flex items-center gap-4">
                     <PhoneIcon className="h-6 w-6 text-amber-500" />
                     <span dir="ltr">+967 782 875 877</span>
                  </li>
               </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 py-10 text-center">
             <p className="text-slate-500">جميع الحقوق محفوظة | 2025 لحظات</p>
          </div>
        </div>
      </footer>

      <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
      <QuickViewModal isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} product={quickViewProduct} />
      <FavoritesModal isOpen={isFavOpen} onClose={() => setFavOpen(false)} allProducts={products} />

    </div>
  );
}