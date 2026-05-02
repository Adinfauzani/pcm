import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Struktur({ members }) {
    const groupedMembers = members.reduce((acc, member) => {
        const level = member.position_level;
        if (!acc[level]) acc[level] = [];
        acc[level].push(member);
        return acc;
    }, {});

    return (
        <PublicLayout title="Struktur Organisasi">
            <Head title="Struktur Organisasi - PCM Gunung Putri" />
            
            {/* Header */}
            <section className="bg-white border-b border-gray-100">
                <div className="container-main section">
                    <h1 className="text-h1 text-gray-900">Struktur Organisasi</h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Daftar pengurus PCM Gunung Putri periode aktif
                    </p>
                </div>
            </section>

            {/* Members */}
            <section className="section">
                <div className="container-main">
                    {members.length > 0 ? (
                        <div className="space-y-12">
                            {Object.entries(groupedMembers).map(([level, membersList]) => (
                                <div key={level}>
                                    <h2 className="text-h3 text-primary mb-6 flex items-center gap-2">
                                        <span className="h-1 flex-1 bg-primary/20 rounded-full"></span>
                                        {membersList[0].position}
                                    </h2>
                                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                        {membersList.map((member) => (
                                            <div key={member.id} className="card p-6 text-center group">
                                                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                                                    {member.photo ? (
                                                        <img src={`/storage/${member.photo}`} alt={member.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                                                    ) : (
                                                        <div className="flex h-full items-center justify-center text-3xl text-gray-400 font-semibold bg-gray-50">
                                                            {member.name.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{member.position}</p>
                                                {(member.email || member.phone) && (
                                                    <div className="mt-3 pt-3 border-t border-gray-100">
                                                        {member.email && <p className="text-xs text-gray-400">{member.email}</p>}
                                                        {member.phone && <p className="text-xs text-gray-400">{member.phone}</p>}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="card p-12 text-center">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <p className="text-gray-500">Data struktur organisasi belum tersedia.</p>
                        </div>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}