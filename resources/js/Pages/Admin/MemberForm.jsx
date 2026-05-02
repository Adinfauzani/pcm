import { useForm, Head } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function MemberForm({ member }) {
  const { data, setData, post, processing } = useForm({
    name: member?.name || "",
    position: member?.position || "",
    position_level: member?.position_level || 0,
    bio: member?.bio || "",
    phone: member?.phone || "",
    email: member?.email || "",
    is_active: member?.is_active ?? true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = member ? `/admin/members/${member.id}` : "/admin/members";
    submit(url, { forceFormData: true, _method: member ? "put" : "post" });
  };

  return (
    <AdminLayout title={member ? "Edit Anggota" : "Tambah Anggota"}>
      <Head title={member ? "Edit Anggota" : "Tambah Anggota"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow"
      >
        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Jabatan</label>
          <input
            type="text"
            value={data.position}
            onChange={(e) => setData("position", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Level Jabatan</label>
          <input
            type="number"
            value={data.position_level}
            onChange={(e) => setData("position_level", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            value={data.bio}
            onChange={(e) => setData("bio", e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Telepon</label>
          <input
            type="text"
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={data.is_active}
            onChange={(e) => setData("is_active", e.target.checked)}
            className="h-4 w-4 rounded border-gray-300"
          />
          <label className="ml-2 text-sm">Aktif</label>
        </div>
        <button
          type="submit"
          className="rounded-md bg-green-600 px-4 py-2 text-white"
        >
          {processing ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </AdminLayout>
  );
}
