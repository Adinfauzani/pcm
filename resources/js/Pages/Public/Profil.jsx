import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Profil() {
    const values = [
        { title: 'Islam', desc: 'Berbasis pada Al-Quran dan Sunnah', icon: 'book' },
        { title: 'Amanah', desc: 'Trust dan tanggung jawab', icon: 'shield' },
        { title: 'Profesional', desc: 'Bermutu dan berintegritas', icon: 'star' },
        { title: 'Istiqomah', desc: 'Konsisten dan berkelanjutan', icon: 'infinity' },
    ];

    const icons = {
        book: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
        shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
        star: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
        infinity: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
    };

    return (
        <PublicLayout title="Profil">
            <Head title="Profil - PCM Gunung Putri" />
            
            {/* Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="container-main section">
                    <h1 className="text-h1 text-gray-900">Profil Muhammadiyah</h1>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl">
                        Mengenal lebih jauh tentang visi, misi, dan nilai-nilai organisasi PCM Gunung Putri
                    </p>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="section">
                <div className="container-main">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="card p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-h3 text-gray-900">Visi</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Menjadi organisasi Islam yang mandiri, profesional, dan berkomitmen untuk penegakan Islam sebagai way of life yang sempurna untuk kebahagiaan dunia dan akhirat.
                            </p>
                        </div>

                        <div className="card p-6 lg:p-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-10 w-10 rounded-xl bg-primary-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h2 className="text-h3 text-gray-900">Misi</h2>
                            </div>
                            <ul className="space-y-3">
                                {['Menyelenggarakan dakwah Islam yang menyempurnakan akhlak', 'Menyulenggarakan pendidikan bermutu untuk cetak Muslim cerdas', 'Melayani sosial untuk masyarakat butuh', 'Memperkuat ukhuwah Islamiyah', 'Berpartisipasi dalam pembangunan nasional'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sejarah */}
            <section className="section bg-white">
                <div className="container-main">
                    <h2 className="text-h2 text-gray-900 mb-6">Sejarah Singkat</h2>
                    <div className="card p-6 lg:p-8 max-w-3xl">
                        <p className="text-gray-600 leading-relaxed">
                            Muhammadiyah didirikan oleh K.H. Ahmad Dahlan pada tanggal 18 November 1912 di Yogyakarta. Organisasi ini lahir dari kesadaran untuk memurnikan pembacaan Islam dan mewujudkan masyarakat Islam yang bersatu dan maju.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            PCM Gunung Putri sebagai bagian dari organisasi Muhammadiyah terus berupaya untuk memenuhi tujuan-tujuan tersebut dengan berbagai kegiatan dakwah, pendidikan, dan sosial kemasyarakatan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Nilai - Nilai */}
            <section className="section">
                <div className="container-main">
                    <h2 className="text-h2 text-gray-900 mb-8">Nilai-Nilai Organisasi</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((item, i) => (
                            <div key={i} className="card p-6 text-center">
                                <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        {icons[item.icon]}
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}