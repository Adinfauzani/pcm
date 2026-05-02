import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Berita({ posts, categories, selectedCategory }) {
  return (
    <PublicLayout title="Berita">
      <Head title="Berita - PCM Gunung Putri" />
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Berita & Artikel
          </h1>
          <p className="mb-8 text-gray-600">
            Informasi terkini dari PCM Gunung Putri
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            <Link
              href="/berita"
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                !selectedCategory
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Semua
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/berita?category=${category.slug}`}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  selectedCategory === category.slug
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {posts.data.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.data.map((post) => (
                <Link
                  key={post.id}
                  href={`/berita/${post.slug}`}
                  className="group block overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
                >
                  {post.thumbnail && (
                    <img
                      src={`/storage/${post.thumbnail}`}
                      alt={post.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    {post.category && (
                      <span className="mb-2 inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                        {post.category.name}
                      </span>
                    )}
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-green-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                      {post.excerpt || post.content.substring(0, 150)}
                    </p>
                    <p className="mt-2 text-xs text-gray-400">
                      {post.published_at &&
                        new Date(post.published_at).toLocaleDateString(
                          "id-ID",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          },
                        )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Berita belum tersedia.</p>
          )}

          {posts.last_page > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {posts.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || "#"}
                  className={`rounded px-4 py-2 ${
                    link.active
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } ${!link.url ? "opacity-50" : ""}`}
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
