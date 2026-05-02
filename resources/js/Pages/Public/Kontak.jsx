import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Kontak() {
    return (
        <PublicLayout title="Kontak">
            <Head title="Kontak - PCM Gunung Putri" />
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        Kontak Kami
                    </h1>
                    <p className="mb-12 text-gray-600">
                        Hubungi kami untuk informasi lebih lanjut
                    </p>

                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900">
                                Informasi Kontak
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                        <svg
                                            className="h-5 w-5 text-green-600"
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
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Alamat
                                        </h3>
                                        <p className="text-gray-600">
                                            Gedung Olahour Gunung Putri,
                                            Jawa Barat, Indonesia
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                        <svg
                                            className="h-5 w-5 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Email
                                        </h3>
                                        <p className="text-gray-600">
                                            info@pcmgunungputri.org
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                        <svg
                                            className="h-5 w-5 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Telepon / WhatsApp
                                        </h3>
                                        <p className="text-gray-600">
                                            +62 812 3456 7890
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="mb-6 text-xl font-semibold text-gray-900">
                                Peta Lokasi
                            </h2>
                            <div className="h-96 w-full rounded-lg bg-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d107.0!3d-6.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0!1m0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}