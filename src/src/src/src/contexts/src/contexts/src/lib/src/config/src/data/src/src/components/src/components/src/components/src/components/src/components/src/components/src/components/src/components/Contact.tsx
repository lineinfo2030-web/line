import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {t('اتصل بنا', 'Contact Us')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t('معلومات التواصل', 'Contact Information')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{t('الهاتف', 'Phone')}</p>
                  <p className="text-gray-800 font-medium">+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{t('البريد الإلكتروني', 'Email')}</p>
                  <p className="text-gray-800 font-medium">info@engineeringline.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">{t('العنوان', 'Address')}</p>
                  <p className="text-gray-800 font-medium">
                    {t('الرياض، المملكة العربية السعودية', 'Riyadh, Saudi Arabia')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  {t('الاسم', 'Name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {t('البريد الإلكتروني', 'Email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {t('الرسالة', 'Message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg font-medium"
              >
                {t('إرسال', 'Send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
