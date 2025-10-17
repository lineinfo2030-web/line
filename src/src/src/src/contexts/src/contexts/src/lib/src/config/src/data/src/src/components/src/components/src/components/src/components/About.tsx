import { Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleAr: 'رؤيتنا',
      titleEn: 'Our Vision',
      descAr: 'أن نكون الخيار الأول في مجال الهندسة والتصميم في المنطقة',
      descEn: 'To be the first choice in engineering and design in the region'
    },
    {
      icon: Eye,
      titleAr: 'رسالتنا',
      titleEn: 'Our Mission',
      descAr: 'تقديم حلول هندسية مبتكرة تلبي احتياجات عملائنا بأعلى معايير الجودة',
      descEn: 'Providing innovative engineering solutions that meet our clients needs with the highest quality standards'
    },
    {
      icon: Award,
      titleAr: 'قيمنا',
      titleEn: 'Our Values',
      descAr: 'الالتزام، الإبداع، الجودة، والشراكة الحقيقية مع عملائنا',
      descEn: 'Commitment, creativity, quality, and true partnership with our clients'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {t('من نحن', 'About Us')}
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          {t(
            'شركة الخط الهندسي هي إحدى الشركات الرائدة في مجال الهندسة المعمارية والإنشائية. نقدم خدمات متكاملة من التصميم إلى التنفيذ، مع فريق من المهندسين المحترفين وخبرة تمتد لأكثر من 15 عاماً في السوق.',
            'Engineering Line is a leading company in architectural and structural engineering. We provide integrated services from design to execution, with a team of professional engineers and over 15 years of market experience.'
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {t(value.titleAr, value.titleEn)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(value.descAr, value.descEn)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
