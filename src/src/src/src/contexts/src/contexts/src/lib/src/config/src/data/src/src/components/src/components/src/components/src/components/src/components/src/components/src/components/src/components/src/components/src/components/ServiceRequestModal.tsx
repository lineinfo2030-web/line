import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceRequestModal({ isOpen, onClose }: ServiceRequestModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {t('طلب خدمة', 'Request Service')}
        </h3>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">
              {t('الاسم', 'Name')}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              {t('الخدمة المطلوبة', 'Requested Service')}
            </label>
            <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none">
              <option>{t('التصميم المعماري', 'Architectural Design')}</option>
              <option>{t('التصميم الإنشائي', 'Structural Design')}</option>
              <option>{t('الإشراف الهندسي', 'Engineering Supervision')}</option>
              <option>{t('الاستشارات الهندسية', 'Engineering Consultancy')}</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            {t('إرسال الطلب', 'Submit Request')}
          </button>
        </form>
      </div>
    </div>
  );
}
