'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { 
  HomeIcon, 
  PlusIcon, 
  PencilSquareIcon, 
  TrashIcon, 
  BanknotesIcon, 
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null); 
  
  // 1. Initialize State with DEFAULT CATEGORY (Fixes the Undefined Error)
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    old_price: '',     // <--- 
    is_bestseller: false, // <--- 
    category: 'men_watches', // Default value
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

  // 2. Security Check
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

  // 3. Fetch Data
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/`);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // 4. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = userInfo ? userInfo.access : null;

    if (!token) {
        alert("Session expired. Please login again.");
        return;
    }
    
    const uploadData = new FormData();
    uploadData.append('name', formData.name);
    uploadData.append('price', formData.price);
    uploadData.append('old_price', formData.old_price || '');
    uploadData.append('is_bestseller', formData.is_bestseller ? 'true' : 'false');
    uploadData.append('category', formData.category);
    uploadData.append('description', formData.description);
    uploadData.append('is_active', 'true');
    
    if (formData.image) {
      uploadData.append('image', formData.image);
    }

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      };

      if (editId) {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/products/update/${editId}/`, uploadData, config);
      } else {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products/create/`, uploadData, config);
      }
      
      setShowForm(false);
      setEditId(null);
      // Reset Form
      setFormData({ name: '', price: '', old_price: '', is_bestseller: false, category: 'men_watches', description: '', image: null });
      fetchProducts();
      alert(editId ? "✅ تم التعديل بنجاح" : "✅ تمت الإضافة بنجاح");

    } catch (error) {
      console.error("Submit Error:", error);
      const msg = error.response ? JSON.stringify(error.response.data) : error.message;
      alert(`❌ حدث خطأ: ${msg}`);
    }
  };

  // 5. Handle Delete
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

  const totalValue = products.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" dir="rtl">
      
      {/* TOPBAR */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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

        {/* TABLE */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-right min-w-[600px]">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                    <th className="p-5">صورة</th>
                    <th className="p-5">الاسم</th>
                    <th className="p-5">القسم</th>
                    <th className="p-5">السعر</th>
                    <th className="p-5">مميز؟</th>
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
                            <div className="flex flex-col">
                                <span className="text-emerald-400 font-mono">{item.price} ر.ي</span>
                                {item.old_price && <span className="text-slate-500 text-xs line-through">{item.old_price}</span>}
                            </div>
                        </td>
                        <td className="p-5">
                            {item.is_bestseller && <StarIcon className="h-5 w-5 text-amber-500" />}
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