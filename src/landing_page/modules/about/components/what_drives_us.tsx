import { Calendar, Clock, Moon, Music } from "lucide-react";

const activities = [
  {
    icon: <Calendar className="w-6 h-6 text-[#D4A34A]" />,
    title: "General Fellowship",
    schedule: "Every Thursday",
    time: "5:00 PM",
    description:
      "Join us for our weekly fellowship gathering at the WAGGOM Temple of Praise.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#D4A34A]" />,
    title: "General Prayer and Fasting",
    schedule: "First Saturday of every month",
    time: "9:00 AM",
    description:
      "A dedicated time of corporate prayer and fasting before the Lord.",
  },
  {
    icon: <Moon className="w-6 h-6 text-[#D4A34A]" />,
    title: "Power Night",
    schedule: "Second Friday of every month",
    time: "10:00 PM",
    description:
      "An intense night of prayer, worship, and spiritual encounter.",
  },
  {
    icon: <Music className="w-6 h-6 text-[#D4A34A]" />,
    title: "Hour of Praises",
    schedule: "Third and Fourth Saturdays of every month",
    time: "",
    description:
      "A time of joyful praise and worship, lifting the name of the Lord in song.",
  },
];

const OurActivities = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Activities</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-inter">
            Join us at the WAGGOM Temple of Praise for any of our fellowship
            gatherings
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center shrink-0">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0B2545] mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-[#D4A34A] font-medium text-sm mb-1">
                    {activity.schedule}
                    {activity.time && ` \u2014 ${activity.time}`}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
