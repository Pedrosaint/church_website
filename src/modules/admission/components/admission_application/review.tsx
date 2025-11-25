import { Edit, FileText } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../../modal/success.modal";
import PersonalInfoModal from "../../modal/personal_info.modal";
import AcademicHistoryModal from "../../modal/academic_history.modal";
import AdmissionReferenceModal from "../../modal/admission_ref";
import ProgramChoiceModal from "../../modal/program_choice.modal";
import UploadedDocumentsModal from "../../modal/upload_doc.modal";

const ReviewSubmitApplication = () => {
  const [showAcademicHistoryModal, setShowAcademicHistoryModal] = useState(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAdmissionReferenceModal, setShowAdmissionReferenceModal] = useState(false);
  const [showProgramChoiceModal, setShowProgramChoiceModal] = useState(false);
  const [showUploadedDocumentsModal, setShowUploadedDocumentsModal] = useState(false);



  const applicationData = {
    personal: {
      fullName: "James Osita Ejiofor",
      dateOfBirth: "MM/DD/YYYY",
      email: "jude@gmail.com",
      phone: "+234 **********",
      address: "Street Address",
      state: "Portharcourt",
      city: "Onitsha",
    },
    academic: {
      institution: "Logos Bible College",
      type: "Seminary",
      qualification: "Diploma",
      yearAdmission: "4-03-2021",
      yearGraduation: "4-03-2025",
      grade: "First Class",
      course: "4-03-2025",
      documents: [
        { name: "Result Slip.jpg", icon: "file" },
        { name: "Transcript.pdf", icon: "file" },
      ],
    },
  };

  return (
    <div className="py-8 md:px-4">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Review & Submit Application
          </h1>
          <p className="text-gray-600 text-sm font-inter">
            Please carefully review all the information below to ensure it's
            correct before submitting
          </p>
        </div>

        {/* ================= Personal Information Section ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Personal Information
            </h2>
            <button
             onClick={() => setShowPersonalInfoModal(true)}
             className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors cursor-pointer">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Full Name
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.fullName}
              </p>
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Date of Birth
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.dateOfBirth}
              </p>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Email Address
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.email}
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Phone Number
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.phone}
              </p>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Address
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.address}
              </p>
            </div>

            {/* State */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                State
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.state}
              </p>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                City
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.personal.city}
              </p>
            </div>
          </div>
        </div>

        {/*============ Academic History Section ===========*/}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Academic History
              </h2>
              <p className="text-xs text-gray-500 mt-1">Previous Education</p>
            </div>
            <button 
            onClick={() => setShowAcademicHistoryModal(true)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors cursor-pointer">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Full Name of Institution */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Full Name of Institution
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.institution}
              </p>
            </div>

            {/* Type of Institution */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Type of Institution
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.type}
              </p>
            </div>

            {/* Qualification Obtained */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Qualification Obtained
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.qualification}
              </p>
            </div>

            {/* Year of Admission */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Year of Admission
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.yearAdmission}
              </p>
            </div>

            {/* Year of Graduation */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Year of Graduation
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.yearGraduation}
              </p>
            </div>

            {/* Grade */}
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Grade
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.grade}
              </p>
            </div>

            {/* Course */}
            <div className="">
              <label className="block text-xs font-medium text-gray-500 mb-1">
                Course
              </label>
              <p className="text-gray-900 font-medium">
                {applicationData.academic.course}
              </p>
            </div>

            {/* Uploaded Documents */}
            <div className="">
              <div className="flex gap-4 mt-2">
                {applicationData.academic.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{doc.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= Admission Reference Section ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Admission Reference
            </h2>
            <button 
            onClick={() => setShowAdmissionReferenceModal(true)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors cursor-pointer">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          {/* +++++++++++++++++++++ Reference 1 +++++++++++++++++++++ */}
          <div className="mb-8">
            <h3 className="text-sm bg-gray-100 px-2 py-3 font-semibold text-gray-700 mb-4">
              Reference 1
            </h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Full Name
                </label>
                <p className="text-gray-900 font-medium">
                  Joshua Williams Kingsley
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Position
                </label>
                <p className="text-gray-900 font-medium">Seminarian</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Ministry Name
                </label>
                <p className="text-gray-900 font-medium">
                  Redeem Christian Church of God
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Phone Number
                </label>
                <p className="text-gray-900 font-medium">+234 9044523113</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Relationship to Applicant
                </label>
                <p className="text-gray-900 font-medium">Mentor</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mt-4">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Recommendation letter.pdf</span>
                </div>
              </div>
            </div>
          </div>

          {/* +++++++++++++++++++++ Reference 2 +++++++++++++++++++++ */}
          <div className=" rounded-lg ">
            <h3 className="text-sm bg-gray-100 px-2 py-3 font-semibold text-gray-700 mb-4">
              Reference 2
            </h3>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Full Name
                </label>
                <p className="text-gray-900 font-medium">
                  Joshua Williams Kingsley
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Position
                </label>
                <p className="text-gray-900 font-medium">Seminarian</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Ministry Name
                </label>
                <p className="text-gray-900 font-medium">
                  Redeem Christian Church of God
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Phone Number
                </label>
                <p className="text-gray-900 font-medium">+234 9044523113</p>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Relationship to Applicant
                </label>
                <p className="text-gray-900 font-medium">Mentor</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-600 mt-4">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">Recommendation letter.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Program Choice Section ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Program Choice
            </h2>
            <button 
            onClick={() => setShowProgramChoiceModal(true)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors cursor-pointer">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Program Level
                </label>
                <p className="text-gray-900 font-medium">Diploma in Theology</p>
              </div>

              <div className="bg-gray-100 rounded p-4">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Study Duration
                </label>
                <p className="text-gray-900 font-medium">3-4 years</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Mode of Study
                </label>
                <p className="text-gray-900 font-medium">On Campus</p>
              </div>

              <div className="bg-gray-100 rounded p-4">
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Resumption Date
                </label>
                <p className="text-gray-900 font-medium">4-03-2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Uploaded Documents Section ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Uploaded Documents
            </h2>
            <button 
            onClick={() => setShowUploadedDocumentsModal(true)}
            className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors cursor-pointer">
              <Edit className="w-4 h-4" />
              <span className="text-sm font-medium">Edit</span>
            </button>
          </div>

          <div className="space-y-4 font-inter">
            <div className="flex items-center gap-3 py-3 border-b border-gray-100">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">Passport.PNG</span>
            </div>

            <div className="flex items-center gap-3 py-3 border-b border-gray-100">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">Birth Certificate.jpg</span>
            </div>

            <div className="flex items-center gap-3 py-3">
              <FileText className="w-5 h-5 text-gray-400" />
              <span className="text-gray-700">National ID.jpg</span>
            </div>
          </div>
        </div>

        {/* ================= Payment Confirmation Section ================= */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm font-inter">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Payment Confirmation
            </h2>
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#D4A34A] transition-colors font-inter">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">View Receipt</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-inter">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                Payment Status
              </label>
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Paid
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                Amount
              </label>
              <p className="text-gray-900 font-semibold">₦100,000</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                Date
              </label>
              <p className="text-gray-900 font-medium">15 July 2025</p>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-500 mb-2">
                Receipt Number
              </label>
              <p className="text-gray-900 font-medium">WATHS-2025-8451</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-center gap-4 font-inter">
          <button 
          onClick={() => setShowSuccessModal(true)}
          className="w-full px-8 py-2 bg-[#D4A34A] hover:bg-[#C09340] text-[#0B2545] rounded-lg font-medium transition-colors cursor-pointer">
            Submit Application
          </button>

          <button className="px-6 py-2 border-2 border-[#D4A34A] text-[#D4A34A] rounded-lg font-medium transition-colors cursor-pointer">
            Download/Print Preview
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal  setShowSuccessModal={setShowSuccessModal} />}

      {/* Personal Info Modal */}
      {showPersonalInfoModal && <PersonalInfoModal onClose={() => setShowPersonalInfoModal(false)} />}

        {/* Academic History Modal */}
      {showAcademicHistoryModal && <AcademicHistoryModal onClose={() => setShowAcademicHistoryModal(false)} />}

        {/* Admission Reference Modal */}
      {showAdmissionReferenceModal && <AdmissionReferenceModal onClose={() => setShowAdmissionReferenceModal(false)} />}

        {/* Program Choice Modal */}
      {showProgramChoiceModal && <ProgramChoiceModal onClose={() => setShowProgramChoiceModal(false)} />}

        {/* Uploaded Documents Modal */}
      {showUploadedDocumentsModal && <UploadedDocumentsModal onClose={() => setShowUploadedDocumentsModal(false)} />}
    </div>
  );
};

export default ReviewSubmitApplication;
