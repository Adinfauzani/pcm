import { useForm } from '@inertiajs/react';
import { Head, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function PostForm({ categories, post }) {
    const { data, setData, post: submit, processing, errors } = useForm({
        title: post?.title || '',
        content: post?.content || '',
        excerpt: post?.excerpt || '',
        thumbnail: null,
        category_id: post?.category_id || '',
        status: post?.status || 'draft',
        is_featured: post?.is_featured || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = post ? `/admin/posts/${post.id}` : '/admin/posts';
        const method = post ? 'put' : 'post';
        submit(url, {
            forceFormData: true,
            _method: method,
        });
    };

    return (
        <AdminLayout title={post ? 'Edit Berita' : 'Tambah Berita'}>
            <Head title={post ? 'Edit Berita' : 'Tambah Berita'} />
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Judul</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Konten</label>
                    <textarea
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                        rows={10}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Excerpt</label>
                    <textarea
                        value={data.excerpt}
                        onChange={(e) => setData('excerpt', e.target.value)}
                        rows={2}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Kategori</label>
                    <select
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                        <option value="">Pilih Kategori</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Thumbnail</label>
                    <input
                        type="file"
                        onChange={(e) => setData('thumbnail', e.target.files[0])}
                        accept="image/*"
                        className="mt-1 block w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={data.is_featured}
                        onChange={(e) => setData('is_featured', e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">Featured</label>
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700 disabled:opacity-50"
                >
                    {processing ? 'Menyimpan...' : 'Simpan'}
                </button>
            </form>
        </AdminLayout>
    );
}