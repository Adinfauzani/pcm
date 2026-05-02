import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

export default function Galeri({ images, albums, selectedAlbum }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <PublicLayout title="Galeri">
            <Head title="Galeri - PCM Gunung Putri" />
            <div className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        Galeri
                    </h1>
                    <p className="mb-8 text-gray-600">
                        Koleksi foto kegiatan PCM Gunung Putri
                    </p>

                    <div className="mb-8 flex flex-wrap gap-2">
                        <Link
                            href="/galeri"
                            className={`rounded-full px-4 py-2 text-sm font-medium ${
                                !selectedAlbum
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Semua
                        </Link>
                        {albums.map((album) => (
                            <Link
                                key={album.id}
                                href={`/galeri?album=${album.id}`}
                                className={`rounded-full px-4 py-2 text-sm font-medium ${
                                    selectedAlbum == album.id
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {album.name}
                            </Link>
                        ))}
                    </div>

                    {images.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                {images.data.map((image) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(image)}
                                        className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
                                    >
                                        <img
                                            src={`/storage/${
                                                image.thumbnail || image.image_path
                                            }`}
                                            alt={image.title || 'Gallery image'}
                                            className="h-full w-full object-cover transition group-hover:scale-105"
                                        />
                                        {image.caption && (
                                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition group-hover:opacity-100">
                                                <p className="p-2 text-sm text-white">
                                                    {image.caption}
                                                </p>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {images.last_page > 1 && (
                                <div className="mt-12 flex justify-center gap-2">
                                    {images.links.map((link, index) => (
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
                        </>
                    ) : (
                        <p className="text-center text-gray-500">
                            Galeri belum tersedia.
                        </p>
                    )}

                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <img
                                src={`/storage/${selectedImage.image_path}`}
                                alt={selectedImage.title || 'Full size'}
                                className="max-h-[90vh] max-w-[90vw] object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />
                            {selectedImage.caption && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                                    {selectedImage.caption}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}