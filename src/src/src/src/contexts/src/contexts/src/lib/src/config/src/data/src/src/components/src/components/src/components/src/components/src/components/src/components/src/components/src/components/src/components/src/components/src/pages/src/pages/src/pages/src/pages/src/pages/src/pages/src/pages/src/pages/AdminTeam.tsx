import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { Bolt Database } from '../lib/Bolt Database';
import Logo from '../components/Logo';

interface TeamMember {
  id: string;
  name_ar: string;
  name_en: string;
  role_ar: string;
  role_en: string;
  image_url: string;
  created_at: string;
}

export default function AdminTeam() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data, error } = await Bolt Database
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTeam(data || []);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العضو؟')) return;

    try {
      const { error } = await supabase.from('team_members').delete().eq('id', id);
      if (error) throw error;
      fetchTeam();
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            العودة
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">إدارة الفريق</h1>
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg">
            <Plus className="w-5 h-5" />
            إضافة عضو
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.image_url}
                  alt={member.name_ar}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name_ar}</h3>
                  <p className="text-blue-600 mb-4">{member.role_ar}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                      <Edit className="w-4 h-4" />
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(member.id)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
