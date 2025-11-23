// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";
// import HeroImage from "../../../assets/images/hero.png"

// const slides = [
//   {
//     id: 1,
//     image: HeroImage,
//     title1: "Train.",
//     title2: "Serve.",
//     title3: "Lead.",
//     subtitle: "Serve the Church",
//     description: "train and raise end-time diplomats",
//   },
//   {
//     id: 2,
//     image: HeroImage,
//     title1: "Train.",
//     title2: "Serve.",
//     title3: "Lead.",
//     subtitle: "Serve the Church",
//     description: "train and raise end-time diplomats",
//   },
// ];

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-[950px] overflow-hidden">
//       {/* Image */}
//       <img
//         src={slides[currentSlide].image}
//         alt="hero"
//         className="w-full h-full object-cover"
//       />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-linear-to-r from-[#0B2545C9] to-[#0B25451F]"></div>

//       {/* Center bottom control bar */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
//         {/* Left button */}
//         <button
//           onClick={prevSlide}
//           className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
//         >
//           <ChevronLeft className="text-white" />
//         </button>

//         {/* dots + line indicator */}
//         <div className="flex items-center gap-3">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               className={`transition-all rounded-full ${
//                 currentSlide === index
//                   ? "w-12 h-3 bg-yellow-500"
//                   : "w-2 h-2 bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Right button */}
//         <button
//           onClick={nextSlide}
//           className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
//         >
//           <ChevronRight className="text-white" />
//         </button>

//         {/* Play button */}
//         <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition">
//           <Play className="text-white" />
//         </button>
//       </div>

//       {/* Text content */}
//       <div className="absolute top-1/2 md:left-5 xl:left-27 2xl:left-50 -translate-y-1/2 text-white space-y-4">
//         <h1 className="text-5xl md:text-7xl font-bold leading-tight flex gap-4">
//           <span className="block">{slides[currentSlide].title1}</span>
//           <span className="block">{slides[currentSlide].title2}</span>
//           <span className="block">{slides[currentSlide].title3}</span>
//         </h1>

//         <h2 className="text-2xl md:text-5xl font-semibold text-[#D4A34A]">
//           {slides[currentSlide].subtitle}
//         </h2>

//         <p className="text-lg opacity-90 md:text-2xl">
//           {slides[currentSlide].description}
//         </p>

//         <div className="flex gap-4 pt-2">
//           <button className="bg-[#D4A34A] text-black px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-[#D4A34A]/80 transition">
//             Apply Now
//           </button>

//           <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
//             Visit Student Portal
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


















import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import HeroImage from "../../../assets/images/hero.png";

const slides = [
  {
    id: 1,
    image: HeroImage,
    title1: "Train.",
    title2: "Serve.",
    title3: "Lead.",
    subtitle: "Serve the Church",
    description: "train and raise end-time diplomats",
  },
  {
    id: 2,
    image: HeroImage,
    title1: "Train.",
    title2: "Serve.",
    title3: "Lead.",
    subtitle: "Serve the Church",
    description: "train and raise end-time diplomats",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen md:h-[85vh] lg:h-[95vh] xl:h-screen overflow-hidden">
      {/* IMAGE */}
      <img
        src={slides[currentSlide].image}
        alt="hero"
        className="w-full h-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0B2545E6] to-[#0B254533]"></div>

      {/* CONTROL BAR */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronLeft className="text-white" />
        </button>

        {/* DOTS */}
        <div className="flex items-center gap-2 md:gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`transition-all rounded-full ${
                currentSlide === index
                  ? "w-8 md:w-12 h-3 bg-yellow-500"
                  : "w-2 h-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Play button */}
        <button className="hidden md:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center hover:bg-white/30 transition">
          <Play className="text-white" />
        </button>
      </div>

      {/* TEXT CONTENT */}
      <div className="absolute top-1/2 left-4 md:left-10 lg:left-20 -translate-y-1/2 text-white space-y-3 md:space-y-6 max-w-[90%] sm:max-w-[70%] lg:max-w-[45%]">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {slides[currentSlide].title1}{" "}
          <span className="inline-block">{slides[currentSlide].title2}</span>{" "}
          <span className="inline-block">{slides[currentSlide].title3}</span>
        </h1>

        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D4A34A]">
          {slides[currentSlide].subtitle}
        </h2>

        <p className="text-sm sm:text-lg md:text-xl opacity-90">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button className="bg-[#D4A34A] text-black px-5 py-3 rounded-md font-semibold cursor-pointer hover:bg-[#D4A34A]/80 transition text-sm sm:text-base">
            Apply Now
          </button>

          <button className="border border-white px-5 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition text-sm sm:text-base">
            Visit Student Portal
          </button>
        </div>
      </div>
    </div>
  );
}
