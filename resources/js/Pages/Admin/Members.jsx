import { Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Members({ members }) {
  return (
    <AdminLayout title="Kelola Struktur">
      <Head title="Kelola Struktur" />
      <div className="rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Jabatan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {members.data.map((m) => (
              <tr key={m.id}>
                <td className="px-6 py-4 font-medium">{m.name}</td>
                <td className="px-6 py-4">{m.position}</td>
                <td className="px-6 py-4">
                  <span
                    className={`rounded px-2 py-1 text-xs ${m.is_active ? "bg-green-100" : "bg-gray-100"}`}
                  >
                    {m.is_active ? "Aktif" : "Tidak Aktif"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={`/admin/members/${m.id}/edit`}
                    className="text-green-600"
                  >
                    Edit
                  </a>
                  <button className="ml-4 text-red-600">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
