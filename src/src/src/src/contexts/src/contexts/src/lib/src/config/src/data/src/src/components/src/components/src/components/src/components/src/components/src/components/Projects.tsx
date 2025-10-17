import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          {t('مشاريعنا', 'Our Projects')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={language === 'ar' ? project.title : project.titleEn}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {language === 'ar' ? project.title : project.titleEn}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'ar' ? project.description : project.descriptionEn}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{language === 'ar' ? project.category : project.categoryEn}</span>
                  <span>{project.completionDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
