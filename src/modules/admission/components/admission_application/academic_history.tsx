/* eslint-disable @typescript-eslint/no-explicit-any */
import { UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";

interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

export default function AcademicHistory({
  goToNext,
  goToPrev,
}: AcademicHistoryProps) {
      const [transcript, setTranscript] = useState<File | null>(null);
      const [certificates, setCertificates] = useState<File[]>([]);

      const transcriptInputRef = useRef<HTMLInputElement | null>(null);
      const certificateInputRef = useRef<HTMLInputElement | null>(null);

      const handleTranscriptUpload = (
        e: React.ChangeEvent<HTMLInputElement>
      ) => {
        if (e.target.files && e.target.files[0]) {
          setTranscript(e.target.files[0]);
        }
      };

  const handleCertificateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return; // prevents the error

    setCertificates((prev) => [...prev, ...Array.from(files)]);
  };


      const removeTranscript = () => setTranscript(null);

      const removeCertificate = (index: number) => {
        setCertificates((prev) => prev.filter((_, i) => i !== index));
      };
  const [form, setForm] = useState({
    institutionName: "",
    institutionType: "",
    qualification: "",
    course: "",
    admissionYear: "",
    graduationYear: "",
    grade: "",
    church: "",
    ministryRole: "",
    yearsOfService: "",
    isInMinistry: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleNext = () => {
    goToNext();
  };

  return (
    <div className="">
      <div className="flex gap-3 justify-between">
        {/* ======================= PREVIOUS EDUCATION ======================= */}
        <div className="border border-gray-200 p-5 rounded-xl mb-6 w-full ">
          <h2 className="text-2xl font-semibold mb-4">Previous Education</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-inter">
            <input
              name="institutionName"
              placeholder="E.g. University of Calabar, University of Lagos, etc"
              value={form.institutionName}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />

            <select
              name="institutionType"
              value={form.institutionType}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            >
              <option value="">Select Type</option>
              <option value="Secondary School">Secondary School</option>
              <option value="Seminary">Seminary</option>
              <option value="University">University</option>
              <option value="Bible College">Bible College</option>
            </select>

            <input
              name="qualification"
              placeholder="E.g. SSCE, Diploma, B,TH,B.A, etc"
              value={form.qualification}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />

            <input
              name="course"
              placeholder="E.g. B.A. in Religious & Cultural Studies, B.Th. Pastoral Ministry, etc"
              value={form.course}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />

            <input
              type="date"
              name="admissionYear"
              placeholder="Admission Year"
              value={form.admissionYear}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />

            <input
              type="date"
              name="graduationYear"
              placeholder="Graduation Year"
              value={form.graduationYear}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />

            <input
              name="grade"
              placeholder="E.g First Class, GPA 4.0"
              value={form.grade}
              onChange={handleChange}
              className="border border-gray-200 p-2 rounded-xl w-full outline-none"
            />
          </div>
        </div>

        {/* ======================= MINISTERIAL BACKGROUND ======================= */}
        <div className="border border-gray-200 p-5 rounded-xl mb-6 w-full font-inter">
          <h2 className="text-xl font-medium mb-4">
            Ministerial Background (optional)
          </h2>

          {/* Toggle Switch */}
          <label className="flex items-center gap-3 cursor-pointer w-fit mb-4">
            <span className="font-medium">
              Are you currently involved in ministry?
            </span>

            <div className="relative">
              <input
                type="checkbox"
                name="isInMinistry"
                checked={form.isInMinistry}
                onChange={handleChange}
                className="sr-only"
              />
              <div
                className={`w-12 h-6 rounded-full transition ${
                  form.isInMinistry ? "bg-[#D4A34A]" : "bg-gray-300"
                }`}
              />
              <div
                className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white transition-all ${
                  form.isInMinistry ? "translate-x-6" : ""
                }`}
              />
            </div>
          </label>

          {/* Show ONLY if toggle is ON */}
          {form.isInMinistry && (
            <>
              {" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="">
                  <label className="block mb-1 font-semibold text-sm">
                    Church / Donamination
                  </label>
                  <input
                    name="church"
                    placeholder="Church / Denomination"
                    value={form.church}
                    onChange={handleChange}
                    className="border border-gray-200 p-2 rounded-xl w-full outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-sm mb-1">
                    Ministry Role / Position
                  </label>
                  <input
                    name="ministryRole"
                    placeholder="Ministry Role"
                    value={form.ministryRole}
                    onChange={handleChange}
                    className="border border-gray-200 p-2 rounded-xl w-full outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-1font-semibold text-sm">
                    Years of Service
                  </label>
                  <input
                    name="yearsOfService"
                    value={form.yearsOfService}
                    onChange={handleChange}
                    className="border border-gray-200 p-2 rounded-xl w-full outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ======================= UPLOADS SECTION ======================= */}
       <div className="w-full border border-gray-200 rounded-lg p-6 mx-auto font-inter">
      <h2 className="text-xl font-semibold text-[#0C1B47] mb-6">
        Uploads Section
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* ================= Academic Transcript (Single) ================= */}
        <div
          className="border border-[#D5D6DA] bg-[#FAFAFB] rounded-lg px-6 py-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => transcriptInputRef.current?.click()}
        >
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            ref={transcriptInputRef}
            onChange={handleTranscriptUpload}
            className="hidden"
          />

          <p className="font-semibold text-[#0C1B47] text-center">
            Upload Academic Transcript
          </p>
          <p className="text-sm text-gray-500 mb-4">
            PDF or JPG, Max size 5MB
          </p>

          {!transcript && (
            <div className="w-12 h-12 flex items-center justify-center text-gray-500">
              <UploadCloud size={32} />
            </div>
          )}

          {/* Preview */}
          {transcript && (
            <div className="mt-3 bg-white shadow p-3 rounded-lg w-full flex justify-between items-center">
              <span className="text-sm truncate">{transcript.name}</span>
              <button onClick={removeTranscript}>
                <X size={18} className="text-red-500" />
              </button>
            </div>
          )}
        </div>

        {/* ================= Certificates / Result Slip (Multiple) ================= */}
        <div
          className="border border-[#D5D6DA] bg-[#FAFAFB] rounded-lg px-6 py-4 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => certificateInputRef.current?.click()}
        >
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            multiple
            ref={certificateInputRef}
            onChange={handleCertificateUpload}
            className="hidden"
          />

          <p className="font-semibold text-[#0C1B47] text-center">
            Upload Certificate(s) / Result Slip
          </p>
          <p className="text-sm text-gray-500 mb-4">
            PDF or JPG, Multiple files allowed
          </p>

          {certificates.length === 0 && (
            <div className="w-12 h-12 flex items-center justify-center text-gray-500">
              <UploadCloud size={32} />
            </div>
          )}

          {/* File list */}
          {certificates.length > 0 && (
            <div className="mt-3 w-full flex flex-col gap-2">
              {certificates.map((file, index) => (
                <div
                  key={index}
                  className="bg-white shadow p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-sm truncate">{file.name}</span>
                  <button onClick={() => removeCertificate(index)}>
                    <X size={18} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
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
}
