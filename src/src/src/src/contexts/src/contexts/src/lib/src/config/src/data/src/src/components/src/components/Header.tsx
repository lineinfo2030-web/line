import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { ar: 'الرئيسية', en: 'Home', href: '#home' },
    { ar: 'من نحن', en: 'About', href: '#about' },
    { ar: 'خدماتنا', en: 'Services', href: '#services' },
    { ar: 'مشاريعنا', en: 'Projects', href: '#projects' },
    { ar: 'فريق العمل', en: 'Team', href: '#team' },
    { ar: 'اتصل بنا', en: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {t(item.ar, item.en)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {t(item.ar, item.en)}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full justify-center"
            >
              <Globe className="w-4 h-4" />
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
