import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import { Bolt Database } from '../lib/Bolt Database';
import Logo from '../components/Logo';

interface Settings {
  company_name_ar: string;
  company_name_en: string;
  email: string;
  phone: string;
  address_ar: string;
  address_en: string;
}

export default function AdminSettings() {
  const [settings, setSettings] = useState<Settings>({
    company_name_ar: '',
    company_name_en: '',
    email: '',
    phone: '',
    address_ar: '',
    address_en: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await Bolt Database
        .from('company_settings')
        .select('*')
        .maybeSingle();

      if (error) throw error;
      if (data) setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await Bolt Database
        .from('company_settings')
        .upsert(settings);

      if (error) throw error;
      alert('تم حفظ الإعدادات بنجاح');
    } catch (error) {
      console.error('Error saving settings:', error);
      alert('فشل حفظ الإعدادات');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof Settings, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            العودة
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">إعدادات الشركة</h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">اسم الشركة (عربي)</label>
              <input
                type="text"
                value={settings.company_name_ar}
                onChange={(e) => handleChange('company_name_ar', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">اسم الشركة (إنجليزي)</label>
              <input
                type="text"
                value={settings.company_name_en}
                onChange={(e) => handleChange('company_name_en', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">العنوان (عربي)</label>
              <textarea
                value={settings.address_ar}
                onChange={(e) => handleChange('address_ar', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">العنوان (إنجليزي)</label>
              <textarea
                value={settings.address_en}
                onChange={(e) => handleChange('address_en', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
                rows={3}
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-8 flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg disabled:opacity-50"
          >
            <Save className="w-5 h-5" />
            {saving ? 'جاري الحفظ...' : 'حفظ الإعدادات'}
          </button>
        </div>
      </div>
    </div>
  );
}
