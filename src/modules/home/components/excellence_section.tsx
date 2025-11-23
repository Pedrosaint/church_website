import { useEffect, useState } from "react";
import { BookIcon, CertIcon, UserIcon } from "../../../assets/icons/svg_icons";

const stats = [
  {
    id: 1,
    icon: UserIcon,
    value: 850,
    suffix: "+",
    title: "Students",
    subtitle: "From around the world",
  },
  {
    id: 2,
    icon: BookIcon,
    value: 25,
    suffix: "+",
    title: "Programs",
    subtitle: "Undergraduate & Graduate",
  },
  {
    id: 3,
    icon: CertIcon,
    value: 34,
    suffix: "+",
    title: "Years",
    subtitle: "Of faithful ministry training",
  },
];

export default function ExcellenceSection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      const end = stat.value;
      const duration = 1500; // 1.5s animation
      const startTimestamp = performance.now();

      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * end);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  }, []);

  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold px-2">
        Excellence in Biblical Education
      </h2>

      <p className="text-gray-600 mt-3 max-w-xl mx-auto">
        For over three decades, we have been equipping men and women for
        ministry and service in God’s kingdom.
      </p>

      {/* Statistics */}
      <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center bg-[#f7f7fb] p-8 rounded-2xl shadow-sm"
          >
            {/* Circle Icon */}
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240] mb-4">
              <item.icon />
            </div>

            {/* Value */}
            <div className="text-4xl font-bold text-[#0A2240]">
              {counts[index]}
              {item.suffix}
            </div>

            {/* Title */}
            <p className="text-lg text-[#0A2240] font-semibold mt-1">
              {item.title}
            </p>

            {/* Subtitle */}
            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
