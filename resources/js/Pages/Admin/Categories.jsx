import { useForm, usePage, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Categories({ categories }) {
    const { data, setData, post, processing } = useForm({
        name: '',
        description: '',
        type: 'post',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/categories', {
            onSuccess: () => {
                setData('name', '');
                setData('description', '');
            },
        });
    };

    return (
        <AdminLayout title="Kelola Kategori">
            <Head title="Kelola Kategori" />
            <form onSubmit={handleSubmit} className="mb-8 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-lg font-medium">Tambah Kategori</h3>
                <div className="grid gap-4 sm:grid-cols-4">
                    <input
                        type="text"
                        placeholder="Nama"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Deskripsi"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm"
                    />
                    <select
                        value={data.type}
                        onChange={(e) => setData('type', e.target.value)}
                        className="rounded-md border-gray-300 shadow-sm"
                    >
                        <option value="post">Post</option>
                        <option value="event">Event</option>
                    </select>
                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                    >
                        Tambah
                    </button>
                </div>
            </form>

            <div className="overflow-hidden rounded-lg bg-white shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Nama</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Tipe</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {categories.data.map((cat) => (
                            <tr key={cat.id}>
                                <td className="px-6 py-4">{cat.name}</td>
                                <td className="px-6 py-4">{cat.type}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-red-600 hover:text-red-900">Hapus</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}