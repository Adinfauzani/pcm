import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Galleries({ galleries, albums }) {
    const { data, setData, post, processing } = useForm({
        image: null,
        album_id: '',
        caption: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/galleries', { forceFormData: true });
    };

    return (
        <AdminLayout title="Kelola Galeri">
            <Head title="Kelola Galeri" />
            <form onSubmit={handleSubmit} className="mb-8 rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-lg font-medium">Upload Gambar</h3>
                <div className="grid gap-4 sm:grid-cols-4">
                    <input type="file" onChange={e => setData('image', e.target.files[0])}
                        accept="image/*" className="rounded-md border-gray-300" required />
                    <select value={data.album_id} onChange={e => setData('album_id', e.target.value)}
                        className="rounded-md border-gray-300">
                        <option value="">Pilih Album</option>
                        {albums.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
                    </select>
                    <input type="text" placeholder="Caption" value={data.caption}
                        onChange={e => setData('caption', e.target.value)}
                        className="rounded-md border-gray-300" />
                    <button type="submit" disabled={processing}
                        className="rounded-md bg-green-600 px-4 py-2 text-white">
                        Upload
                    </button>
                </div>
            </form>

            <div className="grid grid-cols-4 gap-4">
                {galleries.data.map(img => (
                    <div key={img.id} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img src={`/storage/${img.image_path}`} alt={img.caption || 'Gallery'}
                            className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}