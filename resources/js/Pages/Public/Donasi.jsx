import { useForm } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";

export default function Donasi({ success }) {
  const { data, setData, post, processing, errors } = useForm({
    donor_name: "",
    donor_email: "",
    donor_phone: "",
    amount: "",
    payment_method: "transfer",
    bank_name: "",
    account_number: "",
    notes: "",
    transfer_proof: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/donasi/konfirmasi", { forceFormData: true });
  };

  const banks = [
    {
      name: "Bank Central Asia (BCA)",
      account: "1234567890",
      holder: "PCM Gunung Putri",
    },
    { name: "Bank Mandiri", account: "9876543210", holder: "PCM Gunung Putri" },
    {
      name: "Bank Negara Indonesia (BNI)",
      account: "1122334455",
      holder: "PCM Gunung Putri",
    },
  ];

  return (
    <PublicLayout title="Donasi">
      <Head title="Donasi - PCM Gunung Putri" />

      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-main section">
          <h1 className="text-h1 text-gray-900">Donasi</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Donasi Anda akan membantu kami menyelenggarakan kegiatan dakwah,
            pendidikan, dan sosial untuk masyarakat. JazakAllah Khair.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          {success && (
            <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-4 text-green-700">
              {success}
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Account Info */}
            <div>
              <h2 className="text-h3 text-gray-900 mb-6">Informasi Rekening</h2>
              <div className="space-y-4">
                {banks.map((bank, i) => (
                  <div key={i} className="card p-5">
                    <p className="text-sm text-gray-500">{bank.name}</p>
                    <p className="text-xl font-semibold text-gray-900 mt-1">
                      {bank.account}
                    </p>
                    <p className="text-sm text-gray-500">a.n. {bank.holder}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-h3 text-gray-900 mb-6">
                Form Konfirmasi Donasi
              </h2>
              <form onSubmit={handleSubmit} className="card p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Donatur *
                  </label>
                  <input
                    type="text"
                    value={data.donor_name}
                    onChange={(e) => setData("donor_name", e.target.value)}
                    className="input"
                    required
                  />
                  {errors.donor_name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.donor_name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={data.donor_email}
                    onChange={(e) => setData("donor_email", e.target.value)}
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={data.donor_phone}
                    onChange={(e) => setData("donor_phone", e.target.value)}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Donasi *
                  </label>
                  <input
                    type="number"
                    value={data.amount}
                    onChange={(e) => setData("amount", e.target.value)}
                    className="input"
                    min="1000"
                    required
                    placeholder="Contoh: 100000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Metode Pembayaran *
                  </label>
                  <select
                    value={data.payment_method}
                    onChange={(e) => setData("payment_method", e.target.value)}
                    className="input"
                  >
                    <option value="transfer">Transfer Bank</option>
                    <option value="cash">Tunai</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                {data.payment_method === "transfer" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Bank
                      </label>
                      <input
                        type="text"
                        value={data.bank_name}
                        onChange={(e) => setData("bank_name", e.target.value)}
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        No. Rekening
                      </label>
                      <input
                        type="text"
                        value={data.account_number}
                        onChange={(e) =>
                          setData("account_number", e.target.value)
                        }
                        className="input"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bukti Transfer
                  </label>
                  <input
                    type="file"
                    onChange={(e) =>
                      setData("transfer_proof", e.target.files[0])
                    }
                    accept="image/*"
                    className="input p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Catatan
                  </label>
                  <textarea
                    value={data.notes}
                    onChange={(e) => setData("notes", e.target.value)}
                    rows={3}
                    className="input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={processing}
                  className="btn-primary w-full"
                >
                  {processing ? "Mengirim..." : "Kirim Konfirmasi Donasi"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
