import { Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Donations({ donations }) {
    const { flash } = usePage().props;

    return (
        <AdminLayout title="Kelola Donasi">
            <Head title="Kelola Donasi" />
            {flash?.success && (
                <div className="mb-4 rounded-md bg-green-50 p-4 text-green-700">
                    {flash.success}
                </div>
            )}
            <div className="rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Donatur</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Jumlah</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Metode</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Status</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {donations.data.map(d => (
                            <tr key={d.id}>
                                <td className="px-6 py-4">
                                    <div className="font-medium">{d.donor_name}</div>
                                    <div className="text-xs text-gray-500">{d.donor_email}</div>
                                </td>
                                <td className="px-6 py-4 font-medium">
                                    Rp {new Intl.NumberFormat('id-ID').format(d.amount)}
                                </td>
                                <td className="px-6 py-4">{d.payment_method}</td>
                                <td className="px-6 py-4">
                                    <span className={`rounded px-2 py-1 text-xs ${
                                        d.status === 'approved' ? 'bg-green-100' :
                                        d.status === 'rejected' ? 'bg-red-100' : 'bg-yellow-100'
                                    }`}>
                                        {d.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    {d.status === 'pending' && (
                                        <>
                                            <form method="POST" action={`/admin/donations/${d.id}/approve`} className="inline">
                                                <input type="hidden" name="_token" value={usePage().props.csrf_token} />
                                                <button type="submit" className="text-green-600 hover:text-green-900">
                                                    Approve
                                                </button>
                                            </form>
                                            <form method="POST" action={`/admin/donations/${d.id}/reject`} className="inline ml-4">
                                                <input type="hidden" name="_token" value={usePage().props.csrf_token} />
                                                <button type="submit" className="text-red-600 hover:text-red-900">
                                                    Reject
                                                </button>
                                            </form>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}