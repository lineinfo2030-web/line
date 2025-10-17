import { useNavigate } from 'react-router-dom';
import { FolderKanban, FileText, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';

export default function ClientPortal() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/client/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
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
            <User className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">بوابة العملاء</h1>
          </div>
          <p className="text-gray-600">مرحباً {user?.email}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
            <FolderKanban className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">مشاريعي</h3>
            <p className="text-gray-600">عرض جميع المشاريع الخاصة بك</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
            <FileText className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">طلباتي</h3>
            <p className="text-gray-600">متابعة حالة طلباتك</p>
          </div>
        </div>
      </div>
    </div>
  );
}
