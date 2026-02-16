import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useGetEventsQuery } from "../../api/events.api";
import { EventCard } from "./event_cards";
import { EventsEmptyState } from "./events_empty_state";
import type { Event } from "../../api/events.api";

export const UpcomingEvents = () => {
  const navigate = useNavigate();
  const { data: events, isLoading: loading, error } = useGetEventsQuery();

  const handleViewFullCalendar = () => {
    navigate("/events-calendar");
  };

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
          <button
            onClick={handleViewFullCalendar}
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-[#D4A34A] transition-colors"
          >
            View Full Calendar
            <ChevronRight size={20} />
          </button>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {events.slice(0, 2).map((event: Event, index: number) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        ) : (
          <EventsEmptyState />
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
