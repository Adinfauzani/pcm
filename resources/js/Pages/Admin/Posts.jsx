import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Posts({ posts }) {
    const { flash } = usePage().props;

    return (
        <AdminLayout title="Kelola Berita">
            <Head title="Kelola Berita" />
            
            {/* Header Actions */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Cari berita..." className="input pl-10" />
                </div>
                <Link href="/admin/posts/create" className="btn-primary">
                    + Tambah Berita
                </Link>
            </div>

            {/* Success Message */}
            {flash?.success && (
                <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-4 text-green-700">
                    {flash.success}
                </div>
            )}

            {/* Table Card */}
            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Judul</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Tanggal</th>
                                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {posts.data?.length > 0 ? posts.data.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <p className="font-medium text-gray-900">{post.title}</p>
                                        <p className="text-xs text-gray-500">{post.category?.name}</p>
                                    </td>
                                    <td className="px-4 py-3">
                                        <span className={`badge ${post.status === 'published' ? 'badge-published' : 'badge-draft'}`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        {post.created_at && new Date(post.created_at).toLocaleDateString('id-ID')}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link href={`/admin/posts/${post.id}/edit`} className="text-sm text-primary hover:text-primary-700">
                                                Edit
                                            </Link>
                                            <button className="text-sm text-red-600 hover:text-red-700">
                                                Hapus
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="px-4 py-12 text-center text-gray-500">
                                        <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                        </svg>
                                        <p>Belum ada berita</p>
                                        <Link href="/admin/posts/create" className="text-primary hover:underline text-sm">
                                            Tambah berita pertama →
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}