import { Building2, Compass, Ruler, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Building2,
      titleAr: 'التصميم المعماري',
      titleEn: 'Architectural Design',
      descAr: 'تصاميم معمارية حديثة تجمع بين الجمال والوظيفية',
      descEn: 'Modern architectural designs combining beauty and functionality'
    },
    {
      icon: Compass,
      titleAr: 'التصميم الإنشائي',
      titleEn: 'Structural Design',
      descAr: 'حلول إنشائية آمنة ومتينة باستخدام أحدث التقنيات',
      descEn: 'Safe and durable structural solutions using latest technologies'
    },
    {
      icon: Ruler,
      titleAr: 'الإشراف الهندسي',
      titleEn: 'Engineering Supervision',
      descAr: 'إشراف متكامل على جميع مراحل التنفيذ',
      descEn: 'Complete supervision of all execution phases'
    },
    {
      icon: Users,
      titleAr: 'الاستشارات الهندسية',
      titleEn: 'Engineering Consultancy',
      descAr: 'استشارات متخصصة في جميع المجالات الهندسية',
      descEn: 'Specialized consultancy in all engineering fields'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {t('خدماتنا', 'Our Services')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(service.titleAr, service.titleEn)}
                </h3>
                <p className="text-gray-600">
                  {t(service.descAr, service.descEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
