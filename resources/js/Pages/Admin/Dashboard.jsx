import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const statCards = [
    { name: 'Total Berita', value: 0, color: 'from-blue-500 to-blue-600', icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { name: 'Total Kegiatan', value: 0, color: 'from-green-500 to-green-600', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { name: 'Total Donasi', value: 0, color: 'from-yellow-500 to-yellow-600', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { name: 'Total User', value: 0, color: 'from-purple-500 to-purple-600', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
];

const icons = {
    all: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />,
    calendar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
    users: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    file: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />,
    folder: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />,
};

export default function Dashboard({ stats }) {
    const items = [
        { label: 'Total Berita', value: stats?.posts || 0, icon: 'file', color: 'blue' },
        { label: 'Total Kegiatan', value: stats?.events || 0, icon: 'calendar', color: 'green' },
        { label: 'Total Donasi', value: stats?.donations || 0, icon: 'heart', color: 'yellow' },
        { label: 'Total User', value: stats?.members || 0, icon: 'users', color: 'purple' },
    ];

    return (
        <AdminLayout title="Dashboard">
            <Head title="Dashboard Admin" />
            
            {/* Stats Grid - 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {items.map((item) => (
                    <div key={item.label} className="card p-5">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center`}>
                                <svg className={`w-6 h-6 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {icons[item.icon]}
                                </svg>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Aksi Cepat</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <a href="/admin/posts/create" className="btn-secondary text-center">+ Berita Baru</a>
                        <a href="/admin/events" className="btn-secondary text-center">+ Kegiatan Baru</a>
                        <a href="/admin/members" className="btn-secondary text-center">+ Anggota Baru</a>
                        <a href="/admin/galleries" className="btn-secondary text-center">+ Upload Galeri</a>
                    </div>
                </div>

                <div className="card p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Aktivitas Terbaru</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-gray-600">Belum ada aktivitas terbaru</span>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}