import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

const navItems = [
  { name: "Beranda", href: "/" },
  { name: "Profil", href: "/profil" },
  { name: "Struktur", href: "/struktur" },
  { name: "Berita", href: "/berita" },
  { name: "Kegiatan", href: "/kegiatans" },
  { name: "Galeri", href: "/galeri" },
  { name: "Donasi", href: "/donasi" },
  { name: "Kontak", href: "/kontak" },
];

export default function PublicLayout({ children, announcement, title = "Beranda" }) {
  const { url } = usePage();

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Announcement Bar */}
      {announcement && (
        <div className="bg-green-700 text-white text-center py-2 text-sm">
          <div className="container-main px-4">
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="font-medium">{announcement.title || announcement.content || 'Pengumuman penting'}</span>
            </span>
          </div>
        </div>
      )}

      {/* Navbar - Sticky */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="container-main">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-semibold text-gray-800 hidden sm:block">
                PCM Gunung Putri
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    url === item.href
                      ? "bg-green-100 text-green-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-xl bg-green-600 flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-lg font-semibold">PCM Gunung Putri</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pimpinan Cabang Muhammadiyah Gunung Putri — organisasi Islam yang bergerak dalam bidang dakwah, pendidikan, dan sosial kemasyarakatan.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Tautan Cepat</h4>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Jl. Raya Gunung Putri No.XX</p>
                <p>Kabupaten Bogor, Jawa Barat</p>
                <p className="text-green-400 font-medium">info@pcmgunungputri.org</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} PCM Gunung Putri. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

