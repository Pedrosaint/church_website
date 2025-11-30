
const mediaImages = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
  "/gallery/g7.jpg",
  "/gallery/g8.jpg",
];

const MediaGallery = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">Media Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {mediaImages.map((src, index) => (
            <div
              key={index}
              className="w-full h-40 rounded-lg overflow-hidden shadow"
            >
              <img
                src={src}
                alt="Gallery item"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;
