import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function BeritaDetail({ post }) {
  return (
    <PublicLayout title={post.title}>
      <Head title={`${post.title} - PCM Gunung Putri`} />
      <div className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/berita"
            className="mb-8 inline-flex items-center text-sm text-green-600 hover:text-green-700"
          >
            ← Kembali ke Berita
          </Link>

          <article>
            {post.thumbnail && (
              <img
                src={`/storage/${post.thumbnail}`}
                alt={post.title}
                className="mb-8 w-full rounded-lg object-cover"
              />
            )}

            {post.category && (
              <span className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                {post.category.name}
              </span>
            )}

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <span>{post.author?.name}</span>
              <span>•</span>
              <span>
                {post.published_at &&
                  new Date(post.published_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
              </span>
              <span>•</span>
              <span>{post.view_count} lihat</span>
            </div>

            <div className="mt-8 prose prose-lg max-w-none">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </PublicLayout>
  );
}
