import { X } from "lucide-react";

interface AdmissionReferenceModalProps {
  onClose: () => void;
}

export default function AdmissionReferenceModal({ onClose }: AdmissionReferenceModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Admission References</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reference 1 */}
        <h3 className="text-lg font-semibold mb-2 font-inter">Reference 1</h3>
        <div className="space-y-3 mb-6 font-inter grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Position</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Position"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Church / Ministry Name
            </label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Church / Ministry Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Relationship to Applicant
            </label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Mentor"
            />
          </div>
        </div>

        {/* Reference 2 */}
        <h3 className="text-lg font-semibold mb-2 font-inter">Reference 2</h3>
        <div className="space-y-3 mb-6 font-inter grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Position</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Position"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Church / Ministry Name
            </label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Church / Ministry Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">
              Relationship to Applicant
            </label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Mentor"
            />
          </div>
        </div>

        <button className="mt-4 w-full bg-[#D4A34A] text-white p-2 rounded-lg font-inter">
          Save Changes
        </button>
      </div>
    </div>
  );
}
