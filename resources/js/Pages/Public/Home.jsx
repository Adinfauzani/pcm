import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import NewsCard from "@/Components/NewsCard";
import EventCard from "@/Components/EventCard";
import DonationBanner from "@/Components/DonationBanner";
import GalleryPreview from "@/Components/GalleryPreview";

export default function Home({ announcement, featuredPost, miniPosts, latestPosts, featuredEvents, upcomingEvents, ongoingEvents, finishedEvents, latestDonation, galeriPreview }) {
  // Build hero slides from latestPosts (at least 5)
  const heroSlides = (latestPosts.data || []).slice(0, Math.max(5, (latestPosts.data || []).length));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const goToSlide = (idx) => setCurrentSlide(idx % heroSlides.length);

  return (
    <PublicLayout announcement={announcement}>
      <Head title="Beranda | Muhammadiyah PCM Gunung Putri" />

      {/* Hero - Auto-sliding latest news carousel */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 to-green-900 text-white py-8 md:py-20 min-h-[420px] md:min-h-[520px] flex items-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg%\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"0.05\\"%3E%3Ccircle cx=\\"30\\" cy=\\"30\\" r=\\"1\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative max-w-6xl mx-auto px-6 w-full">
          {/* Slide container */}
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {heroSlides.length > 0 ? (
                heroSlides.map((p) => (
                  <a key={p.id} href={`/berita/${p.slug}`} className="relative min-w-full flex flex-col md:flex-row items-center gap-6 p-8 md:p-12" style={{ backgroundImage: p.image_url ? `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url("${p.image_url}")` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    {/* Image column */}
                    <div className="md:w-1/3 w-full flex justify-center">
                      <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-white/20 shadow-lg flex-shrink-0">
                        <img src={p.image_url || '/images/placeholder-news.jpg'} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Content column */}
                    <div className="md:w-2/3 w-full text-center md:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/80 text-white text-xs font-bold uppercase tracking-wider mb-3">
                        {p.category?.name || 'Berita'}
                        {p.published_at && <span className="opacity-70">• {new Date(p.published_at).toLocaleDateString('id-ID')}</span>}
                      </div>
                      <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 line-clamp-2">{p.title}</h1>
                      <p className="text-green-100 text-sm md:text-base mb-6 line-clamp-3 max-w-2xl mx-auto md:mx-0">{p.excerpt || p.content?.replace(/<[^>]*>/g, '').slice(0, 200) || 'Tidak ada ringkasan tersedia.'}</p>
                      <span className="inline-flex items-center gap-1 text-white font-semibold hover:underline transition">
                        Baca selengkapnya
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </div>
                  </a>
                ))
              ) : (
                <div className="min-w-full flex items-center justify-center py-20 text-center">
                  <p className="text-gray-300">Belum ada berita untuk ditampilkan.</p>
                </div>
              )}
            </div>
          </div>

          {/* Slide indicators */}
          {heroSlides.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {heroSlides.map((_, idx) => (
                <button key={idx} onClick={() => goToSlide(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`} aria-label={`Slide ${idx + 1}`} />
              ))}
            </div>
          )}

          {/* Headline text below carousel */}
          <div className="text-center mt-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              Layanan & Informasi <br className="hidden md:block" />Muhammadiyah PCM Gunung Putri
            </h1>
            <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto">
              Menebar manfaat, membangun umat. Portal informasi kegiatan, berita, dan layanan kemasyarakatan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Left: News */}
        <div className="md:col-span-2 space-y-8">
          {/* Featured post */}
          {featuredPost && (
            <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-100">
                  <img src={featuredPost.image_url || '/images/placeholder-news.jpg'} alt={featuredPost.title} className="w-full h-48 md:h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">{featuredPost.category?.name || 'Berita'}</span>
                  <h2 className="text-xl md:text-2xl font-bold mt-2 mb-3 line-clamp-2">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt || featuredPost.content?.replace(/<[^>]*>/g, '').slice(0, 180) || 'Tidak ada ringkasan.'}</p>
                  <a href={`/berita/${featuredPost.slug}`} className="text-green-600 font-semibold hover:underline inline-flex items-center">
                    Baca selengkapnya
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* Mini posts */}
          {miniPosts && miniPosts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {miniPosts.map((p) => (
                <a key={p.id} href={`/berita/${p.slug}`} className="bg-gray-50 rounded-lg p-3 hover:shadow transition border border-gray-100">
                  <img src={p.image_url || '/images/placeholder-mini.jpg'} alt={p.title} className="w-full h-20 object-cover rounded-md mb-2" />
                  <h3 className="text-xs font-medium line-clamp-2">{p.title}</h3>
                </a>
              ))}
            </div>
          )}

          {/* Latest posts list (skip featured) */}
          <section>
            <h2 className="text-lg font-bold mb-4 border-b pb-2 border-gray-200">Berita Terkini</h2>
            <div className="space-y-4">
              {latestPosts.data && latestPosts.data.length > 0 ? (
                latestPosts.data.map((p) => (
                  <NewsCard key={p.id} post={p} compact />
                ))
              ) : (
                <p className="text-gray-500">Belum ada berita terbaru.</p>
              )}
            </div>
            {latestPosts.links && latestPosts.links.length > 3 && (
              <div className="mt-6 flex justify-center space-x-2">
                {latestPosts.links.map((link, i) => (
                  <a key={i} href={link.url || '#'} className={`px-3 py-1 rounded ${link.active ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'} text-sm`} dangerouslySetInnerHTML={{ __html: link.label }} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Right sidebar */}
        <aside className="space-y-6">
          {/* Events */}
          <section className="bg-white rounded-xl shadow p-4 border border-gray-100">
            <h2 className="font-bold text-lg mb-3 text-gray-800">Kegiatan</h2>
            {featuredEvents && featuredEvents.length > 0 ? (
              featuredEvents.map((e) => <EventCard key={e.id} event={e} compact />)
            ) : (
              <p className="text-gray-500 text-sm">Tidak ada kegiatan mendatang.</p>
            )}
            <a href="/kegiatans" className="text-green-600 text-sm font-semibold hover:underline block mt-3">Lihat semua kegiatan</a>
          </section>

          {/* Donation banner */}
          {latestDonation && (
            <DonationBanner donation={latestDonation} />
          )}

          {/* Gallery preview */}
          <section className="bg-white rounded-xl shadow p-4 border border-gray-100">
            <h2 className="font-bold text-lg mb-3 text-gray-800">Galeri Foto</h2>
            <GalleryPreview items={galeriPreview} />
            <a href="/galeri" className="text-green-600 text-sm font-semibold hover:underline block mt-3">Lihat semua galeri</a>
          </section>
        </aside>
      </div>
    </PublicLayout>
  );
}
