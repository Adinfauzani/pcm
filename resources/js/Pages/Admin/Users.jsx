import { Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Users({ users, roles }) {
    const { flash } = usePage().props;

    return (
        <AdminLayout title="Kelola Users">
            <Head title="Kelola Users" />
            {flash?.success && (
                <div className="mb-4 rounded-md bg-green-50 p-4 text-green-700">
                    {flash.success}
                </div>
            )}
            <div className="rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Nama</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.data.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 font-medium">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    {user.roles?.length > 0 ? (
                                        <div className="flex gap-1">
                                            {user.roles.map(r => (
                                                <span key={r.name} className="rounded bg-green-100 px-2 py-1 text-xs">
                                                    {r.name}
                                                </span>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">-</span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs ${user.is_active ? 'bg-green-100' : 'bg-red-100'}`}>
                                        {user.is_active ? 'Aktif' : 'Tidak Aktif'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}