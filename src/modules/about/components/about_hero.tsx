import { ArrowRight, Star } from "lucide-react";
import ChurchBuilding from "../../../assets/images/church.png";
import { CircleIcon } from "../../../assets/icons/svg_icons";

const AboutHero = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B2545] leading-tight">
            About Our Seminary
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed w-[90%]">
            Equipping men and women for servant leadership in the church and
            world through rigorous theological education grounded in Scripture,
            shaped by tradition, and responsive to the contemporary challenges
            of ministry.
          </p>

          <button className="bg-[#D4A34A] hover:bg-[#c29344] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md transition">
            Our Story
            <ArrowRight className="w-5" />
          </button>
        </div>

        {/* RIGHT — EXACT COPY POSITIONING */}
        <div className="flex-1 relative h-[520px]">
          {/* TOP LEFT - LARGE */}
          <div className="absolute top-0 left-0 w-[240px] h-[260px] rounded-3xl overflow-hidden border-[6px] border-white shadow-xl">
            <img src={ChurchBuilding} className="w-full h-full object-cover" />
          </div>

          {/* TOP RIGHT - MEDIUM */}
          <div className="absolute top-[20px] right-0 w-[240px] h-[260px] rounded-3xl overflow-hidden border-[6px] border-white shadow-xl">
            <img src={ChurchBuilding} className="w-full h-full object-cover" />
          </div>

          {/* BOTTOM LEFT - MEDIUM */}
          <div className="absolute bottom-0 left-[20px] w-[240px] h-[230px] rounded-3xl overflow-hidden border-[6px] border-white shadow-xl">
            <img src={ChurchBuilding} className="w-full h-full object-cover" />
          </div>

          {/* GOLD capsule - CENTER */}
          <div className="absolute top-[160px] left-1/2 -translate-x-1/2 bg-[#D4A34A] rounded-full w-[140px] h-[50px] flex items-center justify-center gap-1 px-2">
            <CircleIcon />
          </div>

          {/* STAR - TOP LEFT */}
          <Star className="absolute left-[-20px] top-[220px] text-[#D4A34A] w-10 h-10 fill-[#D4A34A]" />

          {/* STAR - BOTTOM RIGHT */}
          <Star className="absolute bottom-[100px] right-[30px] text-[#D4A34A] w-8 h-8 fill-[#D4A34A]" />

          {/* SMALL NAVY CIRCLE - BOTTOM RIGHT */}
          <div className="absolute bottom-[50px] right-[60px] w-[14px] h-[14px] bg-[#0B2545] rounded-full" />

          {/* NAVY CIRCLE - TOP RIGHT (curved arrow origin) */}
          <div className="absolute top-[-10px] right-[-10px] w-[50px] h-[50px] bg-[#0B2545] rounded-full flex items-center justify-center">
            <div
              className="w-6 h-6 border-2 border-white rounded-full"
              style={{
                borderTopColor: "transparent",
                transform: "rotate(-45deg)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
