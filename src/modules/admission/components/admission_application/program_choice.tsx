import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const ProgramChoice = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
const [value, setValue] = useState("");
  const [programLevel, setProgramLevel] = useState("");
  const [mode, setMode] = useState("on-campus");

  const programOptions = [
    "Certificate in Theology",
    "Diploma in Theology",
    "Bachelor of Theology (B.Th)",
    "Master of Theology (M.Th)",
    "Diploma in Religious Studies",
    "Diploma in Counseling",
    "Diploma in Counseling Psychology",
    "Christian Education Course",
    "Mission & Evangelism Course",
  ];

   const handleNext = () => {
     goToNext();
   };

  return (
    <div className="space-y-6">
      {/* Program Level */}
      <div>
        <label className="block font-medium text-[#0C1B47] mb-2 text-2xl">
          Program Level
        </label>

        <select
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none font-inter"
          value={programLevel}
          onChange={(e) => setProgramLevel(e.target.value)}
        >
          <option value="">Select Program Level</option>
          {programOptions.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Mode of Study */}
      <div className="font-inter">
        <label className="block font-medium text-[#0C1B47] mb-2">
          Mode of Study
        </label>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="mode"
              value="on-campus"
              checked={mode === "on-campus"}
              onChange={() => setMode("on-campus")}
              className="custom-radio"
            />
            <span className="text-gray-700">On-Campus</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="mode"
              value="online"
              checked={mode === "online"}
              onChange={() => setMode("online")}
              className="custom-radio"
            />
            <span className="text-gray-700">Online / Distance Learning</span>
          </label>
        </div>
      </div>

      {/* Study Duration */}
      <div className="font-inter">
        <label className="block font-medium text-[#0C1B47] mb-2">
          Study Duration
        </label>

        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
          <Clock className="text-gray-500" size={20} />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter experience"
            className="outline-none text-gray-700 w-full border-l border-gray-300 pl-4 pr-12 text-sm"
          />
        </div>
      </div>

      {/* Preferred Start Date */}
      <div className="font-inter">
        <label className="block font-medium text-[#0C1B47] mb-2">
          Preferred Start Date
        </label>

        <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-3">
          <Calendar className="text-gray-500" size={20} />
          <input
            type="date"
            className="bg-transparent w-full focus:outline-none text-gray-700"
            placeholder="2024-10-26"
          />
        </div>
      </div>

      {/* Short Essay */}
      <div className="font-inter">
        <label className="block font-medium text-[#0C1B47] mb-1">
          Why did you choose this program?
        </label>
        <p className="text-sm text-gray-500 mb-2">
          Short Essay (Max 300 words)
        </p>

        <textarea
          rows={4}
          placeholder="Please explain your motivation and goals..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none outline-none"
        ></textarea>
      </div>

      {/* ======================= BUTTONS ======================= */}
      <div className="flex justify-between mt-8">
        <button
          onClick={goToPrev}
          className="border border-[#D4A34A] text-[#D4A34A] px-6 py-2 rounded-xl cursor-pointer"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-[#D4A34A] px-6 py-2 rounded-xl text-[#0B2545] cursor-pointer font-inter"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default ProgramChoice;
