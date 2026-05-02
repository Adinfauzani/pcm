import { useForm, Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function EventForm({ categories, event }) {
    const { data, setData, post, processing } = useForm({
        title: event?.title || '',
        description: event?.description || '',
        content: event?.content || '',
        start_date: event?.start_date || '',
        end_date: event?.end_date || '',
        location: event?.location || '',
        location_address: event?.location_address || '',
        category_id: event?.category_id || '',
        status: event?.status || 'upcoming',
        is_featured: event?.is_featured || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = event ? `/admin/events/${event.id}` : '/admin/events';
        submit(url, { forceFormData: true, _method: event ? 'put' : 'post' });
    };

    return (
        <AdminLayout title={event ? 'Edit Event' : 'Tambah Event'}>
            <Head title={event ? 'Edit Event' : 'Tambah Event'} />
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow">
                <div>
                    <label className="block text-sm font-medium">Judul</label>
                    <input type="text" value={data.title} onChange={e => setData('title', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Deskripsi</label>
                    <textarea value={data.description} onChange={e => setData('description', e.target.value)}
                        rows={5} className="mt-1 block w-full rounded-md border-gray-300" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Tanggal Mulai</label>
                        <input type="datetime-local" value={data.start_date} onChange={e => setData('start_date', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Tanggal Selesai</label>
                        <input type="datetime-local" value={data.end_date} onChange={e => setData('end_date', e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300" required />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Lokasi</label>
                    <input type="text" value={data.location} onChange={e => setData('location', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300" required />
                </div>
                <div>
                    <label className="block text-sm font-medium">Status</label>
                    <select value={data.status} onChange={e => setData('status', e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300">
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="finished">Finished</option>
                    </select>
                </div>
                <button type="submit" className="rounded-md bg-green-600 px-4 py-2 text-white">
                    {processing ? 'Menyimpan...' : 'Simpan'}
                </button>
            </form>
        </AdminLayout>
    );
}