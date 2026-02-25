import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useGetEventsQuery } from "../home/api/events.api";
import { EventCard } from "../home/components/upcoming_events/event_cards";
import { EventsEmptyState } from "../home/components/upcoming_events/events_empty_state";
import type { Event } from "../home/api/events.api";

export const EventsCalendarView = () => {
  const navigate = useNavigate();
  const { data: events, isLoading: loading, error } = useGetEventsQuery();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days = [];
  const totalDays = daysInMonth(currentMonth, currentYear);
  const firstDay = firstDayOfMonth(currentMonth, currentYear);

  // Add empty cells for days before the month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#0B2545] font-medium mb-6 hover:text-[#D4A34A] transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Events Calendar
          </h1>
          <p className="text-gray-600">
            Browse all upcoming events and plan your schedule
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* Month/Year Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
                <h2 className="text-xl font-bold text-gray-900">
                  {monthNames[currentMonth]} {currentYear}
                </h2>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight size={20} className="text-gray-700" />
                </button>
              </div>

              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-sm font-semibold text-gray-600 py-2"
                    >
                      {day}
                    </div>
                  ),
                )}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className={`aspect-square flex items-center justify-center text-sm rounded-lg ${
                      day === null
                        ? ""
                        : "bg-gray-50 text-gray-700 hover:bg-[#D4A34A] hover:text-white transition-colors cursor-pointer font-medium"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4A34A]"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                <p>Failed to load events. Please try again later.</p>
              </div>
            ) : events && events.length > 0 ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  All Events
                </h3>
                {events.map((event: Event, index: number) => (
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
            ) : (
              <EventsEmptyState />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendarView;
