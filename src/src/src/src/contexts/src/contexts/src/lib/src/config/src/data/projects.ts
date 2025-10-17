export interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  category: string;
  categoryEn: string;
  completionDate: string;
  client: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'مشروع برج الأعمال',
    titleEn: 'Business Tower Project',
    description: 'تصميم وتنفيذ برج تجاري حديث بارتفاع 40 طابق',
    descriptionEn: 'Design and execution of a modern commercial tower with 40 floors',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
    category: 'أبراج تجارية',
    categoryEn: 'Commercial Towers',
    completionDate: '2024',
    client: 'مجموعة الأعمال المتحدة',
    location: 'الرياض'
  }
];
