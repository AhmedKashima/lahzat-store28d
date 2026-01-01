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



// 'use client'; 

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 

// import ReviewsSection from '../components/ReviewsSection';

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
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg', //ring
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop', // watch
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop', //gift
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop', //glass
//   ];

//   useEffect(() => {
//     heroImages.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, []);
  
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
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب،ارتدي ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
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
//     const section = document.getElementById('collection');
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
  
//   const filteredProducts = activeCategory === 'all' 
//     ? products 
//     : products.filter(product => product.category === activeCategory);


//     return (
//       <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
        
//        {/* NAVBAR - Improved for Mobile */}
//   <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
//     <div className="w-full px-4 md:px-8">
//       <div className="flex justify-between h-20 items-center gap-2">
        
//         {/* LOGO */}
//         <div className="flex items-center gap-2 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
//           <ShoppingBagIcon className="h-6 w-6 md:h-8 md:h-8 text-amber-500" />
//           <h1 className="text-lg md:text-2xl font-black text-white tracking-wider font-serif">
//             <span className="text-gold uppercase">Lahazat</span>
//           </h1>
//         </div>
  
//         {/* Desktop Menu - Remains hidden on mobile */}
//         <div className="hidden xl:flex items-center gap-5">
//           {/* ... (keep your categories.map code here) */}
//         </div>
  
//         {/* Actions - Smaller icons for mobile */}
//         <div className="flex items-center gap-2 md:gap-3">
//           <button onClick={() => setFavOpen(true)} className="text-slate-300 hover:text-red-500 p-1">
//             <HeartIcon className="h-6 w-6" />
//           </button>
  
//           {user ? (
//             <div className="flex items-center gap-2">
//               {user.isAdmin && (
//                 <button onClick={() => router.push('/admin')} className="bg-amber-600 p-2 rounded-lg text-black font-bold">
//                   <WrenchScrewdriverIcon className="h-5 w-5" />
//                 </button>
//               )}
//               <button onClick={logoutHandler} className="text-slate-300">
//                 <ArrowRightOnRectangleIcon className="h-6 w-6" />
//               </button>
//             </div>
//           ) : (
//             <button onClick={() => setAuthOpen(true)} className="bg-slate-800 text-white px-3 py-1.5 rounded-full border border-slate-700 text-xs font-bold">
//               دخول
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   </nav>
  
//   {/* HERO SECTION - Fixed for Mobile */}
//   <div className="relative h-[90vh] md:h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//           {/* ... (Keep background slider code) */}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70 z-20"></div>
  
//           <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-30">
//             <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black mb-4 animate-fade-in-up font-serif">
//               <span className="text-gold drop-shadow-2xl">متجر لحظات</span>
//             </h1>
            
//             <p className="text-lg md:text-3xl text-slate-100 font-light mb-8 opacity-90 animate-fade-in-up font-serif">
//               حيث تتحوّل التفاصيل إلى ذوق
//             </p>
            
//             <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-12 rounded-3xl shadow-2xl mb-10 mx-auto max-w-2xl animate-fade-in-up">
//                <p className="text-slate-200 text-base md:text-xl leading-relaxed">
//                  نختار لك بعناية <span className="text-amber-400">ساعات أنيقة وعطور فاخرة</span>.
//                </p>
//             </div>
  
//             <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-3 px-8 md:py-4 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transition-all">
//               <span>اكتشف المجموعة</span>
//               <ChevronDownIcon className="h-5 w-5 animate-bounce" />
//             </a>
//           </div>
//         </div>
        
//       <main className="w-full px-4 md:px-12 py-20">
        
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
            
//             {/* 3. RESTORED FIRE ICON & TEXT */}
//             <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in">
//               <FireIcon className="h-10 w-10 text-amber-500 animate-pulse" />
//               <h2 className="text-4xl md:text-5xl font-serif font-black text-gold drop-shadow-2xl tracking-wide">
//                 الأكثر مبيعاً
//               </h2>
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
//             <a href="https://wa.me/967782875877" target="_blank" className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-10 rounded-full text-xl shadow-2xl hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1">
//               <ChatBubbleLeftRightIcon className="h-7 w-7" />
//               <span>تواصل معنا عبر واتساب</span>
//             </a>
//         </div>
//       </div>

// {/* ... pre-footer is here ... */}
      
//       {/* Add this: */}
//       <ReviewsSection />

//       <footer className="bg-slate-950 pt-20 border-t border-slate-900"></footer>
      
//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-20 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
//             {/* ... pre-footer is here ... */}
      

//             {/* 4. RESTORED FOOTER LOGO (TEXT) */}
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-10 w-10 text-amber-500" />
//                  <h2 className="text-3xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h2>
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
//                      <span dir="ltr">+967 782 875 877</span>
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
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal'; 
// import ReviewsSection from '../components/ReviewsSection';

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, FireIcon, HeartIcon, ChatBubbleLeftRightIcon
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
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   useEffect(() => {
//     heroImages.forEach(src => { const img = new Image(); img.src = src; });
//     const interval = setInterval(() => setCurrentBgIndex(p => (p + 1) % heroImages.length), 5000);
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
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب،ارتدي ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       setLoading(false);
//     } catch (e) { setLoading(false); }
//   };

//   const logoutHandler = () => { localStorage.removeItem('userInfo'); setUser(null); window.location.reload(); };
//   const handleCategoryClick = (id) => { setActiveCategory(id); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); };
  
//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 overflow-x-hidden">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
//         <div className="w-full px-4 md:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-xl md:text-2xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h1>
//             </div>

//             <div className="hidden xl:flex items-center gap-5">
//               {categories.map((cat) => (
//                 <button key={cat.id} onClick={() => handleCategoryClick(cat.id)} className={`text-sm font-bold transition hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-300'}`}>
//                   {cat.name}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 md:gap-4">
//               <button onClick={() => setFavOpen(true)} className="text-slate-300 hover:text-red-500"><HeartIcon className="h-7 w-7" /></button>
//               {user ? (
//                 <div className="flex items-center gap-2">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="btn-gold p-2 rounded-lg font-bold flex items-center gap-1 text-xs">
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span className="hidden sm:block">لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="hidden sm:flex items-center gap-1 text-slate-300 border-l border-slate-700 pl-3">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-xs">{user.name || user.username}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-slate-400"><ArrowRightOnRectangleIcon className="h-7 w-7" /></button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-bold">دخول الأعضاء</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO - Original Style Restored */}
//       <div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//         {heroImages.map((img, index) => (
//           <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${index === currentBgIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`} style={{ backgroundImage: `url('${img}')` }} />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60 z-20"></div>

//         <div className="relative z-30 text-center px-4 max-w-5xl">
//           <h1 className="text-7xl md:text-9xl font-black mb-4 font-serif text-gold drop-shadow-2xl">لحظات</h1>
//           <p className="text-xl md:text-3xl font-light mb-10 font-serif opacity-90">حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى</p>
          
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-12 transform transition duration-500">
//              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light">
//                نختار لك بعناية <span className="text-amber-400">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span>.
//              </p>
//           </div>

//           <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-2xl transition hover:-translate-y-2">
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>
      
//       <main className="w-full px-4 md:px-12 py-20">
        
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center justify-center gap-4 mb-12">
//               <FireIcon className="h-10 w-10 text-amber-500 animate-pulse" />
//               <h2 className="text-4xl md:text-5xl font-serif font-black text-gold drop-shadow-2xl">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper modules={[Autoplay, Navigation]} spaceBetween={25} slidesPerView={1} navigation autoplay={{ delay: 3000 }} 
//               breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}>
//               {bestSellers.map((p) => (
//                 <SwiperSlide key={p.id}><ProductCard product={p} onQuickView={setQuickViewProduct} /></SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         <div id="collection" className="pt-8"> 
//             <div className="xl:hidden flex flex-wrap justify-center gap-2 mb-8">
//                 <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full font-bold text-xs ${activeCategory === 'all' ? 'btn-gold' : 'bg-slate-800'}`}>الكل</button>
//                 {categories.map((cat) => (
//                     <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full font-bold text-xs ${activeCategory === cat.id ? 'btn-gold' : 'bg-slate-800 text-slate-400'}`}>{cat.name}</button>
//                 ))}
//             </div>

//             <div className="mb-16 text-center">
//                 <div key={activeCategory} className="inline-block p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm">
//                     <SparklesIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
//                     <h3 className="text-amber-500 font-serif font-bold text-2xl mb-3">{categoryQuotes[activeCategory]?.title}</h3>
//                     <p className="text-slate-300 text-xl font-light italic">"{categoryQuotes[activeCategory]?.text}"</p>
//                 </div>
//             </div>

//             {loading ? (
//               <div className="flex justify-center h-64 items-center"><div className="animate-spin h-12 w-12 border-t-2 border-amber-500 rounded-full"></div></div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {filteredProducts.map((p) => ( <ProductCard key={p.id} product={p} onQuickView={setQuickViewProduct} /> ))}
//               </div>
//             )}
//         </div>
//       </main>

//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-20 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-10 w-10 text-amber-500" />
//                  <h2 className="text-3xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h2>
//               </div>
//               <p className="text-slate-400 font-light mb-8">مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.</p>
//             </div>
            
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400">
//                   <li><Link href="/about" className="hover:text-amber-500">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500">سياسة الخصوصية</Link></li>
//                </ul>
//             </div>

//             <div>
//                <h3 className="text-white font-bold text-xl mb-8">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400">
//                   <li className="flex items-center gap-3"><PhoneIcon className="h-6 w-6 text-amber-500" /><span dir="ltr">+967 782 875 877</span></li>
//                </ul>
//             </div>
//           </div>

//         {/* SIGNATURE SECTION */}
//         <div className="border-t border-slate-900 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    
//              {/* Right Side: Copyright */}
//              <p className="text-slate-500 order-2 md:order-1 text-sm">
//                 جميع الحقوق محفوظة | 2025 لحظات
//              </p>

//              {/* Left Side: Vertical Programmer Signature */}
//              <div className="flex flex-col items-center gap-1 order-1 md:order-2 group">
//                 <span className="text-slate-600 text-[10px] md:text-xs font-light italic tracking-[0.2em] uppercase">
//                    Developed by
//                 </span>
//                 <a 
//                   href="https://wa.me/967774072721" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="relative flex items-center gap-2 group no-underline"
//                 >
//                    {/* Name with Gold Style */}
//                    <span className="text-gold font-serif font-black text-2xl md:text-3xl transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
//                       IBRAHIM SALEH KASHIMA
//                    </span>
                   
//                    {/* Code Icon */}
//                    <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg group-hover:border-amber-500/50 transition-all">
//                       <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                       </svg>
//                    </div>

//                    {/* Underline Effect */}
//                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
//                 </a>
//              </div>
//           </div>
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
// import ReviewsSection from '../components/ReviewsSection';

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, FireIcon, HeartIcon, ChatBubbleLeftRightIcon
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
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   useEffect(() => {
//     heroImages.forEach(src => { const img = new Image(); img.src = src; });
//     const interval = setInterval(() => setCurrentBgIndex(p => (p + 1) % heroImages.length), 5000);
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
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب،ارتدي ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       setLoading(false);
//     } catch (e) { setLoading(false); }
//   };

//   const logoutHandler = () => { localStorage.removeItem('userInfo'); setUser(null); window.location.reload(); };
//   const handleCategoryClick = (id) => { setActiveCategory(id); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); };
  
//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 overflow-x-hidden">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
//         <div className="w-full px-4 md:px-8">
//           <div className="flex justify-between h-20 items-center">
            
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-xl md:text-2xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h1>
//             </div>

//             <div className="hidden xl:flex items-center gap-5">
//               {categories.map((cat) => (
//                 <button key={cat.id} onClick={() => handleCategoryClick(cat.id)} className={`text-sm font-bold transition hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-300'}`}>
//                   {cat.name}
//                 </button>
//               ))}
//             </div>

//             <div className="flex items-center gap-2 md:gap-4">
//               <button onClick={() => setFavOpen(true)} className="text-slate-300 hover:text-red-500"><HeartIcon className="h-7 w-7" /></button>
//               {user ? (
//                 <div className="flex items-center gap-2">
//                   {user.isAdmin && (
//                     <button onClick={() => router.push('/admin')} className="btn-gold p-2 rounded-lg font-bold flex items-center gap-1 text-xs">
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span className="hidden sm:block">لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="hidden sm:flex items-center gap-1 text-slate-300 border-l border-slate-700 pl-3">
//                     <UserCircleIcon className="h-6 w-6" />
//                     <span className="font-bold text-xs">{user.name || user.username}</span>
//                   </div>
//                   <button onClick={logoutHandler} className="text-slate-400"><ArrowRightOnRectangleIcon className="h-7 w-7" /></button>
//                 </div>
//               ) : (
//                 <button onClick={() => setAuthOpen(true)} className="bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-bold">دخول الأعضاء</button>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* HERO */}
//       <div className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//         {heroImages.map((img, index) => (
//           <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${index === currentBgIndex ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`} style={{ backgroundImage: `url('${img}')` }} />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/60 z-20"></div>

//         <div className="relative z-30 text-center px-4 max-w-5xl">
//           <h1 className="text-7xl md:text-9xl font-black mb-4 font-serif text-gold drop-shadow-2xl">لحظات</h1>
//           <p className="text-xl md:text-3xl font-light mb-10 font-serif opacity-90">حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى</p>
          
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-12">
//              <p className="text-slate-200 text-lg md:text-xl leading-relaxed font-light">
//                نختار لك بعناية <span className="text-amber-400">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span>.
//              </p>
//           </div>

//           <a href="#collection" className="inline-flex items-center gap-3 btn-gold text-black font-bold py-4 px-12 rounded-full text-xl shadow-2xl transition hover:-translate-y-2">
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-6 w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>
      
//       <main className="w-full px-4 md:px-12 py-20">
        
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-24">
//             <div className="flex items-center justify-center gap-4 mb-12">
//               <FireIcon className="h-10 w-10 text-amber-500 animate-pulse" />
//               <h2 className="text-4xl md:text-5xl font-serif font-black text-gold drop-shadow-2xl">الأكثر مبيعاً</h2>
//             </div>
            
//             <Swiper modules={[Autoplay, Navigation]} spaceBetween={25} slidesPerView={1} navigation autoplay={{ delay: 3000 }} 
//               breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}>
//               {bestSellers.map((p) => (
//                 <SwiperSlide key={p.id}><ProductCard product={p} onQuickView={(prod) => setQuickViewProduct(prod)} /></SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         )}

//         <div id="collection" className="pt-8"> 
//             <div className="xl:hidden flex flex-wrap justify-center gap-2 mb-8">
//                 <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full font-bold text-xs ${activeCategory === 'all' ? 'btn-gold' : 'bg-slate-800'}`}>الكل</button>
//                 {categories.map((cat) => (
//                     <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full font-bold text-xs ${activeCategory === cat.id ? 'btn-gold' : 'bg-slate-800 text-slate-400'}`}>{cat.name}</button>
//                 ))}
//             </div>

//             <div className="mb-16 text-center">
//                 <div key={activeCategory} className="inline-block p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm">
//                     <SparklesIcon className="h-8 w-8 text-amber-500 mx-auto mb-4" />
//                     <h3 className="text-amber-500 font-serif font-bold text-2xl mb-3">{categoryQuotes[activeCategory]?.title}</h3>
//                     <p className="text-slate-300 text-xl font-light italic">"{categoryQuotes[activeCategory]?.text}"</p>
//                 </div>
//             </div>

//             {loading ? (
//               <div className="flex justify-center h-64 items-center"><div className="animate-spin h-12 w-12 border-t-2 border-amber-500 rounded-full"></div></div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                   {filteredProducts.map((p) => ( <ProductCard key={p.id} product={p} onQuickView={(prod) => setQuickViewProduct(prod)} /> ))}
//               </div>
//             )}
//         </div>
//       </main>

//       <ReviewsSection />

//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-20 border-t border-slate-900">
//         <div className="w-full px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-right">
//             <div>
//               <div className="flex items-center gap-2 mb-6">
//                  <ShoppingBagIcon className="h-10 w-10 text-amber-500" />
//                  <h2 className="text-3xl font-black text-white font-serif"><span className="text-gold">Lahazat Store</span></h2>
//               </div>
//               <p className="text-slate-400 font-light mb-8">مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.</p>
//             </div>
            
//             <div>
//                <h3 className="text-white font-bold text-xl mb-8">روابط مهمة</h3>
//                <ul className="space-y-4 text-slate-400">
//                   <li><Link href="/about" className="hover:text-amber-500">من نحن</Link></li>
//                   <li><Link href="/terms" className="hover:text-amber-500">الشروط والأحكام</Link></li>
//                   <li><Link href="/privacy" className="hover:text-amber-500">سياسة الخصوصية</Link></li>
//                </ul>
//             </div>

//             <div>
//                <h3 className="text-white font-bold text-xl mb-8">تواصل معنا</h3>
//                <ul className="space-y-4 text-slate-400">
//                   <li className="flex items-center gap-3 justify-end">
//                     <span dir="ltr">+967 782 875 877</span>
//                     <PhoneIcon className="h-6 w-6 text-amber-500" />
//                   </li>
//                </ul>
//             </div>
//           </div>

//           {/* SIGNATURE SECTION */}
//           <div className="border-t border-slate-900 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
//              <p className="text-slate-500 order-2 md:order-1 text-sm">جميع الحقوق محفوظة | 2025 لحظات</p>
//              <div className="flex flex-col items-center gap-1 order-1 md:order-2 group">
//                 <span className="text-slate-600 text-[10px] uppercase tracking-[0.2em] italic font-light">Developed by</span>
//                 <a href="https://wa.me/967782875877" target="_blank" className="relative flex items-center gap-2 group">
//                    <span className="text-gold font-serif font-black text-2xl md:text-3xl transition group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">IBRAHIM SALEH KASHIMA</span>
//                    <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg group-hover:border-amber-500">
//                      <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                      </svg>
//                    </div>
//                 </a>
//              </div>
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
// import ReviewsSection from '../components/ReviewsSection';

// import { 
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon, 
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, FireIcon, HeartIcon, ChatBubbleLeftRightIcon,
//   Bars3Icon, XMarkIcon
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
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const heroImages = [
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   useEffect(() => {
//     heroImages.forEach(src => { const img = new Image(); img.src = src; });
//     const interval = setInterval(() => setCurrentBgIndex(p => (p + 1) % heroImages.length), 5000);
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
//     men_watches: { title: "هيبة الحضور", text: "لأن الوقت من ذهب،ارتدي ما يليق بمكانتك." },
//     women_watches: { title: "أيقونة الأنوثة", text: "كوني سيدة اللحظة مع تشكيلة تليق بجمالك." },
//     perfumes: { title: "أثر لا يغيب", text: "عطرك هو توقيعك الذي يتركه حضورك في المكان." },
//     gifts: { title: "لغة المشاعر", text: "هدايا فاخرة تحكي قصة اهتمامك لمن تحب." },
//     rings: { title: "عراقة التاريخ", text: "خواتم عقيق نادرة تمنحك تميزاً لا يخطئه أحد." },
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   useEffect(() => {
//     const userInfo = localStorage.getItem('userInfo');
//     if (userInfo) setUser(JSON.parse(userInfo));
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       console.log('Fetched products:', data); // Debug line
//       setProducts(data);
//       setLoading(false);
//     } catch (e) { 
//       console.error('Error fetching products:', e);
//       setLoading(false); 
//     }
//   };

//   const logoutHandler = () => { localStorage.removeItem('userInfo'); setUser(null); window.location.reload(); };
//   const handleCategoryClick = (id) => { 
//     setActiveCategory(id); 
//     setMobileMenuOpen(false);
//     document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); 
//   };
  
//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 overflow-x-hidden">
      
//       {/* NAVBAR */}
//       <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="flex justify-between items-center h-20">
            
//             {/* Logo */}
//             <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
//               <ShoppingBagIcon className="h-8 w-8 text-amber-500" />
//               <h1 className="text-xl md:text-2xl font-black text-white font-serif">
//                 <span className="text-gold">Lahazat Store</span>
//               </h1>
//             </div>

//             {/* Desktop Categories */}
//             <div className="hidden lg:flex items-center gap-6">
//               {categories.map((cat) => (
//                 <button 
//                   key={cat.id} 
//                   onClick={() => handleCategoryClick(cat.id)} 
//                   className={`text-sm font-bold transition hover:text-amber-500 ${activeCategory === cat.id ? 'text-amber-500 border-b-2 border-amber-500' : 'text-slate-300'}`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>

//             {/* Right Side - User & Actions */}
//             <div className="flex items-center gap-3 md:gap-4">
//               <button 
//                 onClick={() => setFavOpen(true)} 
//                 className="text-slate-300 hover:text-red-500 p-2"
//                 aria-label="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6" />
//               </button>
              
//               {/* Mobile Menu Toggle */}
//               <button 
//                 className="lg:hidden p-2"
//                 onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                 aria-label="القائمة"
//               >
//                 {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
//               </button>

//               {user ? (
//                 <div className="hidden md:flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button 
//                       onClick={() => router.push('/admin')} 
//                       className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition"
//                     >
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-2 text-slate-300 border-l border-slate-700 pl-3">
//                     <UserCircleIcon className="h-5 w-5" />
//                     <span className="font-bold text-sm">{user.name || user.username}</span>
//                   </div>
//                   <button 
//                     onClick={logoutHandler} 
//                     className="text-slate-400 hover:text-white p-2"
//                     aria-label="تسجيل الخروج"
//                   >
//                     <ArrowRightOnRectangleIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               ) : (
//                 <button 
//                   onClick={() => setAuthOpen(true)} 
//                   className="hidden md:block bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-full text-sm font-bold transition"
//                 >
//                   دخول الأعضاء
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-4">
//               <div className="flex flex-col gap-2">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.id}
//                     onClick={() => handleCategoryClick(cat.id)}
//                     className={`text-right py-3 px-4 text-sm font-bold transition ${activeCategory === cat.id ? 'text-amber-500 bg-slate-800/50' : 'text-slate-300 hover:text-amber-500'}`}
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
//                 {!user && (
//                   <button
//                     onClick={() => {
//                       setAuthOpen(true);
//                       setMobileMenuOpen(false);
//                     }}
//                     className="bg-amber-500 text-black py-3 px-4 rounded-lg text-sm font-bold mt-2"
//                   >
//                     دخول الأعضاء
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <div className="relative h-[90vh] md:h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
//         {heroImages.map((img, index) => (
//           <div 
//             key={index} 
//             className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ${index === currentBgIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} 
//             style={{ backgroundImage: `url('${img}')` }} 
//           />
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30 z-10"></div>

//         <div className="relative z-20 text-center px-4 md:px-8 max-w-6xl mx-auto">
//           <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-4 font-serif text-amber-400 drop-shadow-2xl">
//             لحظات
//           </h1>
//           <p className="text-lg md:text-2xl lg:text-3xl font-light mb-8 font-serif opacity-90 max-w-3xl mx-auto">
//             حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
//           </p>
          
//           <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl mb-8 max-w-4xl mx-auto">
//             <p className="text-slate-200 text-base md:text-lg lg:text-xl leading-relaxed font-light">
//               نختار لك بعناية <span className="text-amber-400 font-bold">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span> لتكون اختيارك الأمثل.
//             </p>
//           </div>

//           <a 
//             href="#collection" 
//             className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 md:py-4 md:px-12 rounded-full text-lg md:text-xl shadow-2xl transition-all hover:-translate-y-1"
//           >
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-5 w-5 md:h-6 md:w-6 animate-bounce" />
//           </a>
//         </div>
//       </div>
      
//       {/* MAIN CONTENT */}
//       <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        
//         {/* BEST SELLERS */}
//         {bestSellers.length > 0 && (
//           <div className="mb-16 md:mb-24">
//             <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12">
//               <FireIcon className="h-8 w-8 md:h-10 md:w-10 text-amber-500 animate-pulse" />
//               <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-black text-amber-400">
//                 الأكثر مبيعاً
//               </h2>
//             </div>
            
//             <div className="relative">
//               <Swiper 
//                 modules={[Autoplay, Navigation]} 
//                 spaceBetween={16}
//                 slidesPerView={1}
//                 navigation
//                 autoplay={{ delay: 3000 }}
//                 breakpoints={{
//                   640: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                   1024: { slidesPerView: 4 }
//                 }}
//                 className="pb-12"
//               >
//                 {bestSellers.map((p) => (
//                   <SwiperSlide key={p._id || p.id}>
//                     <div className="px-2">
//                       <ProductCard 
//                         product={p} 
//                         onQuickView={(prod) => setQuickViewProduct(prod)} 
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         )}

//         {/* CATEGORIES & PRODUCTS */}
//         <div id="collection" className="pt-8">
//           {/* Mobile Category Filter */}
//           <div className="lg:hidden mb-8">
//             <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
//               <button 
//                 onClick={() => setActiveCategory('all')} 
//                 className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-sm ${activeCategory === 'all' ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'}`}
//               >
//                 الكل
//               </button>
//               {categories.map((cat) => (
//                 <button 
//                   key={cat.id}
//                   onClick={() => setActiveCategory(cat.id)}
//                   className={`flex-shrink-0 px-4 py-2 rounded-full font-bold text-sm ${activeCategory === cat.id ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-400'}`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Category Quote */}
//           <div className="mb-12 md:mb-16 text-center">
//             <div 
//               key={activeCategory} 
//               className="inline-block p-6 md:p-8 bg-slate-900/50 border border-amber-900/30 rounded-2xl max-w-4xl backdrop-blur-sm animate-fadeIn"
//             >
//               <SparklesIcon className="h-6 w-6 md:h-8 md:w-8 text-amber-500 mx-auto mb-3 md:mb-4" />
//               <h3 className="text-amber-400 font-serif font-bold text-xl md:text-2xl mb-2 md:mb-3">
//                 {categoryQuotes[activeCategory]?.title}
//               </h3>
//               <p className="text-slate-300 text-base md:text-lg lg:text-xl font-light italic">
//                 "{categoryQuotes[activeCategory]?.text}"
//               </p>
//             </div>
//           </div>

//           {/* Products Grid */}
//           {loading ? (
//             <div className="flex justify-center h-64 items-center">
//               <div className="animate-spin h-12 w-12 border-t-2 border-amber-500 rounded-full"></div>
//             </div>
//           ) : filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
//               {filteredProducts.map((p) => (
//                 <ProductCard 
//                   key={p._id || p.id} 
//                   product={p} 
//                   onQuickView={(prod) => setQuickViewProduct(prod)} 
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <p className="text-slate-400 text-lg">لا توجد منتجات في هذه الفئة حالياً</p>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* REVIEWS SECTION */}
//       <ReviewsSection />

//       {/* FOOTER */}
//       <footer className="bg-slate-950 pt-12 md:pt-20 border-t border-slate-900">
//         <div className="max-w-7xl mx-auto px-4 md:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12 md:mb-16 text-right">
//             <div>
//               <div className="flex items-center gap-2 mb-4 md:mb-6">
//                 <ShoppingBagIcon className="h-8 w-8 md:h-10 md:w-10 text-amber-500" />
//                 <h2 className="text-2xl md:text-3xl font-black text-white font-serif">
//                   <span className="text-amber-400">Lahazat Store</span>
//                 </h2>
//               </div>
//               <p className="text-slate-400 font-light text-sm md:text-base">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
//               </p>
//             </div>
            
//             <div>
//               <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-8">روابط مهمة</h3>
//               <ul className="space-y-3 md:space-y-4 text-slate-400">
//                 <li><Link href="/about" className="hover:text-amber-500 text-sm md:text-base">من نحن</Link></li>
//                 <li><Link href="/terms" className="hover:text-amber-500 text-sm md:text-base">الشروط والأحكام</Link></li>
//                 <li><Link href="/privacy" className="hover:text-amber-500 text-sm md:text-base">سياسة الخصوصية</Link></li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-8">تواصل معنا</h3>
//               <ul className="space-y-3 md:space-y-4 text-slate-400">
//                 <li className="flex items-center gap-3 justify-end">
//                   <span dir="ltr" className="text-sm md:text-base">+967 782 875 877</span>
//                   <PhoneIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
//                 </li>
//                 <li className="flex items-center gap-3 justify-end">
//                   <span className="text-sm md:text-base">اليمن - صنعاء</span>
//                   <ChatBubbleLeftRightIcon className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* SIGNATURE SECTION */}
//           <div className="border-t border-slate-900 py-6 md:py-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
//             <p className="text-slate-500 order-2 md:order-1 text-xs md:text-sm">
//               جميع الحقوق محفوظة | 2025 لحظات
//             </p>
//             <div className="flex flex-col items-center gap-1 order-1 md:order-2 group">
//               <span className="text-slate-600 text-[10px] md:text-xs uppercase tracking-[0.2em] italic font-light">
//                 Developed by
//               </span>
//               <a 
//                 href="https://wa.me/967782875877" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="relative flex items-center gap-2 group"
//               >
//                 <span className="text-amber-400 font-serif font-bold text-lg md:text-xl lg:text-2xl transition group-hover:drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">
//                   IBRAHIM SALEH KASHIMA
//                 </span>
//                 <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg group-hover:border-amber-500">
//                   <svg className="h-3 w-3 md:h-4 md:w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                   </svg>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* MODALS */}
//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal 
//         isOpen={!!quickViewProduct} 
//         onClose={() => setQuickViewProduct(null)} 
//         product={quickViewProduct} 
//       />
//       <FavoritesModal 
//         isOpen={isFavOpen} 
//         onClose={() => setFavOpen(false)} 
//         allProducts={products} 
//       />
//     </div>
//   );
// }





// 'use client';
// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal';
// import ReviewsSection from '../components/ReviewsSection';
// import {
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon,
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon, Bars3Icon, XMarkIcon
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
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const heroImages = [
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'خواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'إكسسوارات' },
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
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   // Preload images and setup background slideshow
//   useEffect(() => {
//     heroImages.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

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
//     setMobileMenuOpen(false);
//     const section = document.getElementById('collection');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all'
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
//       {/* NAVBAR - Professional & Elegant */}
//       <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div 
//               className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               <div className="relative">
//                 <ShoppingBagIcon className="h-9 w-9 text-amber-500 transition-transform group-hover:rotate-12" />
//                 <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//               </div>
//               <h1 className="text-2xl font-black text-white tracking-tight">
//                 <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
//                   لحظات
//                 </span>
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               <button
//                 onClick={() => handleCategoryClick('all')}
//                 className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
//                   activeCategory === 'all'
//                     ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
//                     : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
//                 }`}
//               >
//                 الرئيسية
//               </button>
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => handleCategoryClick(cat.id)}
//                   className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
//                     activeCategory === cat.id
//                       ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
//                       : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-3">
//               {/* Favorites */}
//               <button
//                 onClick={() => setFavOpen(true)}
//                 className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300"
//                 title="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6" />
//               </button>

//               {/* Mobile Menu Toggle */}
//               <button
//                 onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2.5 text-slate-300 hover:text-amber-500 hover:bg-white/5 rounded-lg transition-all"
//               >
//                 {isMobileMenuOpen ? (
//                   <XMarkIcon className="h-6 w-6" />
//                 ) : (
//                   <Bars3Icon className="h-6 w-6" />
//                 )}
//               </button>

//               {/* User Area */}
//               {user ? (
//                 <div className="hidden lg:flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button
//                       onClick={() => router.push('/admin')}
//                       className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
//                     >
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-3 text-slate-300 border-r border-white/10 pr-3">
//                     <UserCircleIcon className="h-5 w-5" />
//                     <span className="font-medium text-sm">
//                       {user.name || user.username}
//                     </span>
//                   </div>
//                   <button
//                     onClick={logoutHandler}
//                     className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
//                     title="تسجيل خروج"
//                   >
//                     <ArrowRightOnRectangleIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setAuthOpen(true)}
//                   className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
//                 >
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span>دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-4">
//               <div className="flex flex-col gap-1 px-2">
//                 <button
//                   onClick={() => handleCategoryClick('all')}
//                   className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
//                     activeCategory === 'all'
//                       ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
//                       : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
//                   }`}
//                 >
//                   الرئيسية
//                 </button>
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.id}
//                     onClick={() => handleCategoryClick(cat.id)}
//                     className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
//                       activeCategory === cat.id
//                         ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
//                         : 'text-slate-300 hover:text-amber-500 hover:bg-white/5'
//                     }`}
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
//                 {!user && (
//                   <button
//                     onClick={() => {
//                       setAuthOpen(true);
//                       setMobileMenuOpen(false);
//                     }}
//                     className="mt-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:from-amber-600 hover:to-amber-700 transition-all"
//                   >
//                     دخول الأعضاء
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* HERO SECTION - Cinematic Luxury */}
//       <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Slideshow */}
//         {heroImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
//               index === currentBgIndex
//                 ? 'opacity-100 scale-105'
//                 : 'opacity-0 scale-100'
//             }`}
//             style={{ backgroundImage: `url('${img}')` }}
//           />
//         ))}
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 z-10"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950 z-20"></div>

//         {/* Hero Content */}
//         <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Main Title */}
//           <div className="mb-8">
//             <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tight">
//               <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
//                 لحظات
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
//               حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
//             </p>
//           </div>

//           {/* Elegant Text Box */}
//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 mb-10 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/20">
//             <div className="relative">
//               <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-amber-500/50"></div>
//               <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-amber-500/50"></div>
//               <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-amber-500/50"></div>
//               <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-amber-500/50"></div>
              
//               <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
//                 نختار لك بعناية <span className="text-amber-400 font-medium">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span> 
//                 لتكون اختيارك الأمثل في كل مناسبة.
//               </p>
              
//               <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-6"></div>
              
//               <p className="text-amber-300/90 text-lg font-serif italic">
//                 "الأناقة ليست صدفة... بل اختيار مدروس"
//               </p>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <a
//             href="#collection"
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-amber-500/25 hover:from-amber-600 hover:to-amber-700 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-5 w-5 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         {/* BEST SELLERS SECTION */}
//         {bestSellers.length > 0 && (
//           <div className="mb-20">
//             {/* Section Header */}
//             <div className="flex items-center justify-center gap-4 mb-12">
//               <div className="relative">
//                 <FireIcon className="h-10 w-10 text-amber-500" />
//                 <div className="absolute inset-0 bg-amber-500/20 blur-lg animate-pulse"></div>
//               </div>
//               <div className="text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                   الأكثر مبيعاً
//                 </h2>
//                 <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-transparent mx-auto"></div>
//               </div>
//             </div>

//             {/* Products Slider */}
//             <div className="relative">
//               <Swiper
//                 modules={[Autoplay, Navigation]}
//                 spaceBetween={24}
//                 slidesPerView={1}
//                 navigation={{
//                   prevEl: '.swiper-button-prev',
//                   nextEl: '.swiper-button-next',
//                 }}
//                 autoplay={{ delay: 4000, disableOnInteraction: false }}
//                 breakpoints={{
//                   640: { slidesPerView: 2 },
//                   768: { slidesPerView: 3 },
//                   1024: { slidesPerView: 4 },
//                   1280: { slidesPerView: 5 },
//                 }}
//                 className="pb-12"
//               >
//                 {bestSellers.map((product) => (
//                   <SwiperSlide key={product.id}>
//                     <div className="px-2">
//                       <ProductCard 
//                         product={product} 
//                         onQuickView={(p) => setQuickViewProduct(p)} 
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
              
//               {/* Custom Navigation Buttons */}
//               <div className="swiper-button-prev !left-0 !text-amber-500 !w-10 !h-10 after:!text-lg"></div>
//               <div className="swiper-button-next !right-0 !text-amber-500 !w-10 !h-10 after:!text-lg"></div>
//             </div>
//           </div>
//         )}

//         {/* CATEGORIES & PRODUCTS SECTION */}
//         <div id="collection" className="pt-8">
//           {/* Mobile Categories Filter */}
//           <div className="lg:hidden mb-8">
//             <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide px-1">
//               <button
//                 onClick={() => setActiveCategory('all')}
//                 className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                   activeCategory === 'all'
//                     ? 'bg-amber-500 text-white shadow-lg'
//                     : 'bg-white/5 text-slate-300 hover:text-amber-500'
//                 }`}
//               >
//                 الكل
//               </button>
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => setActiveCategory(cat.id)}
//                   className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
//                     activeCategory === cat.id
//                       ? 'bg-amber-500 text-white shadow-lg'
//                       : 'bg-white/5 text-slate-300 hover:text-amber-500'
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Category Quote */}
//           <div className="mb-12 text-center">
//             <div className="inline-block relative p-8 md:p-10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl">
//               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                 <div className="bg-slate-950 p-2 rounded-full">
//                   <SparklesIcon className="h-6 w-6 text-amber-500" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-amber-400 mb-3">
//                 {categoryQuotes[activeCategory]?.title}
//               </h3>
//               <p className="text-slate-300 text-lg leading-relaxed">
//                 "{categoryQuotes[activeCategory]?.text}"
//               </p>
//             </div>
//           </div>

//           {/* Products Grid */}
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <div className="relative">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
//                 <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500/30" style={{ animationDirection: 'reverse' }}></div>
//               </div>
//             </div>
//           ) : filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredProducts.map((product) => (
//                 <ProductCard 
//                   key={product.id} 
//                   product={product} 
//                   onQuickView={(p) => setQuickViewProduct(p)} 
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <div className="inline-block p-8 bg-white/5 rounded-2xl">
//                 <p className="text-slate-400 text-lg mb-2">لا توجد منتجات في هذه الفئة حالياً</p>
//                 <p className="text-slate-500 text-sm">سيتم إضافة منتجات جديدة قريباً</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* PRE-FOOTER CTA */}
//       <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920')] bg-cover bg-center opacity-5"></div>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             هل تحتاج مساعدة في الاختيار؟
//           </h2>
//           <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
//             فريق <span className="text-amber-500 font-semibold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة وتقديم الاستشارات المجانية.
//           </p>
//           <a
//             href="https://wa.me/967782875877"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-emerald-600/25 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <ChatBubbleLeftRightIcon className="h-6 w-6" />
//             <span>تواصل معنا عبر واتساب</span>
//           </a>
//         </div>
//       </div>

//       {/* REVIEWS SECTION */}
//       <ReviewsSection />

//       {/* FOOTER */}
//       <footer className="bg-gradient-to-b from-slate-950 to-black pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//             {/* Brand Column */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="relative">
//                   <ShoppingBagIcon className="h-10 w-10 text-amber-500" />
//                   <div className="absolute inset-0 bg-amber-500/20 blur-md"></div>
//                 </div>
//                 <h2 className="text-2xl font-bold text-white">
//                   <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
//                     لحظات
//                   </span>
//                 </h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-8">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
//               </p>
//               <div className="flex gap-3">
//                 <a
//                   href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-white/5 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.facebook.com/share/1AG3Qk9XJR/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Links Column */}
//             <div>
//               <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
//                 روابط مهمة
//               </h3>
//               <ul className="space-y-4">
//                 <li>
//                   <Link href="/about" className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>من نحن</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/terms" className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>الشروط والأحكام</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacy" className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>سياسة الخصوصية</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/refund" className="text-slate-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>سياسة الاسترجاع والاستبدال</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div>
//               <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
//                 تواصل معنا
//               </h3>
//               <ul className="space-y-5">
//                 <li className="flex items-center gap-4 text-slate-400 hover:text-amber-500 transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <PhoneIcon className="h-5 w-5" />
//                   </div>
//                   <span dir="ltr" className="font-medium">+967 782 875 877</span>
//                 </li>
//                 <li className="flex items-center gap-4 text-slate-400 hover:text-amber-500 transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <MapPinIcon className="h-5 w-5" />
//                   </div>
//                   <span>اليمن - صنعاء</span>
//                 </li>
//                 <li className="flex items-center gap-4 text-slate-400 hover:text-amber-500 transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <EnvelopeIcon className="h-5 w-5" />
//                   </div>
//                   <span>info@lahazat-store.com</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* SIGNATURE SECTION - Elegant & Professional */}
//           <div className="border-t border-white/10 pt-10">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//               {/* Copyright */}
//               <div className="order-2 md:order-1">
//                 <p className="text-slate-500 text-sm">
//                   جميع الحقوق محفوظة © 2025 لحظات
//                 </p>
//               </div>

//               {/* Developer Signature - Professional & Elegant */}
//               <div className="order-1 md:order-2">
//                 <div className="flex flex-col items-center gap-1 group">
//                   <span className="text-slate-600 text-xs font-light tracking-[0.3em] uppercase">
//                     Developed by
//                   </span>
//                   <a
//                     href="https://wa.me/967774072721"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="relative flex items-center gap-3 no-underline transition-all duration-500 group-hover:scale-105"
//                   >
//                     {/* Name with Elegant Gradient */}
//                     <span className="text-lg font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
//                       IBRAHIM SALEH KASHIMA
//                     </span>
                    
//                     {/* Elegant Code Icon */}
//                     <div className="relative p-2 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-lg group-hover:border-amber-500/50 transition-all duration-300">
//                       <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                       </svg>
//                       {/* Glow Effect */}
//                       <div className="absolute inset-0 bg-amber-500/10 blur-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//                     </div>

//                     {/* Underline Effect */}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500 group-hover:w-full"></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* MODALS */}
//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal
//         isOpen={!!quickViewProduct}
//         onClose={() => setQuickViewProduct(null)}
//         product={quickViewProduct}
//       />
//       <FavoritesModal
//         isOpen={isFavOpen}
//         onClose={() => setFavOpen(false)}
//         allProducts={products}
//       />
//     </div>
//   );
// }

// this is okay 

// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ProductCard from '../components/ProductCard';
// import AuthModal from '../components/AuthModal';
// import QuickViewModal from '../components/QuickViewModal';
// import FavoritesModal from '../components/FavoritesModal';
// import ReviewsSection from '../components/ReviewsSection';
// import {
//   UserCircleIcon, ShoppingBagIcon, WrenchScrewdriverIcon,
//   ArrowRightOnRectangleIcon, SparklesIcon, ChevronDownIcon,
//   PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon,
//   FireIcon, HeartIcon, Bars3Icon, XMarkIcon,
//   ChevronLeftIcon, ChevronRightIcon
// } from '@heroicons/react/24/outline';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

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
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const heroImages = [
//     'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
//     'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
//     'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
//   ];

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'خواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'إكسسوارات' },
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
//     accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
//     glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
//   };

//   // Get products count for each category
//   const getCategoryCount = (categoryId) => {
//     return products.filter(p => p.category === categoryId).length;
//   };

//   // Preload images and setup background slideshow
//   useEffect(() => {
//     heroImages.forEach((src) => {
//       const img = new Image();
//       img.src = src;
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

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
//     setMobileMenuOpen(false);
//     const section = document.getElementById('collection');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   // Get products for each category
//   const bestSellers = products.filter(p => p.is_bestseller === true);
//   const filteredProducts = activeCategory === 'all'
//     ? products
//     : products.filter(product => product.category === activeCategory);

//   // Get products by category for horizontal sections
//   const productsByCategory = categories.map(cat => ({
//     ...cat,
//     products: products.filter(p => p.category === cat.id),
//     count: products.filter(p => p.category === cat.id).length
//   }));

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
//       {/* NAVBAR - Professional & Elegant */}
//       <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div 
//               className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
//               onClick={() => window.scrollTo(0, 0)}
//             >
//               <div className="relative">
//                 <ShoppingBagIcon className="h-9 w-9 text-amber-500 transition-transform group-hover:rotate-12" />
//                 <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//               </div>
//               <h1 className="text-2xl font-black text-white tracking-tight">
//                 <span className="text-gold">
//                   لحظات
//                 </span>
//               </h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-1">
//               <button
//                 onClick={() => handleCategoryClick('all')}
//                 className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
//                   activeCategory === 'all'
//                     ? 'bg-amber-500/10 text-gold border border-amber-500/20'
//                     : 'text-slate-300 hover:text-gold hover:bg-white/5'
//                 }`}
//               >
//                 الرئيسية
//               </button>
//               {categories.map((cat) => (
//                 <button
//                   key={cat.id}
//                   onClick={() => handleCategoryClick(cat.id)}
//                   className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
//                     activeCategory === cat.id
//                       ? 'bg-amber-500/10 text-gold border border-amber-500/20'
//                       : 'text-slate-300 hover:text-gold hover:bg-white/5'
//                   }`}
//                 >
//                   {cat.name}
//                 </button>
//               ))}
//             </div>

//             {/* Right Actions */}
//             <div className="flex items-center gap-3">
//               {/* Favorites */}
//               <button
//                 onClick={() => setFavOpen(true)}
//                 className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300"
//                 title="المفضلة"
//               >
//                 <HeartIcon className="h-6 w-6" />
//               </button>

//               {/* Mobile Menu Toggle */}
//               <button
//                 onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//                 className="lg:hidden p-2.5 text-slate-300 hover:text-gold hover:bg-white/5 rounded-lg transition-all"
//               >
//                 {isMobileMenuOpen ? (
//                   <XMarkIcon className="h-6 w-6" />
//                 ) : (
//                   <Bars3Icon className="h-6 w-6" />
//                 )}
//               </button>

//               {/* User Area - Desktop */}
//               {user ? (
//                 <div className="hidden lg:flex items-center gap-3">
//                   {user.isAdmin && (
//                     <button
//                       onClick={() => router.push('/admin')}
//                       className="flex items-center gap-2 bg-gold hover:bg-amber-600 text-black px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
//                     >
//                       <WrenchScrewdriverIcon className="h-4 w-4" />
//                       <span>لوحة التحكم</span>
//                     </button>
//                   )}
//                   <div className="flex items-center gap-3 text-slate-300 border-r border-white/10 pr-3">
//                     <UserCircleIcon className="h-5 w-5" />
//                     <span className="font-medium text-sm">
//                       {user.name || user.username}
//                     </span>
//                   </div>
//                   <button
//                     onClick={logoutHandler}
//                     className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
//                     title="تسجيل خروج"
//                   >
//                     <ArrowRightOnRectangleIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setAuthOpen(true)}
//                   className="hidden lg:flex items-center gap-2 bg-gold hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
//                 >
//                   <UserCircleIcon className="h-5 w-5" />
//                   <span>دخول الأعضاء</span>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-4">
//               <div className="flex flex-col gap-1 px-2">
//                 <button
//                   onClick={() => handleCategoryClick('all')}
//                   className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
//                     activeCategory === 'all'
//                       ? 'bg-amber-500/10 text-gold border border-amber-500/20'
//                       : 'text-slate-300 hover:text-gold hover:bg-white/5'
//                   }`}
//                 >
//                   الرئيسية
//                 </button>
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.id}
//                     onClick={() => handleCategoryClick(cat.id)}
//                     className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
//                       activeCategory === cat.id
//                         ? 'bg-amber-500/10 text-gold border border-amber-500/20'
//                         : 'text-slate-300 hover:text-gold hover:bg-white/5'
//                     }`}
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
                
//                 {/* Mobile User Actions */}
//                 {user ? (
//                   <>
//                     {user.isAdmin && (
//                       <button
//                         onClick={() => {
//                           router.push('/admin');
//                           setMobileMenuOpen(false);
//                         }}
//                         className="mt-2 flex items-center gap-2 bg-gold text-black py-3 px-4 rounded-lg text-sm font-medium justify-center"
//                       >
//                         <WrenchScrewdriverIcon className="h-4 w-4" />
//                         <span>لوحة التحكم</span>
//                       </button>
//                     )}
//                     <button
//                       onClick={() => {
//                         logoutHandler();
//                         setMobileMenuOpen(false);
//                       }}
//                       className="flex items-center gap-2 text-slate-300 py-3 px-4 rounded-lg text-sm font-medium hover:text-red-500 hover:bg-red-500/10 justify-center"
//                     >
//                       <ArrowRightOnRectangleIcon className="h-4 w-4" />
//                       <span>تسجيل الخروج</span>
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     onClick={() => {
//                       setAuthOpen(true);
//                       setMobileMenuOpen(false);
//                     }}
//                     className="mt-2 flex items-center gap-2 bg-gold text-black py-3 px-4 rounded-lg text-sm font-medium justify-center"
//                   >
//                     <UserCircleIcon className="h-5 w-5" />
//                     <span>دخول الأعضاء</span>
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* HERO SECTION - Cinematic Luxury */}
//       <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Slideshow */}
//         {heroImages.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
//               index === currentBgIndex
//                 ? 'opacity-100 scale-105'
//                 : 'opacity-0 scale-100'
//             }`}
//             style={{ backgroundImage: `url('${img}')` }}
//           />
//         ))}
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 z-10"></div>
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950 z-20"></div>

//         {/* Hero Content */}
//         <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           {/* Main Title */}
//           <div className="mb-8">
//             <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tight">
//               <span className="text-gold">
//                 لحظات
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
//               حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
//             </p>
//           </div>

//           {/* Elegant Text Box */}
//           <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 mb-10 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/20">
//             <div className="relative">
//               <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/50"></div>
//               <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/50"></div>
//               <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/50"></div>
//               <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/50"></div>
              
//               <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
//                 نختار لك بعناية <span className="text-gold font-medium">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span> 
//                 لتكون اختيارك الأمثل في كل مناسبة.
//               </p>
              
//               <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6"></div>
              
//               <p className="text-gold/90 text-lg font-serif italic">
//                 "الأناقة ليست صدفة... بل اختيار مدروس"
//               </p>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <a
//             href="#collection"
//             className="inline-flex items-center gap-3 bg-gold hover:bg-amber-600 text-black font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <span>اكتشف المجموعة</span>
//             <ChevronDownIcon className="h-5 w-5 animate-bounce" />
//           </a>
//         </div>
//       </div>

//       {/* MAIN CONTENT */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
//         {/* BEST SELLERS SECTION - Horizontal Slider */}
//         {bestSellers.length > 0 && (
//           <div className="mb-20">
//             {/* Section Header */}
//             <div className="flex items-center justify-center gap-4 mb-10">
//               <div className="relative">
//                 <FireIcon className="h-10 w-10 text-gold" />
//                 <div className="absolute inset-0 bg-gold/20 blur-lg animate-pulse"></div>
//               </div>
//               <div className="text-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
//                   الأكثر مبيعاً
//                 </h2>
//                 <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto"></div>
//               </div>
//             </div>

//             {/* Best Sellers Slider */}
//             <div className="relative group">
//               <Swiper
//                 modules={[Navigation, Pagination]}
//                 spaceBetween={20}
//                 slidesPerView={2}
//                 navigation={{
//                   prevEl: '.best-seller-prev',
//                   nextEl: '.best-seller-next',
//                 }}
//                 pagination={{
//                   clickable: true,
//                   el: '.best-seller-pagination',
//                 }}
//                 breakpoints={{
//                   640: { slidesPerView: 3 },
//                   768: { slidesPerView: 3 },
//                   1024: { slidesPerView: 4 },
//                   1280: { slidesPerView: 5 },
//                 }}
//                 className="pb-12"
//               >
//                 {bestSellers.map((product) => (
//                   <SwiperSlide key={product.id}>
//                     <div className="px-2">
//                       <ProductCard 
//                         product={product} 
//                         onQuickView={(p) => setQuickViewProduct(p)} 
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
              
//               {/* Custom Navigation Buttons */}
//               <button className="best-seller-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
//                 <ChevronLeftIcon className="h-6 w-6" />
//               </button>
//               <button className="best-seller-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
//                 <ChevronRightIcon className="h-6 w-6" />
//               </button>
              
//               {/* Pagination Dots */}
//               <div className="best-seller-pagination flex justify-center gap-2 mt-6"></div>
//             </div>
//           </div>
//         )}

//         {/* CATEGORY SECTIONS - Each as Horizontal Slider */}
//         {productsByCategory.map((category) => {
//           if (category.count === 0) return null;
          
//           return (
//             <div key={category.id} className="mb-16 last:mb-0">
//               {/* Category Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="h-8 w-1 bg-gold rounded-full"></div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-gold">
//                     {category.name} 
//                     <span className="text-slate-400 text-lg font-normal mr-3">
//                       ({category.count} منتج)
//                     </span>
//                   </h3>
//                 </div>
//                 <button
//                   onClick={() => handleCategoryClick(category.id)}
//                   className="text-gold hover:text-amber-600 text-sm font-medium flex items-center gap-1 transition-colors"
//                 >
//                   <span>عرض الكل</span>
//                   <ChevronLeftIcon className="h-4 w-4" />
//                 </button>
//               </div>

//               {/* Category Products Slider */}
//               <div className="relative group">
//                 <Swiper
//                   modules={[Navigation, Pagination]}
//                   spaceBetween={20}
//                   slidesPerView={2}
//                   navigation={{
//                     prevEl: `.${category.id}-prev`,
//                     nextEl: `.${category.id}-next`,
//                   }}
//                   pagination={{
//                     clickable: true,
//                     el: `.${category.id}-pagination`,
//                   }}
//                   breakpoints={{
//                     640: { slidesPerView: 3 },
//                     768: { slidesPerView: 3 },
//                     1024: { slidesPerView: 4 },
//                     1280: { slidesPerView: 5 },
//                   }}
//                   className="pb-12"
//                 >
//                   {category.products.map((product) => (
//                     <SwiperSlide key={product.id}>
//                       <div className="px-2">
//                         <ProductCard 
//                           product={product} 
//                           onQuickView={(p) => setQuickViewProduct(p)} 
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
                
//                 {/* Custom Navigation Buttons */}
//                 <button className={`${category.id}-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0`}>
//                   <ChevronLeftIcon className="h-6 w-6" />
//                 </button>
//                 <button className={`${category.id}-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}>
//                   <ChevronRightIcon className="h-6 w-6" />
//                 </button>
                
//                 {/* Pagination Dots */}
//                 <div className={`${category.id}-pagination flex justify-center gap-2 mt-6`}></div>
//               </div>
//             </div>
//           );
//         })}

//         {/* ALL PRODUCTS SECTION - Only when category selected */}
//         {activeCategory !== 'all' && filteredProducts.length > 0 && (
//           <div id="collection" className="pt-8">
//             {/* Category Quote */}
//             <div className="mb-12 text-center">
//               <div className="inline-block relative p-8 md:p-10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl max-w-3xl">
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                   <div className="bg-slate-950 p-2 rounded-full">
//                     <SparklesIcon className="h-6 w-6 text-gold" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gold mb-3">
//                   {categoryQuotes[activeCategory]?.title}
//                 </h3>
//                 <p className="text-slate-300 text-lg leading-relaxed">
//                   "{categoryQuotes[activeCategory]?.text}"
//                 </p>
//               </div>
//             </div>

//             {/* All Products Grid */}
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="relative">
//                   <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold"></div>
//                   <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold/30" style={{ animationDirection: 'reverse' }}></div>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {filteredProducts.map((product) => (
//                   <ProductCard 
//                     key={product.id} 
//                     product={product} 
//                     onQuickView={(p) => setQuickViewProduct(p)} 
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </main>

//       {/* PRE-FOOTER CTA */}
//       <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920')] bg-cover bg-center opacity-5"></div>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
//             هل تحتاج مساعدة في الاختيار؟
//           </h2>
//           <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
//             فريق <span className="text-gold font-semibold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة وتقديم الاستشارات المجانية.
//           </p>
//           <a
//             href="https://wa.me/967782875877"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1"
//           >
//             <ChatBubbleLeftRightIcon className="h-6 w-6" />
//             <span>تواصل معنا عبر واتساب</span>
//           </a>
//         </div>
//       </div>

//       {/* REVIEWS SECTION */}
//       <ReviewsSection />

//       {/* FOOTER */}
//       <footer className="bg-gradient-to-b from-slate-950 to-black pt-20 pb-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//             {/* Brand Column */}
//             <div>
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="relative">
//                   <ShoppingBagIcon className="h-10 w-10 text-gold" />
//                   <div className="absolute inset-0 bg-gold/20 blur-md"></div>
//                 </div>
//                 <h2 className="text-2xl font-bold text-white">
//                   <span className="text-gold">
//                     لحظات
//                   </span>
//                 </h2>
//               </div>
//               <p className="text-slate-400 leading-relaxed mb-8">
//                 مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
//               </p>
//               <div className="flex gap-3">
//                 <a
//                   href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-white/5 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://www.facebook.com/share/1AG3Qk9XJR/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
//                     <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Links Column */}
//             <div>
//               <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
//                 روابط مهمة
//               </h3>
//               <ul className="space-y-4">
//                 <li>
//                   <Link href="/about" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>من نحن</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/terms" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>الشروط والأحكام</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/privacy" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>سياسة الخصوصية</span>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/refund" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
//                     <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                     <span>سياسة الاسترجاع والاستبدال</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Column */}
//             <div>
//               <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
//                 تواصل معنا
//               </h3>
//               <ul className="space-y-5">
//                 <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <PhoneIcon className="h-5 w-5" />
//                   </div>
//                   <span dir="ltr" className="font-medium">+967 782 875 877</span>
//                 </li>
//                 <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <MapPinIcon className="h-5 w-5" />
//                   </div>
//                   <span>اليمن - صنعاء</span>
//                 </li>
//                 {/* <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
//                   <div className="p-2 bg-white/5 rounded-lg">
//                     <EnvelopeIcon className="h-5 w-5" />
//                   </div>
//                   <span>info@lahazat-store.com</span>
//                 </li> */}
//               </ul>
//             </div>
//           </div>

//           {/* SIGNATURE SECTION - Elegant & Professional */}
//           <div className="border-t border-white/10 pt-10">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//               {/* Copyright */}
//               <div className="order-2 md:order-1">
//                 <p className="text-slate-500 text-sm">
//                   جميع الحقوق محفوظة © 2025 لحظات
//                 </p>
//               </div>

//               {/* Developer Signature - Professional & Elegant */}
//               <div className="order-1 md:order-2">
//                 <div className="flex flex-col items-center gap-1 group">
//                   <span className="text-slate-600 text-xs font-light tracking-[0.3em] uppercase">
//                     Developed by
//                   </span>
//                   <a
//                     href="https://wa.me/967774072721"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="relative flex items-center gap-3 no-underline transition-all duration-500 group-hover:scale-105"
//                   >
//                     {/* Name with Gold Color */}
//                     <span className="text-lg font-bold text-gold">
//                       IBRAHIM SALEH KASHIMA
//                     </span>
                    
//                     {/* Elegant Code Icon */}
//                     <div className="relative p-2 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 rounded-lg group-hover:border-gold/50 transition-all duration-300">
//                       <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                       </svg>
//                       {/* Glow Effect */}
//                       <div className="absolute inset-0 bg-gold/10 blur-md scale-0 group-hover:scale-100 transition-transform duration-300"></div>
//                     </div>

//                     {/* Underline Effect */}
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-500 group-hover:w-full"></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* MODALS */}
//       <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
//       <QuickViewModal
//         isOpen={!!quickViewProduct}
//         onClose={() => setQuickViewProduct(null)}
//         product={quickViewProduct}
//       />
//       <FavoritesModal
//         isOpen={isFavOpen}
//         onClose={() => setFavOpen(false)}
//         allProducts={products}
//       />
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
  FireIcon, HeartIcon, Bars3Icon, XMarkIcon,
  ChevronLeftIcon, ChevronRightIcon, StarIcon
} from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isFavOpen, setFavOpen] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroImages = [
    'https://res.cloudinary.com/dyfyuesjo/image/upload/v1766863168/photo_5942536907487120473_y_glkpc9.jpg',
    'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1920&auto=format&fit=crop',
  ];

  const categories = [
    { id: 'men_watches', name: 'ساعات رجالي' },
    { id: 'women_watches', name: 'ساعات نسائي' },
    { id: 'rings', name: 'خواتم العقيق' },
    { id: 'perfumes', name: 'العطور' },
    { id: 'accessories', name: 'إكسسوارات' },
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
    accessories: { title: "اكتمال الأناقة", text: "التفاصيل الصغيرة هي التي تصنع الفارق الكبير." },
    glasses: { title: "نظرة الثقة", text: "واجه العالم برؤية عصرية وأناقة مطلقة." }
  };

  // Sample reviews data (you can replace with actual data from backend)
  const sampleReviews = [
    { id: 1, name: 'محمد أحمد', rating: 5, comment: 'منتج رائع وجودة عالية، شكراً لكم', date: '٢٠٢٤-٠١-١٥' },
    { id: 2, name: 'سارة علي', rating: 4, comment: 'التوصيل سريع والمنتج كما في الصور', date: '٢٠٢٤-٠١-١٠' },
    { id: 3, name: 'عبدالله كامل', rating: 5, comment: 'أفضل متجر للهدايا الفاخرة', date: '٢٠٢٤-٠١-٠٥' },
    { id: 4, name: 'فاطمة محمد', rating: 5, comment: 'خدمة عملاء ممتازة، أنصح الجميع', date: '٢٠٢٤-٠١-٠١' },
    { id: 5, name: 'خالد سعيد', rating: 4, comment: 'جودة المنتجات تستحق السعر', date: '٢٠٢٣-١٢-٢٥' },
    { id: 6, name: 'نورة حسن', rating: 5, comment: 'هدية مميزة نالت إعجاب الجميع', date: '٢٠٢٣-١٢-٢٠' },
  ];

  // Preload images and setup background slideshow
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
    setMobileMenuOpen(false);
    const section = document.getElementById('collection');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get products for each category
  const bestSellers = products.filter(p => p.is_bestseller === true);
  const productsByCategory = categories.map(cat => ({
    ...cat,
    products: products.filter(p => p.category === cat.id),
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* NAVBAR - Professional & Elegant */}
      <nav className="bg-white/5 backdrop-blur-xl border-b border-white/10 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="relative">
                <ShoppingBagIcon className="h-9 w-9 text-amber-500 transition-transform group-hover:rotate-12" />
                <div className="absolute inset-0 bg-amber-500/20 blur-md rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                <span className="text-gold">
                  لحظات
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => handleCategoryClick('all')}
                className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-amber-500/10 text-gold border border-amber-500/20'
                    : 'text-slate-300 hover:text-gold hover:bg-white/5'
                }`}
              >
                الرئيسية
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-amber-500/10 text-gold border border-amber-500/20'
                      : 'text-slate-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Favorites */}
              <button
                onClick={() => setFavOpen(true)}
                className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                title="المفضلة"
              >
                <HeartIcon className="h-6 w-6" />
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-slate-300 hover:text-gold hover:bg-white/5 rounded-lg transition-all"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>

              {/* User Area - Desktop */}
              {user ? (
                <div className="hidden lg:flex items-center gap-3">
                  {user.isAdmin && (
                    <button
                      onClick={() => router.push('/admin')}
                      className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-red-500/25"
                    >
                      <WrenchScrewdriverIcon className="h-4 w-4" />
                      <span>لوحة التحكم</span>
                    </button>
                  )}
                  <div className="flex items-center gap-3 text-slate-300 border-r border-white/10 pr-3">
                    <UserCircleIcon className="h-5 w-5" />
                    <span className="font-medium text-sm">
                      {user.name || user.username}
                    </span>
                  </div>
                  <button
                    onClick={logoutHandler}
                    className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                    title="تسجيل خروج"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setAuthOpen(true)}
                  className="hidden lg:flex items-center gap-2 bg-gold hover:bg-amber-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                >
                  <UserCircleIcon className="h-5 w-5" />
                  <span>دخول الأعضاء</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 py-4">
              <div className="flex flex-col gap-1 px-2">
                <button
                  onClick={() => handleCategoryClick('all')}
                  className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-amber-500/10 text-gold border border-amber-500/20'
                      : 'text-slate-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  الرئيسية
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`text-right py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? 'bg-amber-500/10 text-gold border border-amber-500/20'
                        : 'text-slate-300 hover:text-gold hover:bg-white/5'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
                
                {/* Mobile User Actions */}
                {user ? (
                  <>
                    {user.isAdmin && (
                      <button
                        onClick={() => {
                          router.push('/admin');
                          setMobileMenuOpen(false);
                        }}
                        className="mt-2 flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg text-sm font-medium justify-center"
                      >
                        <WrenchScrewdriverIcon className="h-4 w-4" />
                        <span>لوحة التحكم</span>
                      </button>
                    )}
                    <button
                      onClick={() => {
                        logoutHandler();
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-slate-300 py-3 px-4 rounded-lg text-sm font-medium hover:text-red-500 hover:bg-red-500/10 justify-center"
                    >
                      <ArrowRightOnRectangleIcon className="h-4 w-4" />
                      <span>تسجيل الخروج</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setAuthOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="mt-2 flex items-center gap-2 bg-gold text-black py-3 px-4 rounded-lg text-sm font-medium justify-center"
                  >
                    <UserCircleIcon className="h-5 w-5" />
                    <span>دخول الأعضاء</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO SECTION - Cinematic Luxury */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Slideshow */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-out ${
              index === currentBgIndex
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/50 to-slate-950 z-20"></div>

        {/* Hero Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 tracking-tight">
              <span className="text-gold">
                لحظات
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              حيث تتحوّل التفاصيل إلى ذوق... والهدايا إلى ذكرى
            </p>
          </div>

          {/* Elegant Text Box */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 mb-10 max-w-3xl mx-auto transform transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/20">
            <div className="relative">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/50"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/50"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/50"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/50"></div>
              
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                نختار لك بعناية <span className="text-gold font-medium">ساعات أنيقة، عطور فاخرة، وتحف نادرة</span> 
                لتكون اختيارك الأمثل في كل مناسبة.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-6"></div>
              
              <p className="text-gold/90 text-lg font-serif italic">
                "الأناقة ليست صدفة... بل اختيار مدروس"
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#collection"
            className="inline-flex items-center gap-3 bg-gold hover:bg-amber-600 text-black font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>اكتشف المجموعة</span>
            <ChevronDownIcon className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* BEST SELLERS SECTION - Horizontal Slider */}
        {bestSellers.length > 0 && (
          <div className="mb-20">
            {/* Section Header */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="relative">
                <FireIcon className="h-10 w-10 text-amber-500" />
                <div className="absolute inset-0 bg-amber-500/20 blur-lg animate-pulse"></div>
              </div>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  الأكثر مبيعاً
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto"></div>
              </div>
            </div>

            {/* Best Sellers Slider */}
            <div className="relative group">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{
                  prevEl: '.best-seller-prev',
                  nextEl: '.best-seller-next',
                }}
                pagination={{
                  clickable: true,
                  el: '.best-seller-pagination',
                }}
                breakpoints={{
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                }}
                className="pb-12"
              >
                {bestSellers.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="px-2">
                      <ProductCard 
                        product={product} 
                        onQuickView={(p) => setQuickViewProduct(p)} 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <button className="best-seller-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button className="best-seller-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                <ChevronRightIcon className="h-6 w-6" />
              </button>
              
              {/* Pagination Dots */}
              <div className="best-seller-pagination flex justify-center gap-2 mt-6"></div>
            </div>
          </div>
        )}

        {/* CATEGORY SECTIONS - Each as Horizontal Slider */}
        {productsByCategory.map((category) => {
          if (category.products.length === 0) return null;
          
          return (
            <div key={category.id} className="mb-16 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-1 bg-gold rounded-full"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gold">
                    {category.name}
                  </h3>
                </div>
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="text-gold hover:text-amber-600 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <span>عرض الكل</span>
                  <ChevronLeftIcon className="h-4 w-4" />
                </button>
              </div>

              {/* Category Products Slider */}
              <div className="relative group">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={2}
                  navigation={{
                    prevEl: `.${category.id}-prev`,
                    nextEl: `.${category.id}-next`,
                  }}
                  pagination={{
                    clickable: true,
                    el: `.${category.id}-pagination`,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                  }}
                  className="pb-12"
                >
                  {category.products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="px-2">
                        <ProductCard 
                          product={product} 
                          onQuickView={(p) => setQuickViewProduct(p)} 
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom Navigation Buttons */}
                <button className={`${category.id}-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0`}>
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button className={`${category.id}-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0`}>
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
                
                {/* Pagination Dots */}
                <div className={`${category.id}-pagination flex justify-center gap-2 mt-6`}></div>
              </div>
            </div>
          );
        })}
      </main>

      {/* REVIEWS SECTION - Horizontal Slider */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="relative">
              <StarIcon className="h-10 w-10 text-gold" />
              <div className="absolute inset-0 bg-gold/20 blur-lg animate-pulse"></div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gold mb-2">
                تقييمات العملاء
              </h2>
              <p className="text-slate-400">اضف تقييمك</p>
              <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto mt-3"></div>
            </div>
          </div>

          {/* Reviews Slider */}
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.reviews-prev',
                nextEl: '.reviews-next',
              }}
              pagination={{
                clickable: true,
                el: '.reviews-pagination',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-12"
            >
              {sampleReviews.map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-gold/20 transition-all duration-300 h-full">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Review Comment */}
                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                      "{review.comment}"
                    </p>
                    
                    {/* Reviewer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="font-bold text-white">{review.name}</p>
                        <p className="text-slate-500 text-sm">{review.date}</p>
                      </div>
                      <div className="text-4xl text-gold opacity-50">"</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <button className="reviews-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button className="reviews-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-gold p-3 rounded-full shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
              <ChevronRightIcon className="h-6 w-6" />
            </button>
            
            {/* Pagination Dots */}
            <div className="reviews-pagination flex justify-center gap-2 mt-8"></div>
          </div>
        </div>
      </div>

      {/* PRE-FOOTER CTA */}
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1920')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
            هل تحتاج مساعدة في الاختيار؟
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            فريق <span className="text-gold font-semibold">لحظات</span> جاهز لمساعدتك في تنسيق هديتك القادمة وتقديم الاستشارات المجانية.
          </p>
          <a
            href="https://wa.me/967782875877"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-slate-950 to-black pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <ShoppingBagIcon className="h-10 w-10 text-gold" />
                  <div className="absolute inset-0 bg-gold/20 blur-md"></div>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  <span className="text-gold">
                    لحظات
                  </span>
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                مفهوم يتحدث بلغة محلية ويتبنى أناقة الساعات. نقدم لك الفخامة في كل تفصيل.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/lahsatk_store?igsh=cno0ajd2dm84MHpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1AG3Qk9XJR/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
                روابط مهمة
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>من نحن</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>الشروط والأحكام</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>سياسة الخصوصية</span>
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="text-slate-400 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span>سياسة الاسترجاع والاستبدال</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-white font-bold text-xl mb-8 pb-3 border-b border-white/10">
                تواصل معنا
              </h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <span dir="ltr" className="font-medium">+967 782 875 877</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <span>اليمن - صنعاء</span>
                </li>
                <li className="flex items-center gap-4 text-slate-400 hover:text-gold transition-colors duration-300">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <span>info@lahazat-store.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* SIGNATURE SECTION - Updated to your requested style */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Copyright */}
              <div className="order-2 md:order-1">
                <p className="text-slate-500 text-sm">
                  جميع الحقوق محفوظة © 2025 لحظات
                </p>
              </div>

              {/* Programmer Signature - Your requested style */}
              <div className="flex flex-col items-center gap-1 order-1 md:order-2 group">
                <span className="text-slate-600 text-[10px] md:text-xs font-light italic tracking-[0.2em] uppercase">
                   Developed by
                </span>
                <a 
                  href="https://wa.me/967774072721" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 group no-underline"
                >
                   {/* Name with Gold Style */}
                   <span className="text-gold font-serif font-black text-2xl md:text-3xl transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                      IBRAHIM SALEH KASHIMA
                   </span>
                   
                   {/* Code Icon */}
                   <div className="bg-slate-900 border border-slate-800 p-1 rounded-lg group-hover:border-amber-500/50 transition-all">
                      <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                   </div>

                   {/* Underline Effect */}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-500 group-hover:w-full"></span>
                </a>
             </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setAuthOpen(false)} />
      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
      />
      <FavoritesModal
        isOpen={isFavOpen}
        onClose={() => setFavOpen(false)}
        allProducts={products}
      />
    </div>
  );
}