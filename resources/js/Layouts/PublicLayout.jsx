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

export default function PublicLayout({ children, title = "Beranda" }) {
  const { url } = usePage();

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Navbar - Sticky */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="container-main">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-lg font-semibold text-gray-dark hidden sm:block">
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
                      ? "bg-primary-50 text-primary"
                      : "text-gray-light hover:bg-gray-100 hover:text-gray-dark"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-light">
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
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container-main py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-lg font-semibold text-gray-dark">
                  PCM Gunung Putri
                </span>
              </div>
              <p className="text-sm text-gray-light leading-relaxed">
                Pimpinan Cabinanger Muhammadiyah Gunung Putri adalah organisasi
                Islam yang bergerak dalam bidang dakwah, pendidikan, dan sosial
                kemasyarakatan.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-gray-dark mb-4">
                Tautan Cepat
              </h4>
              <ul className="space-y-2">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-light hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-gray-dark mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-gray-light">
                <p>Jl. Raya Gunung Putri No.XX</p>
                <p>Kabupaten Bogor, Jawa Barat</p>
                <p className="text-primary font-medium">
                  info@pcmgunungputri.org
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-light">
              © {new Date().getFullYear()} PCM Gunung Putri. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
