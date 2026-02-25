import { Dot, User } from "lucide-react";
import { useState } from "react";
import ShareTestimonyModal from "../modal/share_testimony";
import { useGetTestimoniesQuery } from "../api/more.api";
import { getMediaUrl } from "../../../../utils/media";
import { TestimonyIcon } from "../../../../assets/icons/svg_icons";


const CommunityTestimonies = () => {
  const [showShareModal, setShowShareModal] = useState(false);

  const { data: testimonies, isLoading, isError } = useGetTestimoniesQuery();

  return (
    <section id="testimonies" className="py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Community Testimonies
            </h2>

            <p className="text-gray-600 text-sm">
              Read and share stories of transformation and encouragement from
              our community
            </p>
          </div>

          <button
            onClick={() => setShowShareModal(true)}
            className="bg-[#D4A34A] text-white px-5 py-2 rounded-md font-medium font-inter cursor-pointer transition hover:bg-[#D4A34A]/80 hover:scale-105"
          >
            Share your testimony
          </button>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="text-center py-10 text-gray-500">
            Loading testimonies...
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="text-center py-10 text-red-500">
            Failed to load testimonies
          </div>
        )}

        {/* Empty state */}
        {!isLoading && testimonies?.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-gray-200 rounded-lg bg-gray-50">

            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#D4A34A]/10 mb-4">
              <TestimonyIcon />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              No testimonies yet
            </h3>

            {/* Description */}
            <p className="text-gray-500 mb-4 max-w-sm">
              Be the first to share your experience and inspire others in the community.
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={() => setShowShareModal(true)}
              className="bg-[#D4A34A] text-white px-5 py-2 rounded-md font-medium transition hover:bg-[#D4A34A]/90"
            >
              Share your testimony
            </button>

          </div>
        )}

        {/* Testimonies Grid */}
        {!isLoading && testimonies && testimonies.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
            {testimonies.map((item) => (
              <div
                key={item.id}
                className="mb-6 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm"
              >
                {/* Image */}
                {item.photoUrl ? (
                  <img
                    src={getMediaUrl(item.photoUrl)}
                    alt={item.name}
                    className="w-full object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                )}

                {/* Content */}
                <div className="p-4 font-inter">
                  <p className="text-gray-700 font-semibold text-[15px] leading-relaxed mb-1">
                    {item.message}
                  </p>

                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    {item.name}

                    <Dot size={14} />

                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Share Testimony Modal */}
      {showShareModal && (
        <ShareTestimonyModal
          isOpen={showShareModal}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </section>
  );
};

export default CommunityTestimonies;