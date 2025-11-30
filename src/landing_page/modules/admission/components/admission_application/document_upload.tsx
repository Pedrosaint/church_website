/* eslint-disable react-hooks/static-components */
import { useState } from "react";
import { AlertCircle, Info } from "lucide-react";
import { IoCameraOutline } from "react-icons/io5";
import { PiIdentificationCardThin } from "react-icons/pi";
import { FiFileText } from "react-icons/fi";
import { Upload as UploadIcon } from "lucide-react";
import { FaEnvelope } from "react-icons/fa";

interface FileState {
  [key: string]: File | null;
}

interface ErrorState {
  [key: string]: string | null;
}

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const formatAcceptString = (formats: string) =>
  formats
    .replace(/[()]/g, "")
    .split(",")
    .map((f) => `.${f.trim().toLowerCase()}`)
    .join(",");

const DocumentUploadForm = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
  const [files, setFiles] = useState<FileState>({
    passport: null,
    birth: null,
    academic: null,
    transcript: null,
    recommendation: null,
    identity: null,
  });

  const [errors, setErrors] = useState<ErrorState>({});

  const handleFileChange = (field: string, file: File | null) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setErrors((prev) => ({
        ...prev,
        [field]: "File too large. Max size is 5MB.",
      }));
      return;
    }

    setFiles((prev) => ({ ...prev, [field]: file }));
    setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, field: string) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileChange(field, file);
  };

  type IconType = React.ElementType;

  const UploadBox = ({
    field,
    label,
    formats = "",
    notes = "",
    Icon,
  }: {
    field: string;
    label: string;
    formats?: string;
    notes?: string;
    Icon?: IconType;
  }) => (
    <div className="mb-6 font-inter flex flex-col md:flex-row justify-between gap-1">
      <div className=" w-full">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-gray-800 font-semibold">{label}</label>
          <Info className="w-4 h-4 text-[#D4A34A]" />
        </div>
        <p className="text-sm text-gray-500">{notes}</p>
      </div>

      <div className="w-full">
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, field)}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            errors[field]
              ? "border-red-300 bg-red-50"
              : "border-gray-300 bg-gray-50"
          } hover:border-[#D4A34A]`}
          onClick={() => document.getElementById(field)?.click()}
        >
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            {Icon ? (
              <Icon className="w-5 h-5 text-[#D4A34A]" />
            ) : (
              <UploadIcon className="w-5 h-5 text-[#D4A34A]" />
            )}
            <span className="text-sm">
              Drag & Drop or Choose File {formats}
            </span>
          </div>

          {files[field] && (
            <p className="text-sm text-green-600 mb-2">
              ✓ {files[field]?.name}
            </p>
          )}

          {errors[field] && (
            <div className="flex items-center justify-center gap-2 mt-2 text-red-600 text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>{errors[field]}</span>
            </div>
          )}
        </div>

        <input
          type="file"
          id={field}
          className="hidden"
          onChange={(e) => handleFileChange(field, e.target.files?.[0] || null)}
          accept={formats ? formatAcceptString(formats) : undefined}
        />
      </div>
    </div>
  );

  const handleNext = () => {
    goToNext();
  };

  return (
    <div className="py-8">
      <div className="border border-gray-200 rounded-xl p-5 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Required Documents</h2>

        <UploadBox
          field="passport"
          label="Passport Photograph"
          formats="JPG, PNG"
          notes="Recent color photograph with a white background."
          Icon={IoCameraOutline}
        />

        <UploadBox
          field="birth"
          label="Birth Certificate / Age Declaration"
          formats="PDF, JPG"
          Icon={FiFileText}
        />

        <UploadBox
          field="academic"
          label="Academic Certificates"
          formats="PDF, JPG"
          Icon={FiFileText}
        />

        <UploadBox
          field="transcript"
          label="Transcript"
          formats="PDF, JPG"
          notes="Optional for Certificate/Diploma; Required for B.Th and M.Th"
          Icon={FiFileText}
        />

        <UploadBox
          field="recommendation"
          label="Recommendation Letter"
          formats="PDF, JPG"
          notes="Optional"
          Icon={FaEnvelope}
        />

        <UploadBox
          field="identity"
          label="Identity Document"
          formats="PDF, JPG, PNG"
          notes="National ID or Voter's Card"
          Icon={PiIdentificationCardThin}
        />

        {/* Upload Notes */}
        <div className="bg-[#0B2545] rounded-lg p-6 mt-8 font-inter">
          <h3 className="text-white font-semibold mb-3">Upload Notes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-start gap-2 text-white text-sm mb-2">
                <Info className="w-4 h-4 mt-0.5 text-[#D4A34A]" />
                <span>Max file size: 5MB per document.</span>
              </div>
              <div className="flex items-start gap-2 text-white text-sm">
                <Info className="w-4 h-4 mt-0.5 text-[#D4A34A]" />
                <span>Allowed formats: PDF, JPG, PNG.</span>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2 text-white text-sm mb-2">
                <Info className="w-4 h-4 mt-0.5 text-[#D4A34A]" />
                <span>Ensure documents are clear and legible.</span>
              </div>
              <div className="flex items-start gap-2 text-white text-sm">
                <Info className="w-4 h-4 mt-0.5 text-[#D4A34A]" />
                <span>Use the help icons for specific guidance.</span>
              </div>
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
    </div>
  );
};

export default DocumentUploadForm;
