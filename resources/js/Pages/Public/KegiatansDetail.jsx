import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function KegiatansDetail({ event }) {
    return (
        <PublicLayout title={event.title}>
            <Head title={`${event.title} - PCM Gunung Putri`} />
            <div className="bg-white py-16">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/kegiatans"
                        className="mb-8 inline-flex items-center text-sm text-green-600 hover:text-green-700"
                    >
                        ← Kembali ke Kegiatan
                    </Link>

                    <article>
                        {event.thumbnail && (
                            <img
                                src={`/storage/${event.thumbnail}`}
                                alt={event.title}
                                className="mb-8 w-full rounded-lg object-cover"
                            />
                        )}

                        <span
                            className={`mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                                event.status === 'upcoming'
                                    ? 'bg-blue-100 text-blue-800'
                                    : event.status === 'ongoing'
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

                        <h1 className="mt-4 text-3xl font-bold text-gray-900">
                            {event.title}
                        </h1>

                        <div className="mt-6 space-y-4 text-gray-600">
                            <div className="flex items-center gap-2">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>
                                    {new Date(
                                        event.start_date,
                                    ).toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}{' '}
                                    -{' '}
                                    {new Date(
                                        event.end_date,
                                    ).toLocaleDateString('id-ID', {
                                        weekday: 'long',
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>{event.location}</span>
                            </div>

                            {event.location_address && (
                                <p className="ml-7 text-sm text-gray-500">
                                    {event.location_address}
                                </p>
                            )}
                        </div>

                        <div className="mt-8 prose prose-lg max-w-none">
                            {event.description.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </PublicLayout>
    );
}