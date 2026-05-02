export default function GalleryPreview({ items = [] }) {
  if (!items || items.length === 0) {
    return <p className="text-gray-400 text-sm">Belum ada foto.</p>;
  }
  const displayItems = items.slice(0, 6);
  return (
    <div className="grid grid-cols-3 gap-1">
      {displayItems.map((item) => (
        <div key={item.id} className="aspect-square rounded-md overflow-hidden bg-gray-100">
          <img src={item.image_url || '/images/placeholder-gallery.jpg'} alt={item.title || 'Gallery'} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
