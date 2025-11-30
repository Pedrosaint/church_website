import { X } from "lucide-react";

interface PersonalInfoModalProps {
  onClose: () => void;
}

export default function PersonalInfoModal({ onClose }: PersonalInfoModalProps) {

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-2">
      <div className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Edit Personal Information</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3 font-inter">
          <div>
            <label className="text-sm font-semibold">Firsr Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="First Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Middle Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Middle Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Last Name</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Last Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Date of Birth</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Date of Birth"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Address</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="Address"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">State</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="State"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">City</label>
            <input
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
              placeholder="City"
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
