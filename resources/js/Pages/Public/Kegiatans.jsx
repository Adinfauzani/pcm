import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Kegiatans({ events, status }) {
    const tabs = [
        { key: 'upcoming', label: 'Akan Datang' },
        { key: 'ongoing', label: 'Sedang Berlangsung' },
        { key: 'finished', label: 'Selesai' },
    ];

    return (
        <PublicLayout title="Kegiatan">
            <Head title="Kegiatan - PCM Gunung Putri" />
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        Kegiatan
                    </h1>
                    <p className="mb-8 text-gray-600">
                        Jadwal kegiatan PCM Gunung Putri
                    </p>

                    <div className="mb-8 flex gap-2 border-b border-gray-200">
                        {tabs.map((tab) => (
                            <Link
                                key={tab.key}
                                href={`/kegiatans?status=${tab.key}`}
                                className={`border-b-2 px-4 py-3 text-sm font-medium ${
                                    status === tab.key
                                        ? 'border-green-600 text-green-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                }`}
                            >
                                {tab.label}
                            </Link>
                        ))}
                    </div>

                    {events.data.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {events.data.map((event) => (
                                <Link
                                    key={event.id}
                                    href={`/kegiatans/${event.slug}`}
                                    className="group block overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
                                >
                                    {event.thumbnail && (
                                        <img
                                            src={`/storage/${event.thumbnail}`}
                                            alt={event.title}
                                            className="h-48 w-full object-cover"
                                        />
                                    )}
                                    <div className="p-4">
                                        <span
                                            className={`mb-2 inline-block rounded-full px-2 py-1 text-xs font-medium ${
                                                event.status === 'upcoming'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : event.status ===
                                                      'ongoing'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}
                                        >
                                            {event.status === 'upcoming'
                                                ? 'Akan Datang'
                                                : event.status === 'ongoing'
                                                ? 'Sedang Berlangsung'
                                                : 'Selesai'}
                                        </span>
                                        <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-green-600">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            {new Date(
                                                event.start_date,
                                            ).toLocaleDateString('id-ID', {
                                                weekday: 'long',
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {event.location}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500">
                            Tidak ada kegiatan dalam kategori ini.
                        </p>
                    )}

                    {events.last_page > 1 && (
                        <div className="mt-12 flex justify-center gap-2">
                            {events.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`rounded px-4 py-2 ${
                                        link.active
                                            ? 'bg-green-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    } ${!link.url ? 'opacity-50' : ''}`}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}