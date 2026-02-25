import { ChevronRight, ChevronLeft } from "lucide-react";
import { useGetEventsQuery } from "../../api/events.api";
import { EventCard } from "./event_cards";
import { EventsEmptyState } from "./events_empty_state";
import type { Event } from "../../api/events.api";
import { useState } from "react";

export const UpcomingEvents = () => {
  const { data: events, isLoading: loading, error } = useGetEventsQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const EVENTS_PER_PAGE = 8;

  // const handleViewFullCalendar = () => {
  //   navigate("/events-calendar");
  // };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate pagination values
  const totalEvents = events?.length || 0;
  const totalPages = Math.ceil(totalEvents / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;
  const currentEvents = events?.slice(startIndex, endIndex) || [];

  // Reset to first page if current page exceeds total pages
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-600">
              Join us for upcoming events and experience our vibrant community
            </p>
          </div>
          {/* <button
            onClick={handleViewFullCalendar}
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#D4A34A] transition-colors"
          >
            View Full Calendar
            <ChevronRight size={20} />
          </button> */}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4A34A]"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            <p>Failed to load events. Please try again later.</p>
          </div>
        ) : events && events.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentEvents.map((event: Event, index: number) => (
                <EventCard
                  key={index}
                  date={new Date(event.date).getDate().toString()}
                  month={new Date(event.date).toLocaleString("default", {
                    month: "short",
                  })}
                  title={event.title}
                  category="Community"
                  categoryColor="bg-blue-100 text-blue-800"
                  location={event.location}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border ${currentPage === 1
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-[#D4A34A]"
                    } transition-colors`}
                >
                  <ChevronLeft size={20} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-lg border ${currentPage === page
                          ? "bg-[#D4A34A] text-white border-[#D4A34A]"
                          : "border-gray-300 text-gray-700 hover:bg-gray-100"
                        } transition-colors`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border ${currentPage === totalPages
                      ? "border-gray-200 text-gray-400 cursor-not-allowed"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-[#D4A34A]"
                    } transition-colors`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <EventsEmptyState />
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
