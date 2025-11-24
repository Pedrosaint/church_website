/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Upload } from "lucide-react";

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const ReferencesForm = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
  const [reference1, setReference1] = useState<{
    fullName: string;
    position: string;
    church: string;
    email: string;
    phone: string;
    relationship: string;
    letter: File | null;
  }>({
    fullName: "",
    position: "",
    church: "",
    email: "",
    phone: "",
    relationship: "",
    letter: null,
  });


  const [reference2, setReference2] = useState({
    fullName: "",
    position: "",
    institution: "",
    email: "",
    phone: "",
    relationship: "",
  });

  const [consent, setConsent] = useState(false);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setReference1({ ...reference1, letter: file });
    }
  };

  const handleNext = () => {
    goToNext();
  };

  return (
    <div className="py-8 px-4 font-inter">
      <div className="space-y-6">
        {/* ======================= REFERENCE 1 - Pastor or Church Leader ======================= */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#0B2545] text-white px-6 py-3">
            <h2 className="text-lg font-bold">
              REFERENCE 1 - Pastor or Church Leader
            </h2>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={reference1.fullName}
                  onChange={(e) =>
                    setReference1({ ...reference1, fullName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Position/Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Position / Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  value={reference1.position}
                  onChange={(e) =>
                    setReference1({ ...reference1, position: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Church/Ministry Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Church / Ministry Name
                </label>
                <input
                  type="text"
                  placeholder="Church / Ministry Name"
                  value={reference1.church}
                  onChange={(e) =>
                    setReference1({ ...reference1, church: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={reference1.email}
                  onChange={(e) =>
                    setReference1({ ...reference1, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={reference1.phone}
                  onChange={(e) =>
                    setReference1({ ...reference1, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>
            </div>

            {/* Relationship to Applicant */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Relationship to Applicant
              </label>
              <select
                value={reference1.relationship}
                onChange={(e) =>
                  setReference1({ ...reference1, relationship: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none bg-white"
              >
                <option value="">Relationship to Applicant</option>
                <option value="pastor">Pastor</option>
                <option value="church-leader">Church Leader</option>
                <option value="ministry-leader">Ministry Leader</option>
                <option value="spiritual-mentor">Spiritual Mentor</option>
              </select>
            </div>

            {/* Recommendation Letter */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Recommendation Letter{" "}
                <span className="font-normal">(Optional)</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="bg-[#D4A34A] hover:bg-[#C09340] text-white px-6 py-2 rounded cursor-pointer transition-colors flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload File
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload}
                  />
                </label>
                <span
                  className={`text-sm px-3 py-1 rounded-md border ${
                    reference1.letter
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-100 text-gray-500 border-gray-200"
                  }`}
                >
                  {reference1.letter
                    ? reference1.letter.name
                    : "No file chosen"}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Accepts PDF, JPG, PNG, max 5MB
              </p>
            </div>
          </div>
        </div>

        {/* ======================= REFERENCE 2 - Academic or Professional ======================= */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#0B2545] text-white px-6 py-3">
            <h2 className="text-lg font-bold">
              REFERENCE 2 - Academic or Professional
            </h2>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={reference2.fullName}
                  onChange={(e) =>
                    setReference2({ ...reference2, fullName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Position/Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Position / Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  value={reference2.position}
                  onChange={(e) =>
                    setReference2({ ...reference2, position: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Institution/Organization */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  placeholder="Institution / Organization"
                  value={reference2.institution}
                  onChange={(e) =>
                    setReference2({
                      ...reference2,
                      institution: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  value={reference2.email}
                  onChange={(e) =>
                    setReference2({ ...reference2, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  value={reference2.phone}
                  onChange={(e) =>
                    setReference2({ ...reference2, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none"
                />
              </div>

              {/* Relationship to Applicant */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Relationship to Applicant
                </label>
                <select
                  value={reference2.relationship}
                  onChange={(e) =>
                    setReference2({
                      ...reference2,
                      relationship: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none outline-none bg-white"
                >
                  <option value="">Relationship to Applicant</option>
                  <option value="professor">Professor</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="colleague">Colleague</option>
                  <option value="manager">Manager</option>
                  <option value="academic-advisor">Academic Advisor</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* ======================= Consent Section ======================= */}
        <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-[#0B2545] text-white px-6 py-3">
            <h2 className="text-lg font-bold">Consent</h2>
          </div>

          <div className="p-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-5 h-5 border-2 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">
                I confirm that the referees listed above have agreed to be
                contacted.
              </span>
            </label>
          </div>
        </div>
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

export default ReferencesForm;
