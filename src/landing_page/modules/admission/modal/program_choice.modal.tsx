import { X } from "lucide-react";

interface ProgramChoiceModalProps {
  onClose: () => void;
}

export default function ProgramChoiceModal({ onClose }: ProgramChoiceModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Program Choice</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 font-inter grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold">Program Level</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Program Level"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Mode of Study</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Mode of Study"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Study Duration</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Study Duration"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Preferred Start Date
            </label>
            <input
            type="date"
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            placeholder="Preferred Start Date"
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
