
// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { 
//   PencilSquareIcon, 
//   TrashIcon, 
//   PlusCircleIcon,
//   ArrowRightOnRectangleIcon,
//   WrenchScrewdriverIcon,
//   HomeIcon
// } from '@heroicons/react/24/outline';

// // --- Main Admin Page Component ---
// export default function AdminDashboard() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState({ totalValue: 0, totalItems: 0 });
//   const router = useRouter();

//   // Security Check: Ensure user is an admin
//   useEffect(() => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     if (!userInfo || !userInfo.isAdmin) {
//       toast.error("غير مصرح لك بالدخول.");
//       router.push('/'); 
//     } else {
//       fetchProducts();
//     }
//   }, [router]);

//   // Fetch all products from the backend
//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       // We need to fetch ALL products, including inactive ones, for the admin
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       calculateStats(data);
//     } catch (error) {
//       toast.error('فشل في جلب المنتجات.');
//       console.error("Fetch Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Calculate statistics from the product list
//   const calculateStats = (allProducts) => {
//     const totalItems = allProducts.length;
//     const totalValue = allProducts.reduce((sum, item) => sum + parseFloat(item.price), 0);
//     setStats({ totalValue, totalItems });
//   };
  
//   // Handle user logout
//   const handleLogout = () => {
//     localStorage.removeItem('userInfo');
//     toast.success('تم تسجيل الخروج.');
//     router.push('/');
//   };

//   return (
//     <div className="min-h-screen bg-slate-950 flex">
//       {/* --- Sidebar --- */}
//       <aside className="w-64 bg-slate-900 p-6 flex flex-col justify-between border-l border-slate-800">
//         <div>
//           <div className="flex items-center gap-2 mb-12">
//             <WrenchScrewdriverIcon className="h-8 w-8 text-amber-500" />
//             <h1 className="text-xl font-black text-white">لوحة التحكم</h1>
//           </div>
//           <nav className="flex flex-col gap-4">
//             <a href="#" className="flex items-center gap-3 bg-slate-800 text-white p-3 rounded-lg font-bold">
//               <HomeIcon className="h-5 w-5" />
//               <span>إدارة المنتجات</span>
//             </a>
//             {/* Add more links here if needed */}
//           </nav>
//         </div>
//         <button 
//           onClick={handleLogout}
//           className="flex items-center gap-3 text-red-400 hover:bg-red-500/10 p-3 rounded-lg transition"
//         >
//           <ArrowRightOnRectangleIcon className="h-5 w-5" />
//           <span>تسجيل الخروج</span>
//         </button>
//       </aside>

//       {/* --- Main Content --- */}
//       <main className="flex-1 p-10">
//         <header className="flex justify-between items-center mb-10">
//           <h2 className="text-3xl font-bold text-white">مرحباً أيها المدير!</h2>
//           <button className="bg-amber-500 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2 hover:bg-amber-400 transition">
//             <PlusCircleIcon className="h-6 w-6" />
//             <span>إضافة ساعة جديدة</span>
//           </button>
//         </header>

//         {/* --- Stats Cards --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//           <StatCard title="إجمالي المنتجات" value={stats.totalItems.toLocaleString('ar-SA')} />
//           <StatCard title="قيمة المخزون (ريال)" value={stats.totalValue.toLocaleString('ar-SA')} />
//         </div>

//         {/* --- Products Table --- */}
//         <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
//           {loading ? (
//             <div className="p-10 text-center text-slate-500">جاري تحميل المنتجات...</div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="w-full text-right">
//                 <thead className="border-b border-slate-800">
//                   <tr>
//                     <Th>صورة</Th>
//                     <Th>اسم الساعة</Th>
//                     <Th>السعر (ريال)</Th>
//                     <Th>الحالة</Th>
//                     <Th>إجراءات</Th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map(p => (
//                     <ProductRow key={p.id} product={p} />
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }


// // --- Sub-Components for the Admin Page ---

// // A reusable Table Header cell
// const Th = ({ children }) => <th className="p-4 font-bold text-slate-400">{children}</th>;

// // A reusable Table Data cell
// const Td = ({ children, className }) => <td className={`p-4 border-t border-slate-800 ${className}`}>{children}</td>;

// // Stat Card component
// const StatCard = ({ title, value }) => (
//   <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
//     <h3 className="text-slate-400 font-bold text-sm mb-2">{title}</h3>
//     <p className="text-white text-3xl font-black">{value}</p>
//   </div>
// );

// // Product Row for the table
// const ProductRow = ({ product }) => (
//   <tr className="hover:bg-slate-800/50 transition-colors">
//     <Td>
//       <img src={product.image || '/placeholder.png'} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
//     </Td>
//     <Td className="font-bold text-white">{product.name}</Td>
//     <Td>{Number(product.price).toLocaleString('ar-SA')}</Td>
//     <Td>
//       {product.is_active ? (
//         <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">متاح</span>
//       ) : (
//         <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded-full">مخفي</span>
//       )}
//     </Td>
//     <Td>
//       <div className="flex gap-2">
//         <button className="text-slate-400 hover:text-amber-500 p-2 rounded-full transition"><PencilSquareIcon className="h-5 w-5" /></button>
//         <button className="text-slate-400 hover:text-red-500 p-2 rounded-full transition"><TrashIcon className="h-5 w-5" /></button>
//       </div>
//     </Td>
//   </tr>
// );



// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { 
//   HomeIcon, 
//   PlusIcon, 
//   PencilSquareIcon, 
//   TrashIcon, 
//   BanknotesIcon, 
//   ArchiveBoxIcon,
//   ArrowLeftOnRectangleIcon 
// } from '@heroicons/react/24/outline';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Form State
//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null); 
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     category: 'men_watches', // <--- Add this Default
//     description: '',
//     image: null
//   });
//   // 1. Security Check (Admin Only)
//   useEffect(() => {
//     const userInfoString = localStorage.getItem('userInfo');
//     if (!userInfoString) {
//       router.push('/');
//       return;
//     }
//     const userInfo = JSON.parse(userInfoString);
//     if (!userInfo.isAdmin) {
//       alert("⛔ عذراً، هذه الصفحة مخصصة للمدير فقط!");
//       router.push('/'); 
//       return;
//     }
//     fetchProducts();
//   }, []);

//   // 2. Fetch Data
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // 3. Handle Submit (Add or Edit)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;

//     if (!token) {
//         alert("Session expired. Please login again.");
//         return;
//     }
    
//     const uploadData = new FormData();
//     uploadData.append('name', formData.name);
//     uploadData.append('price', formData.price);
//     uploadData.append('category', formData.category); 
//     uploadData.append('description', formData.description);
    
//     uploadData.append('is_active', 'True'); 
    
//     if (formData.image) {
//       uploadData.append('image', formData.image);
//     }
//     if (formData.image) {
//       uploadData.append('image', formData.image);
//     }

//     try {
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`, // 🔑 CRITICAL: Sends permission
//           'Content-Type': 'multipart/form-data'
//         }
//       };

//       if (editId) {
//         await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/update/${editId}/`, uploadData, config);
//       } else {
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create/`, uploadData, config);
//       }
      
//       setShowForm(false);
//       setEditId(null);
//       setFormData({ name: '', price: '', description: '', image: null });
//       fetchProducts();
//       alert(editId ? "✅ تم تعديل المنتج بنجاح" : "✅ تم إضافة المنتج بنجاح");

//     } catch (error) {
//       console.error("Submit Error:", error);
//       const msg = error.response ? JSON.stringify(error.response.data) : error.message;
//       alert(`❌ حدث خطأ: ${msg}`);
//     }
//   };

//   // 4. Handle Delete
//   const handleDelete = async (id) => {
//     if(!window.confirm("⚠️ هل أنت متأكد من حذف هذا المنتج نهائياً؟")) return;
    
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;

//     try {
//         const config = { headers: { 'Authorization': `Bearer ${token}` } };
//         await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/delete/${id}/`, config);
//         fetchProducts();
//         alert("🗑️ تم الحذف بنجاح");
//     } catch (error) {
//         console.error("Delete Error:", error);
//         alert("❌ فشل الحذف. تأكد من صلاحياتك.");
//     }
//   };

//   const totalValue = products.reduce((acc, item) => acc + Number(item.price), 0);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
//       {/* --- SIDEBAR / TOPBAR --- */}
//       <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//                 <div className="p-2 bg-amber-500 rounded-lg text-black">
//                     <HomeIcon className="h-6 w-6" />
//                 </div>
//                 <h1 className="text-2xl font-black tracking-wide">لوحة التحكم</h1>
//             </div>
            
//             <div className="flex gap-4">
//                 <button 
//                   onClick={() => router.push('/')}
//                   className="flex items-center gap-2 text-slate-400 hover:text-white transition"
//                 >
//                     <ArrowLeftOnRectangleIcon className="h-5 w-5" />
//                     <span>العودة للمتجر</span>
//                 </button>
//             </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-6 md:p-8">
        
//         {/* --- STATS CARDS --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//             <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
//                 <div>
//                     <p className="text-slate-400 text-sm font-bold mb-1">إجمالي المنتجات</p>
//                     <p className="text-4xl font-black text-white">{products.length}</p>
//                 </div>
//                 <div className="h-12 w-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
//                     <ArchiveBoxIcon className="h-7 w-7" />
//                 </div>
//             </div>

//             <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
//                 <div>
//                     <p className="text-slate-400 text-sm font-bold mb-1">قيمة المخزون (ريال)</p>
//                     <p className="text-4xl font-black text-emerald-400">{totalValue.toLocaleString()}</p>
//                 </div>
//                 <div className="h-12 w-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
//                     <BanknotesIcon className="h-7 w-7" />
//                 </div>
//             </div>
//         </div>

//         {/* --- ACTIONS HEADER --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//                 <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
//                 إدارة المنتجات
//             </h2>
//             <button 
//                 onClick={() => { setShowForm(true); setEditId(null); setFormData({name:'', price:'', description:''}); }}
//                 className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition hover:scale-105"
//             >
//                 <PlusIcon className="h-5 w-5" />
//                 <span>إضافة ساعة جديدة</span>
//             </button>
//         </div>

//         {/* --- DARK TABLE --- */}
//         <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
//           <div className="overflow-x-auto">
//             <table className="w-full text-right">
//                 <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
//                 <tr>
//                     <th className="p-5 font-medium">صورة</th>
//                     <th className="p-5 font-medium">اسم الساعة</th>
//                     <th className="p-5 font-medium">السعر (ريال)</th>
//                     <th className="p-5 font-medium">الحالة</th>
//                     <th className="p-5 font-medium">الإجراءات</th>
//                 </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-800">
//                 {products.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-800/50 transition">
//                         <td className="p-5">
//                             <img src={`${process.env.NEXT_PUBLIC_API_URL}${item.image}`} alt={item.name} className="w-12 h-12 rounded-lg object-cover border border-slate-700" />
//                         </td>
//                         <td className="p-5 font-bold text-white">{item.name}</td>
//                         <td className="p-5 text-emerald-400 font-mono">{item.price}</td>
//                         <td className="p-5">
//                             <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
//                                 متاح
//                             </span>
//                         </td>
//                         <td className="p-5 flex gap-3">
//                             <button 
//                                 onClick={() => {
//                                     setEditId(item.id);
//                                     setFormData({ name: item.name, price: item.price, description: item.description, image: null });
//                                     setShowForm(true);
//                                 }}
//                                 className="text-amber-500 hover:bg-amber-500/10 p-2 rounded-lg transition"
//                                 title="تعديل"
//                             >
//                                 <PencilSquareIcon className="h-5 w-5" />
//                             </button>
//                             <button 
//                                 onClick={() => handleDelete(item.id)}
//                                 className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition"
//                                 title="حذف"
//                             >
//                                 <TrashIcon className="h-5 w-5" />
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//           </div>
//           {products.length === 0 && <div className="p-12 text-center text-slate-500">لا توجد منتجات مضافة حالياً</div>}
//         </div>
// {/* --- CATEGORY DROPDOWN --- */}
// <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">القسم</label>
//                   <select 
//                     className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition"
//                     value={formData.category}
//                     onChange={e => setFormData({...formData, category: e.target.value})}
//                   >
//                     <option value="men_watches">ساعات رجالي</option>
//                     <option value="women_watches">ساعات نسائي</option>
//                     <option value="rings">الخواتم العقيق</option>
//                     <option value="perfumes">العطور</option>
//                     <option value="accessories">الاكسسوارات</option>
//                     <option value="gifts">تحف وهدايا</option>
//                     <option value="glasses">نظارات</option>
//                   </select>
//                 </div>

//         {/* --- DARK MODAL FORM --- */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
//             <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-800 animate-fade-in relative">
              
//               <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">
//                 {editId ? 'تعديل بيانات المنتج' : 'إضافة منتج جديد'}
//               </h3>
              
//               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">اسم المنتج</label>
//                   <input type="text" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
//                 </div>
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">السعر (ريال)</label>
//                   <input type="number" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">الوصف</label>
//                   <textarea className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" rows="3"
//                     value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required ></textarea>
//                 </div>
//                 <div className="col-span-2">
//                    <label className="block text-sm font-bold text-slate-400 mb-2">صورة المنتج</label>
//                    <input type="file" className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 file:bg-slate-800 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-2 file:mr-4 hover:file:bg-slate-700 transition"
//                     onChange={e => setFormData({...formData, image: e.target.files[0]})} />
//                 </div>

//                 <div className="col-span-2 flex gap-4 mt-6">
//                   <button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3.5 rounded-xl font-bold transition shadow-lg shadow-amber-500/20">
//                     {editId ? 'حفظ التعديلات' : 'إضافة المنتج'}
//                   </button>
//                   <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-bold transition">
//                     إلغاء
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }



// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { 
//   HomeIcon, 
//   PlusIcon, 
//   PencilSquareIcon, 
//   TrashIcon, 
//   BanknotesIcon, 
//   ArchiveBoxIcon,
//   ArrowLeftOnRectangleIcon,
//   CheckBadgeIcon
// } from '@heroicons/react/24/outline';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Form State
//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null); 
  
//   // 1. Initialize State with DEFAULT CATEGORY (Fixes the Undefined Error)
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     old_price: '',     // <--- 
//     is_bestseller: false, // <--- 
//     category: 'men_watches', // Default value
//     description: '',
//     image: null
//   });

//   // Category Options
//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   // 2. Security Check
//   useEffect(() => {
//     const userInfoString = localStorage.getItem('userInfo');
//     if (!userInfoString) {
//       router.push('/');
//       return;
//     }
//     const userInfo = JSON.parse(userInfoString);
//     if (!userInfo.isAdmin) {
//       alert("⛔ عذراً، هذه الصفحة مخصصة للمدير فقط!");
//       router.push('/'); 
//       return;
//     }
//     fetchProducts();
//   }, []);

//   // 3. Fetch Data
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // 4. Handle Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;

//     if (!token) {
//         alert("Session expired. Please login again.");
//         return;
//     }
    
//     const uploadData = new FormData();
//     uploadData.append('name', formData.name);
//     uploadData.append('price', formData.price);
    
//     if (formData.old_price) uploadData.append('old_price', formData.old_price);
//     uploadData.append('is_bestseller', formData.is_bestseller ? 'True' : 'False');
    
//     uploadData.append('category', formData.category); // Fix: Send Category
//     uploadData.append('description', formData.description);
//     uploadData.append('is_active', 'True'); // Fix: Auto Active
    
//     if (formData.image) {
//       uploadData.append('image', formData.image);
//     }

//     try {
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       };

//       if (editId) {
//         await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/update/${editId}/`, uploadData, config);
//       } else {
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create/`, uploadData, config);
//       }
      
//       setShowForm(false);
//       setEditId(null);
//       // Reset Form with Default Category
//       setFormData({ name: '', price: '', category: 'men_watches', description: '', image: null });
//       fetchProducts();
//       alert(editId ? "✅ تم التعديل بنجاح" : "✅ تمت الإضافة بنجاح");

//     } catch (error) {
//       console.error("Submit Error:", error);
//       const msg = error.response ? JSON.stringify(error.response.data) : error.message;
//       alert(`❌ حدث خطأ: ${msg}`);
//     }
//   };

//   // 5. Handle Delete
//   const handleDelete = async (id) => {
//     if(!window.confirm("⚠️ هل أنت متأكد من حذف هذا المنتج نهائياً؟")) return;
    
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;

//     try {
//         const config = { headers: { 'Authorization': `Bearer ${token}` } };
//         await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/delete/${id}/`, config);
//         fetchProducts();
//         alert("🗑️ تم الحذف بنجاح");
//     } catch (error) {
//         console.error("Delete Error:", error);
//         alert("❌ فشل الحذف");
//     }
//   };

//   const totalValue = products.reduce((acc, item) => acc + Number(item.price), 0);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
//       {/* --- TOPBAR --- */}
//       <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//                 <div className="p-2 bg-amber-500 rounded-lg text-black">
//                     <HomeIcon className="h-6 w-6" />
//                 </div>
//                 <h1 className="text-2xl font-black tracking-wide">لوحة التحكم</h1>
//             </div>
            
//             <button onClick={() => router.push('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition">
//                 <ArrowLeftOnRectangleIcon className="h-5 w-5" />
//                 <span>العودة للمتجر</span>
//             </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-6 md:p-8">
        
//         {/* --- STATS --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//             <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
//                 <div>
//                     <p className="text-slate-400 text-sm font-bold mb-1">إجمالي المنتجات</p>
//                     <p className="text-4xl font-black text-white">{products.length}</p>
//                 </div>
//                 <div className="h-12 w-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center">
//                     <ArchiveBoxIcon className="h-7 w-7" />
//                 </div>
//             </div>

//             <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
//                 <div>
//                     <p className="text-slate-400 text-sm font-bold mb-1">قيمة المخزون (ريال)</p>
//                     <p className="text-4xl font-black text-emerald-400">{totalValue.toLocaleString()}</p>
//                 </div>
//                 <div className="h-12 w-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
//                     <BanknotesIcon className="h-7 w-7" />
//                 </div>
//             </div>
//         </div>

//         {/* --- ACTIONS --- */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//                 <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
//                 إدارة المنتجات
//             </h2>
//             <button 
//                 onClick={() => { setShowForm(true); setEditId(null); setFormData({name:'', price:'', category: 'men_watches', description:''}); }}
//                 className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition hover:scale-105"
//             >
//                 <PlusIcon className="h-5 w-5" />
//                 <span>إضافة منتج جديد</span>
//             </button>
//         </div>

//         {/* --- TABLE --- */}
//         <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
//           <div className="overflow-x-auto">
//             <table className="w-full text-right">
//                 <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
//                 <tr>
//                     <th className="p-5 font-medium">صورة</th>
//                     <th className="p-5 font-medium">الاسم</th>
//                     <th className="p-5 font-medium">القسم</th>
//                     <th className="p-5 font-medium">السعر</th>
//                     <th className="p-5 font-medium">الإجراءات</th>
//                 </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-800">
//                 {products.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-800/50 transition">
//                         <td className="p-5">
//                             <img src={item.image ? `${process.env.NEXT_PUBLIC_API_URL}${item.image}` : '/placeholder.png'} alt={item.name} className="w-12 h-12 rounded-lg object-cover border border-slate-700" />
//                         </td>
//                         <td className="p-5 font-bold text-white">{item.name}</td>
//                         <td className="p-5">
//                             {/* Display Category Name in Arabic */}
//                             <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs">
//                                 {categories.find(c => c.id === item.category)?.name || item.category}
//                             </span>
//                         </td>
//                         <td className="p-5 text-emerald-400 font-mono">{item.price}</td>
//                         <td className="p-5 flex gap-3">
//                             <button 
//                                 onClick={() => {
//                                     setEditId(item.id);
//                                     setFormData({ 
//                                         name: item.name, 
//                                         price: item.price, 
//                                         category: item.category || 'men_watches', // Handle existing items
//                                         description: item.description, 
//                                         image: null 
//                                     });
//                                     setShowForm(true);
//                                 }}
//                                 className="text-amber-500 hover:bg-amber-500/10 p-2 rounded-lg transition"
//                             >
//                                 <PencilSquareIcon className="h-5 w-5" />
//                             </button>
//                             <button 
//                                 onClick={() => handleDelete(item.id)}
//                                 className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition"
//                             >
//                                 <TrashIcon className="h-5 w-5" />
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//           </div>
//           {products.length === 0 && <div className="p-12 text-center text-slate-500">لا توجد منتجات مضافة حالياً</div>}
//         </div>

//         {/* --- DARK MODAL FORM --- */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
//             <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-800 animate-fade-in relative max-h-[90vh] overflow-y-auto custom-scrollbar">
              
//               <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">
//                 {editId ? 'تعديل بيانات المنتج' : 'إضافة منتج جديد'}
//               </h3>
              
//               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
//                 {/* 1. Name */}
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">اسم المنتج</label>
//                   <input type="text" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
//                 </div>

//                 {/* 2. Price */}
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">السعر (ريال)</label>
//                   <input type="number" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
//                 </div>

//                 {/* 3. CATEGORY - NEW STYLE (Grid of Buttons) */}
//                 <div className="col-span-2">
//                   <label className="block text-sm font-bold text-slate-400 mb-3">اختر القسم</label>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((cat) => (
//                       <button
//                         key={cat.id}
//                         type="button" // Important: Prevent Submit
//                         onClick={() => setFormData({...formData, category: cat.id})}
//                         className={`px-4 py-2.5 rounded-lg text-sm font-bold transition border ${
//                           formData.category === cat.id
//                             ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
//                             : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
//                         }`}
//                       >
//                          {/* Optional: Add Check icon if selected */}
//                          {formData.category === cat.id && <span className="ml-1">✓</span>}
//                          {cat.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 4. Description */}
//                 <div className="col-span-2">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">الوصف</label>
//                   <textarea className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" rows="3"
//                     value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required ></textarea>
//                 </div>

//                 {/* 5. Image */}
//                 <div className="col-span-2">
//                    <label className="block text-sm font-bold text-slate-400 mb-2">صورة المنتج</label>
//                    <input type="file" className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 file:bg-slate-800 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-2 file:mr-4 hover:file:bg-slate-700 transition"
//                     onChange={e => setFormData({...formData, image: e.target.files[0]})} />
//                 </div>

//                 <div className="col-span-2 flex gap-4 mt-6">
//                   <button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3.5 rounded-xl font-bold transition shadow-lg shadow-amber-500/20">
//                     {editId ? 'حفظ التعديلات' : 'إضافة المنتج'}
//                   </button>
//                   <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-bold transition">
//                     إلغاء
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }


// 'use client';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { 
//   HomeIcon, 
//   PlusIcon, 
//   PencilSquareIcon, 
//   TrashIcon, 
//   BanknotesIcon, 
//   ArchiveBoxIcon,
//   ArrowLeftOnRectangleIcon,
//   StarIcon 
// } from '@heroicons/react/24/outline';

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   // Form State
//   const [showForm, setShowForm] = useState(false);
//   const [editId, setEditId] = useState(null); 
  
//   // 1. Initialize State (Make sure nothing is undefined)
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     old_price: '',     // Default to empty string
//     is_bestseller: false,
//     category: 'men_watches',
//     description: '',
//     image: null
//   });

//   const categories = [
//     { id: 'men_watches', name: 'ساعات رجالي' },
//     { id: 'women_watches', name: 'ساعات نسائي' },
//     { id: 'rings', name: 'الخواتم العقيق' },
//     { id: 'perfumes', name: 'العطور' },
//     { id: 'accessories', name: 'الاكسسوارات' },
//     { id: 'gifts', name: 'تحف وهدايا' },
//     { id: 'glasses', name: 'نظارات' },
//   ];

//   // 2. Security Check
//   useEffect(() => {
//     const userInfoString = localStorage.getItem('userInfo');
//     if (!userInfoString) {
//       router.push('/');
//       return;
//     }
//     const userInfo = JSON.parse(userInfoString);
//     if (!userInfo.isAdmin) {
//       alert("⛔ عذراً، هذه الصفحة مخصصة للمدير فقط!");
//       router.push('/'); 
//       return;
//     }
//     fetchProducts();
//   }, []);

//   // 3. Fetch Data
//   const fetchProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
//       setProducts(data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // 4. Handle Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;

//     if (!token) {
//         alert("Session expired. Please login again.");
//         return;
//     }
    
//     const uploadData = new FormData();
//     uploadData.append('name', formData.name);
//     uploadData.append('price', formData.price);
    
//     // Handle Optional Old Price
//     if (formData.old_price) {
//         uploadData.append('old_price', formData.old_price);
//     } else {
//         // If empty, send an empty string or don't append (Backend handles null)
//         uploadData.append('old_price', ''); 
//     }

//     uploadData.append('is_bestseller', formData.is_bestseller ? 'True' : 'False');
//     uploadData.append('category', formData.category);
//     uploadData.append('description', formData.description);
//     uploadData.append('is_active', 'True');
    
//     if (formData.image) {
//       uploadData.append('image', formData.image);
//     }

//     try {
//       const config = {
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data'
//         }
//       };

//       if (editId) {
//         await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/update/${editId}/`, uploadData, config);
//       } else {
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create/`, uploadData, config);
//       }
      
//       setShowForm(false);
//       setEditId(null);
//       // Reset Form
//       setFormData({ name: '', price: '', old_price: '', is_bestseller: false, category: 'men_watches', description: '', image: null });
//       fetchProducts();
//       alert(editId ? "✅ تم التعديل بنجاح" : "✅ تمت الإضافة بنجاح");

//     } catch (error) {
//       console.error("Submit Error:", error);
//       const msg = error.response ? JSON.stringify(error.response.data) : error.message;
//       alert(`❌ حدث خطأ: ${msg}`);
//     }
//   };

//   // 5. Handle Delete
//   const handleDelete = async (id) => {
//     if(!window.confirm("⚠️ هل أنت متأكد من حذف هذا المنتج نهائياً؟")) return;
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     const token = userInfo ? userInfo.access : null;
//     try {
//         const config = { headers: { 'Authorization': `Bearer ${token}` } };
//         await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/delete/${id}/`, config);
//         fetchProducts();
//         alert("🗑️ تم الحذف بنجاح");
//     } catch (error) {
//         alert("❌ فشل الحذف");
//     }
//   };

//   const totalValue = products.reduce((acc, item) => acc + Number(item.price), 0);

//   return (
//     <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
//       {/* TOPBAR */}
//       <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//                 <div className="p-2 bg-amber-500 rounded-lg text-black">
//                     <HomeIcon className="h-6 w-6" />
//                 </div>
//                 <h1 className="text-2xl font-black tracking-wide">لوحة التحكم</h1>
//             </div>
//             <button onClick={() => router.push('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition">
//                 <ArrowLeftOnRectangleIcon className="h-5 w-5" />
//                 <span>العودة للمتجر</span>
//             </button>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-6 md:p-8">
        
//         {/* ACTIONS */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
//             <h2 className="text-2xl font-bold text-white flex items-center gap-2">
//                 <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
//                 إدارة المنتجات
//             </h2>
//             <button 
//                 onClick={() => { 
//                     setShowForm(true); 
//                     setEditId(null); 
//                     // Reset to clean state
//                     setFormData({name:'', price:'', old_price:'', is_bestseller: false, category: 'men_watches', description:''}); 
//                 }}
//                 className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-amber-500/20 transition hover:scale-105"
//             >
//                 <PlusIcon className="h-5 w-5" />
//                 <span>إضافة منتج جديد</span>
//             </button>
//         </div>

//         {/* TABLE */}
//         <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
//           <div className="overflow-x-auto">
//             <table className="w-full text-right">
//                 <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
//                 <tr>
//                     <th className="p-5 font-medium">صورة</th>
//                     <th className="p-5 font-medium">الاسم</th>
//                     <th className="p-5 font-medium">القسم</th>
//                     <th className="p-5 font-medium">السعر</th>
//                     <th className="p-5 font-medium">مميز؟</th>
//                     <th className="p-5 font-medium">الإجراءات</th>
//                 </tr>
//                 </thead>
//                 <tbody className="divide-y divide-slate-800">
//                 {products.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-800/50 transition">
//               <td className="p-5">
//               <img 
//                     src={
//                         item.image 
//                         ? (item.image.toString().startsWith('http') ? item.image : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`) 
//                         : '/placeholder.png'
//                     } 
//                     alt={item.name} 
//                     className="w-12 h-12 rounded-lg object-cover border border-slate-700" 
//                 />
//                             </td>
//                         <td className="p-5 font-bold text-white">{item.name}</td>
//                         <td className="p-5">
//                             <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs">
//                                 {categories.find(c => c.id === item.category)?.name || item.category}
//                             </span>
//                         </td>
//                         <td className="p-5">
//                             <div className="flex flex-col">
//                                 <span className="text-emerald-400 font-mono">{item.price}</span>
//                                 {item.old_price && <span className="text-slate-500 text-xs line-through">{item.old_price}</span>}
//                             </div>
//                         </td>
//                         <td className="p-5">
//                             {item.is_bestseller && <StarIcon className="h-5 w-5 text-amber-500" />}
//                         </td>
//                         <td className="p-5 flex gap-3">
//                             <button 
//                                 onClick={() => {
//                                     setEditId(item.id);
//                                     // FIX: Handle null values with || ''
//                                     setFormData({ 
//                                         name: item.name, 
//                                         price: item.price, 
//                                         old_price: item.old_price || '', 
//                                         is_bestseller: item.is_bestseller || false,
//                                         category: item.category || 'men_watches', 
//                                         description: item.description, 
//                                         image: null 
//                                     });
//                                     setShowForm(true);
//                                 }}
//                                 className="text-amber-500 hover:bg-amber-500/10 p-2 rounded-lg transition"
//                             >
//                                 <PencilSquareIcon className="h-5 w-5" />
//                             </button>
//                             <button 
//                                 onClick={() => handleDelete(item.id)}
//                                 className="text-red-500 hover:bg-red-500/10 p-2 rounded-lg transition"
//                             >
//                                 <TrashIcon className="h-5 w-5" />
//                             </button>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//           </div>
//         </div>

//         {/* FORM MODAL */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
//             <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-800 animate-fade-in relative max-h-[90vh] overflow-y-auto custom-scrollbar">
              
//               <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-800 pb-4">
//                 {editId ? 'تعديل بيانات المنتج' : 'إضافة منتج جديد'}
//               </h3>
              
//               <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
//                 {/* 1. Name */}
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">اسم المنتج</label>
//                   <input type="text" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
//                 </div>

//                 {/* 2. Price */}
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">السعر الحالي (ريال)</label>
//                   <input type="number" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
//                 </div>

//                 {/* 3. Old Price (THE FIX) */}
//                 <div className="col-span-2 md:col-span-1">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">السعر قبل الخصم (اختياري)</label>
//                   <input 
//                     type="number" 
//                     placeholder="اتركه فارغاً إذا لا يوجد خصم" 
//                     className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" 
//                     value={formData.old_price || ''} // FIX: Ensure never undefined
//                     onChange={e => setFormData({...formData, old_price: e.target.value})} 
//                   />
//                 </div>

//                 {/* 4. Best Seller */}
//                 <div className="col-span-2 md:col-span-1 flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
//                    <input 
//                      type="checkbox" 
//                      id="bestseller"
//                      className="w-5 h-5 accent-amber-500"
//                      checked={formData.is_bestseller || false} // FIX: Ensure boolean
//                      onChange={e => setFormData({...formData, is_bestseller: e.target.checked})}
//                    />
//                    <label htmlFor="bestseller" className="text-white font-bold cursor-pointer">عرض في قسم "الأكثر مبيعاً"؟</label>
//                 </div>

//                 {/* 5. Category */}
//                 <div className="col-span-2">
//                   <label className="block text-sm font-bold text-slate-400 mb-3">اختر القسم</label>
//                   <div className="flex flex-wrap gap-2">
//                     {categories.map((cat) => (
//                       <button
//                         key={cat.id}
//                         type="button"
//                         onClick={() => setFormData({...formData, category: cat.id})}
//                         className={`px-4 py-2.5 rounded-lg text-sm font-bold transition border ${
//                           formData.category === cat.id
//                             ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
//                             : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
//                         }`}
//                       >
//                          {formData.category === cat.id && <span className="ml-1">✓</span>}
//                          {cat.name}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* 6. Description */}
//                 <div className="col-span-2">
//                   <label className="block text-sm font-bold text-slate-400 mb-2">الوصف</label>
//                   <textarea className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:border-amber-500 outline-none transition" rows="3"
//                     value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required ></textarea>
//                 </div>

//                 {/* 7. Image */}
//                 <div className="col-span-2">
//                    <label className="block text-sm font-bold text-slate-400 mb-2">صورة المنتج</label>
//                    <input type="file" className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400"
//                     onChange={e => setFormData({...formData, image: e.target.files[0]})} />
//                 </div>

//                 <div className="col-span-2 flex gap-4 mt-6">
//                   <button type="submit" className="flex-1 bg-amber-500 hover:bg-amber-400 text-black py-3.5 rounded-xl font-bold transition shadow-lg shadow-amber-500/20">
//                     {editId ? 'حفظ التعديلات' : 'إضافة المنتج'}
//                   </button>
//                   <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3.5 rounded-xl font-bold transition">
//                     إلغاء
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  ArrowLeftOnRectangleIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null); 
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    old_price: '',
    is_bestseller: false,
    category: 'men_watches',
    description: '',
    image: null
  });

  const categories = [
    { id: 'men_watches', name: 'ساعات رجالي' },
    { id: 'women_watches', name: 'ساعات نسائي' },
    { id: 'rings', name: 'الخواتم العقيق' },
    { id: 'perfumes', name: 'العطور' },
    { id: 'accessories', name: 'الاكسسوارات' },
    { id: 'gifts', name: 'تحف وهدايا' },
    { id: 'glasses', name: 'نظارات' },
  ];

  useEffect(() => {
    const userInfoString = localStorage.getItem('userInfo');
    if (!userInfoString) {
      router.push('/');
      return;
    }
    const userInfo = JSON.parse(userInfoString);
    if (!userInfo.isAdmin) {
      alert("⛔ عذراً، هذه الصفحة مخصصة للمدير فقط!");
      router.push('/'); 
      return;
    }
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo ? userInfo.access : null;
    
    // Use FormData for images
    const uploadData = new FormData();
    uploadData.append('name', formData.name);
    uploadData.append('price', formData.price);
    if (formData.old_price) uploadData.append('old_price', formData.old_price);
    
    // FIX: Django needs booleans as small strings
    uploadData.append('is_bestseller', formData.is_bestseller ? 'true' : 'false');
    uploadData.append('category', formData.category);
    uploadData.append('description', formData.description);
    
    // Only append if file exists
    if (formData.image instanceof File) {
      uploadData.append('image', formData.image);
    }

    try {
      const config = { headers: { 'Authorization': `Bearer ${token}` } };
      if (editId) {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/update/${editId}/`, uploadData, config);
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create/`, uploadData, config);
      }
      setShowForm(false);
      fetchProducts();
      alert("✅ Done!");
    } catch (error) {
      console.error(error);
      alert("❌ Error: " + JSON.stringify(error.response?.data));
    }
  };
  const handleDelete = async (id) => {
    if(!window.confirm("⚠️ هل أنت متأكد من حذف هذا المنتج نهائياً؟")) return;
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo ? userInfo.access : null;
    try {
        const config = { headers: { 'Authorization': `Bearer ${token}` } };
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/products/delete/${id}/`, config);
        fetchProducts();
        alert("🗑️ تم الحذف بنجاح");
    } catch (error) {
        alert("❌ فشل الحذف");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
      {/* TOPBAR */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500 rounded-lg text-black">
                    <HomeIcon className="h-6 w-6" />
                </div>
                <h1 className="text-xl md:text-2xl font-black">لوحة التحكم</h1>
            </div>
            <button onClick={() => router.push('/')} className="flex items-center gap-2 text-slate-400 hover:text-white transition">
                <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                <span className="hidden sm:inline">العودة للمتجر</span>
            </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* ACTIONS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 w-full">
                <span className="w-1.5 h-6 bg-amber-500 rounded-full"></span>
                إدارة المنتجات ({products.length})
            </h2>
            <button 
                onClick={() => { 
                    setShowForm(true); 
                    setEditId(null); 
                    setFormData({name:'', price:'', old_price:'', is_bestseller: false, category: 'men_watches', description:'', image: null}); 
                }}
                className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition"
            >
                <PlusIcon className="h-5 w-5" />
                <span>إضافة منتج جديد</span>
            </button>
        </div>

        {/* TABLE - Responsive wrapper */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right min-w-[600px]">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                    <th className="p-5">صورة</th>
                    <th className="p-5">الاسم</th>
                    <th className="p-5">القسم</th>
                    <th className="p-5">السعر</th>
                    <th className="p-5">الإجراءات</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                {products.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/50 transition">
                        <td className="p-5">
                            <img 
                                src={item.image || '/placeholder.png'} 
                                alt={item.name} 
                                className="w-12 h-12 rounded-lg object-cover border border-slate-700" 
                            />
                        </td>
                        <td className="p-5 font-bold text-white">{item.name}</td>
                        <td className="p-5">
                            <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-lg text-xs">
                                {categories.find(c => c.id === item.category)?.name || item.category}
                            </span>
                        </td>
                        <td className="p-5">
                            <span className="text-emerald-400 font-mono">{item.price} ر.ي</span>
                        </td>
                        <td className="p-5 flex gap-3">
                            <button 
                                onClick={() => {
                                    setEditId(item.id);
                                    setFormData({ 
                                        name: item.name, 
                                        price: item.price, 
                                        old_price: item.old_price || '', 
                                        is_bestseller: item.is_bestseller || false,
                                        category: item.category || 'men_watches', 
                                        description: item.description, 
                                        image: null 
                                    });
                                    setShowForm(true);
                                }}
                                className="text-amber-500 p-2"
                            >
                                <PencilSquareIcon className="h-5 w-5" />
                            </button>
                            <button onClick={() => handleDelete(item.id)} className="text-red-500 p-2">
                                <TrashIcon className="h-5 w-5" />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
        </div>

        {/* FORM MODAL */}
        {showForm && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-slate-900 p-6 md:p-8 rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-800 max-h-[90vh] overflow-y-auto">
              
              <h3 className="text-2xl font-bold mb-6 text-white">
                {editId ? 'تعديل بيانات المنتج' : 'إضافة منتج جديد'}
              </h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">اسم المنتج</label>
                  <input type="text" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none" 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">السعر الحالي</label>
                  <input type="number" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none" 
                    value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} required />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-sm font-bold text-slate-400 mb-2">السعر قبل الخصم (اختياري)</label>
                  <input type="number" className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none" 
                    value={formData.old_price} onChange={e => setFormData({...formData, old_price: e.target.value})} />
                </div>

                <div className="col-span-2 md:col-span-1 flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                   <input type="checkbox" id="bestseller" className="w-5 h-5 accent-amber-500"
                     checked={formData.is_bestseller} onChange={e => setFormData({...formData, is_bestseller: e.target.checked})} />
                   <label htmlFor="bestseller" className="text-white font-bold cursor-pointer">الأكثر مبيعاً؟</label>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-400 mb-3">القسم</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button key={cat.id} type="button" onClick={() => setFormData({...formData, category: cat.id})}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition border ${
                          formData.category === cat.id ? 'bg-amber-500 text-black border-amber-500' : 'bg-slate-950 text-slate-400 border-slate-800'
                        }`}
                      >
                         {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-400 mb-2">الوصف</label>
                  <textarea className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none" rows="3"
                    value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required ></textarea>
                </div>

                <div className="col-span-2">
                   <label className="block text-sm font-bold text-slate-400 mb-2">صورة المنتج</label>
                   <input type="file" className="w-full p-2 bg-slate-950 border border-slate-800 text-slate-400 rounded-xl"
                    onChange={e => setFormData({...formData, image: e.target.files[0]})} />
                </div>

                <div className="col-span-2 flex gap-4 mt-4">
                  <button type="submit" className="flex-1 bg-amber-500 text-black py-4 rounded-xl font-bold shadow-lg transition">
                    {editId ? 'حفظ التعديلات' : 'إضافة المنتج'}
                  </button>
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 text-white py-4 rounded-xl font-bold transition">
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}