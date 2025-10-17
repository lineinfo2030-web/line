import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Logo />
          <p className="text-gray-400 text-center max-w-2xl">
            {t(
              'شركة الخط الهندسي - نبني المستقبل بخطوط هندسية دقيقة',
              'Engineering Line - Building the future with precise engineering lines'
            )}
          </p>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {t('جميع الحقوق محفوظة', 'All rights reserved')}
          </div>
        </div>
      </div>
    </footer>
  );
}
