import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FolderKanban, Users, Settings, LogOut, FileText, Briefcase } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from '../components/Logo';

export default function AdminDashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: FolderKanban, label: 'المشاريع', path: '/admin/projects', color: 'blue' },
    { icon: Users, label: 'الفريق', path: '/admin/team', color: 'green' },
    { icon: Users, label: 'المستخدمين', path: '/admin/users', color: 'purple' },
    { icon: FileText, label: 'الطلبات', path: '/admin/requests', color: 'orange' },
    { icon: Briefcase, label: 'طلبات الخدمات', path: '/admin/service-requests', color: 'red' },
    { icon: Settings, label: 'الإعدادات', path: '/admin/settings', color: 'gray' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
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
            <LayoutDashboard className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">لوحة التحكم الإدارية</h1>
          </div>
          <p className="text-gray-600">مرحباً بك في لوحة التحكم الرئيسية</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.path}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-${item.color}-500`}
              >
                <Icon className={`w-12 h-12 text-${item.color}-600 mb-4`} />
                <h3 className="text-2xl font-bold text-gray-800">{item.label}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
