import { useNavigate } from 'react-router-dom';
import { FolderKanban, CheckSquare, LogOut, Briefcase } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';

export default function EmployeePortal() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/employee/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
          >
            <LogOut className="w-5 h-5" />
            تسجيل الخروج
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-orange-600" />
            <h1 className="text-3xl font-bold text-gray-800">بوابة الموظفين</h1>
          </div>
          <p className="text-gray-600">مرحباً {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
            <FolderKanban className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">مشاريعي</h3>
            <p className="text-gray-600">المشاريع المخصصة لك</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
            <CheckSquare className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">المهام</h3>
            <p className="text-gray-600">متابعة مهامك اليومية</p>
          </div>
        </div>
      </div>
    </div>
  );
}
