export default function EventCard({ event, compact = false }) {
  const isOngoing = event.status === 'ongoing';
  const isUpcoming = event.status === 'upcoming';
  const isFinished = event.status === 'finished';

  const statusColor = isOngoing ? 'bg-orange-100 text-orange-700' : isUpcoming ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600';

  if (compact) {
    return (
      <article className="flex gap-3 bg-gray-50 rounded-lg p-3 hover:shadow-sm transition border border-gray-100">
        <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold">
          {new Date(event.start_date).getDate()}
        </div>
        <div className="flex-1 min-w-0">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor}`}>
            {isOngoing ? 'Sedang Berlangsung' : isUpcoming ? 'Akan Datang' : 'Selesai'}
          </span>
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">{event.title}</h3>
          <p className="text-xs text-gray-500">{new Date(event.start_date).toLocaleDateString()}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex flex-col items-center justify-center text-white font-bold">
          <span className="text-lg">{new Date(event.start_date).getDate()}</span>
          <span className="text-xs">{new Date(event.start_date).toLocaleString('default',{month:'short'})}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded ${statusColor}`}>
              {isOngoing ? 'Sedang Berlangsung' : isUpcoming ? 'Akan Datang' : 'Selesai'}
            </span>
            <span className="text-xs text-gray-400">{new Date(event.start_date).toLocaleDateString()}</span>
          </div>
          <h3 className="font-bold text-gray-800 line-clamp-2">{event.title}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{event.description || 'Tidak ada deskripsi.'}</p>
          <div className="mt-3 flex items-center text-sm text-gray-500 gap-4">
            {event.location && <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{event.location}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}
