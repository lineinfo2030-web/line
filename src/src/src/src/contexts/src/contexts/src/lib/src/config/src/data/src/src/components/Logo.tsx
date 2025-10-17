import { Ruler } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Ruler className="w-8 h-8 text-blue-600" />
      <span className="text-2xl font-bold text-gray-800">الخط الهندسي</span>
    </div>
  );
}
