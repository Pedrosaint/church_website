import { ArrowRight } from "lucide-react";
import AboutHeroImg1 from "../../../../assets/images/featured-img-1.jpg";
import AboutHeroImg2 from "../../../../assets/images/featured-img-2.jpg";
import AboutHeroImg3 from "../../../../assets/images/featured-img-3.jpg";
import { CircleIcon } from "../../../../assets/icons/svg_icons";
import { GoArrowDownRight } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";

const AboutHero = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B2545] leading-tight">
            Who We Are
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed w-[90%]">
            Welcome to The Way to God Gospel Ministry (WAGGOM). We are an
            interdenominational Christian ministry, a family of believers from
            different church backgrounds united by a common passion for Christ
            and His kingdom.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed w-[90%]">
            Founded on September 14, 1981, WAGGOM is a missions-oriented
            ministry with a vision to reach the unreached with the Gospel of
            Jesus Christ and to help existing denominations grow into the full
            image and stature of our Lord Jesus Christ.
          </p>

          <div className="bg-[#0B2545]/5 border-l-4 border-[#D4A34A] p-4 rounded-r-lg">
            <p className="text-[#0B2545] italic font-medium">
              "And I, if I be lifted up from the earth, will draw all men unto
              me."
            </p>
            <p className="text-gray-500 text-sm mt-1">— John 12:32</p>
          </div>

          <button
            onClick={() => {
              const section = document.getElementById("our-beliefs");
              if (section) {
                const yOffset = -160;
                const y =
                  section.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="bg-[#D4A34A] hover:bg-[#c29344] text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-md transition"
          >
            Our Beliefs
            <ArrowRight className="w-5" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative h-[520px] hidden md:block">
          <div className="absolute top-10 left-0 w-70 h-[290px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg3} className="w-full h-full object-cover" />
          </div>

          <IoStarSharp className="absolute -left-12 top-72 text-[#D4A34A] w-7 h-7 fill-[#D4A34A]" />

          <div className="absolute top-2.5 right-73 w-[70px] h-[70px] bg-[#0B2545] rounded-full border-6 border-white flex items-center justify-center z-10">
            <GoArrowDownRight color="white" size={30} />
          </div>

          <div className="absolute top-30 right-6 w-70 h-[290px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg2} className="w-full h-full object-cover" />
          </div>

          <div className="absolute -bottom-12 -left-10 w-100 h-[220px] rounded-3xl overflow-hidden">
            <img src={AboutHeroImg1} className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-83 right-25 -translate-x-1/2 bg-[#D4A34A] rounded-l-full rounded-tr-full w-[210px] h-25 flex items-center justify-center gap-1 px-2 border-16 border-white">
            <CircleIcon />
          </div>

          <IoStarSharp className="absolute bottom-[50px] right-42 text-[#D4A34A] w-8 h-8 fill-[#D4A34A]" />
          <div className="absolute bottom-2 right-[60px] w-5 h-5 bg-[#0B2545] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
