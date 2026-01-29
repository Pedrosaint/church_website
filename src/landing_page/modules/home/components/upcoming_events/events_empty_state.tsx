import { Calendar } from "lucide-react";

export const EventsEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <Calendar className="w-16 h-16 text-gray-300 mb-4" />
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No Events Available
      </h3>
      <p className="text-gray-500 text-center">
        There are no upcoming events scheduled at the moment. Check back soon!
      </p>
    </div>
  );
};

export default EventsEmptyState;
