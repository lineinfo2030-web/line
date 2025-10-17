import { useLanguage } from '../contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    {
      nameAr: 'م. أحمد العلي',
      nameEn: 'Eng. Ahmed Al-Ali',
      roleAr: 'مدير المشاريع',
      roleEn: 'Project Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      nameAr: 'م. سارة محمد',
      nameEn: 'Eng. Sara Mohammed',
      roleAr: 'مهندسة معمارية',
      roleEn: 'Architectural Engineer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    },
    {
      nameAr: 'م. خالد السعيد',
      nameEn: 'Eng. Khaled Al-Saeed',
      roleAr: 'مهندس إنشائي',
      roleEn: 'Structural Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {t('فريق العمل', 'Our Team')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={t(member.nameAr, member.nameEn)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {t(member.nameAr, member.nameEn)}
                </h3>
                <p className="text-blue-600 font-medium">
                  {t(member.roleAr, member.roleEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
