export default function DonationBanner({ donation }) {
  if (!donation) return null;
  return (
    <section className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-sm p-5 border border-amber-200">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <span className="text-xs font-semibold text-amber-700 uppercase">
          Donasi Terkini
        </span>
      </div>
      <h3 className="font-bold text-gray-800 text-lg mb-1">
        {donation.title || "Program Donasi"}
      </h3>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {donation.description ||
          "Bantu kegiatan kami dalam berdakwah dan sosial kemasyarakatan."}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-amber-700">
          {donation.target_amount
            ? `Target: Rp${Number(donation.target_amount).toLocaleString()}`
            : "Donasi terbuka"}
        </span>
        <span className="text-xs text-gray-500">
          {donation.collected_amount
            ? `Terkumpul: Rp${Number(donation.collected_amount).toLocaleString()}`
            : ""}
        </span>
      </div>
    </section>
  );
}
