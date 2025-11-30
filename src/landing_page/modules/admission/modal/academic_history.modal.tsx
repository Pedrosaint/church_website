import { X } from "lucide-react";

interface AcademicHistoryModalProps {
  onClose: () => void;
}

export default function AcademicHistoryModal({ onClose }: AcademicHistoryModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Academic History</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-inter">
          <div>
            <label className="text-sm font-semibold">Institution</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Institution"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Type</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Type of Institution"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Qualification</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Qualification"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Year of Admission</label>
            <input
            type="date"
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Year of Admission"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Year of Graduation</label>
            <input
            type="date"
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Year of Graduation"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Grade</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Grade"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Course</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Course"
            />
          </div>
        </div>

        <button className="mt-6 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter">
          Save Changes
        </button>
      </div>
    </div>
  );
}
