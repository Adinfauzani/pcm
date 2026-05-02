import { Link } from "@inertiajs/react";

export default function NewsCard({ post, compact = false }) {
  if (compact) {
    return (
      <article className="flex gap-3 bg-gray-50 rounded-lg p-3 hover:shadow-sm transition">
        <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-md overflow-hidden">
          <img src={post.image_url || '/images/placeholder-mini.jpg'} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-medium text-green-700 uppercase">{post.category?.name || 'Berita'}</span>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">{post.title}</h3>
          <p className="text-xs text-gray-500 mt-1">{new Date(post.published_at).toLocaleDateString()}</p>
        </div>
      </article>
    );
  }
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3 bg-gray-100">
          <img src={post.image_url || '/images/placeholder-news.jpg'} alt={post.title} className="w-full h-48 object-cover" />
        </div>
        <div className="md:w-2/3 p-5">
          <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">{post.category?.name || 'Berita'}</span>
          <h2 className="text-lg md:text-xl font-bold mt-2 mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-gray-600 mb-3 line-clamp-3 text-sm">{post.excerpt || post.content?.replace(/<[^>]*>/g, '').slice(0, 180) || 'Tidak ada ringkasan.'}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{new Date(post.published_at).toLocaleDateString()}</span>
            <Link href={`/berita/${post.slug}`} className="text-green-600 font-semibold hover:underline text-sm inline-flex items-center">
              Baca selengkapnya
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
