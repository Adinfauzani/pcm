import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Events({ events }) {
    return (
        <AdminLayout title="Kelola Events">
            <Head title="Kelola Events" />
            <div className="rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Judul</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Tanggal</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {events.data.map((event) => (
                            <tr key={event.id}>
                                <td className="px-6 py-4 font-medium">{event.title}</td>
                                <td className="px-6 py-4">
                                    {new Date(event.start_date).toLocaleDateString('id-ID')}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs ${
                                        event.status === 'upcoming' ? 'bg-blue-100' :
                                        event.status === 'ongoing' ? 'bg-green-100' : 'bg-gray-100'
                                    }`}>
                                        {event.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href={`/admin/events/${event.id}/edit`} className="text-green-600">Edit</a>
                                    <button className="ml-4 text-red-600">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}