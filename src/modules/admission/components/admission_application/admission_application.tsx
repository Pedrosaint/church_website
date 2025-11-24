// import { useState } from "react";
// import Stepper from "./stepper";
// import PersonalInfo from "./personal_info";
// import AcademicHistory from "./academic_history";

// interface FormData {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   dateOfBirth: string;
//   email: string;
//   phone: string;
//   state: string;
//   address: string;
//   city: string;

//   institutionName: string;
//   institutionType: string;
//   qualification: string;
//   course: string;
//   admissionYear: string;
//   graduationYear: string;
//   grade: string;

//   church: string;
//   ministryRole: string;
//   yearsOfService: string;
//   isInMinistry: boolean;
// }


// export default function AdmissionApplication() {
//   const [currentStep, setCurrentStep] = useState(1);

//  const [formData, setFormData] = useState<FormData>({
//    firstName: "",
//    middleName: "",
//    lastName: "",
//    dateOfBirth: "",
//    email: "",
//    phone: "",
//    state: "",
//    address: "",
//    city: "",

//    institutionName: "",
//    institutionType: "",
//    qualification: "",
//    course: "",
//    admissionYear: "",
//    graduationYear: "",
//    grade: "",

//    church: "",
//    ministryRole: "",
//    yearsOfService: "",
//    isInMinistry: false,
//  });


  // const steps = [
  //   { num: 1, label: "Personal Info", completed: currentStep > 1 },
  //   { num: 2, label: "Academic History", completed: currentStep > 2 },
  //   { num: 3, label: "Program Choice", completed: currentStep > 3 },
  //   { num: 4, label: "Document Upload", completed: currentStep > 4 },
  //   { num: 5, label: "References", completed: currentStep > 5 },
  //   { num: 6, label: "Payment", completed: currentStep > 6 },
  //   { num: 7, label: "Review & Submit", completed: false },
  // ];

// const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// ) => {
//   const { name, value, type } = e.target;

//   setFormData((prev) => ({
//     ...prev,
//     [name]:
//       type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//   }));
// };


//   const renderStep = () => {
//     if (currentStep === 1)
//       return (
//         <PersonalInfo
//           formData={formData}
//           onChange={handleChange}
//           goToNextStep={() => setCurrentStep((prev) => prev + 1)}
//         />
//       );

//       if (currentStep === 2)
//         return (
//           <AcademicHistory
//             formData={formData}
//             onChange={handleChange}
//             goToNextStep={() => setCurrentStep((prev) => prev + 1)}
//             goToPrevStep={() => setCurrentStep((prev) => prev - 1)}
//           />
//         );
//   };

//   return (
//     <div className="py-8">
//       <div className="container mx-auto px-4">
//         <Stepper steps={steps} currentStep={currentStep} />

//         <div className="mx-auto max-w-7xl py-4">{renderStep()}</div>
//       </div>
//     </div>
//   );
// }





import { useState } from "react";
import PersonalInfo from "./personal_info";
import AcademicHistory from "./academic_history";
import Stepper from "./stepper";
import ProgramChoice from "./program_choice";
import DocumentUploadForm from "./document_upload";
import ReferencesForm from "./admission_reference";
import ApplicationFeePayment from "./payment";



export default function AdmissionApplication() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { num: 1, label: "Personal Info", completed: currentStep > 1 },
    { num: 2, label: "Academic History", completed: currentStep > 2 },
    { num: 3, label: "Program Choice", completed: currentStep > 3 },
    { num: 4, label: "Document Upload", completed: currentStep > 4 },
    { num: 5, label: "References", completed: currentStep > 5 },
    { num: 6, label: "Payment", completed: currentStep > 6 },
    { num: 7, label: "Review & Submit", completed: false },
  ];

  const next = () => setCurrentStep((p) => p + 1);
  const prev = () => setCurrentStep((p) => p - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo goToNext={next} />;
      case 2:
        return <AcademicHistory goToNext={next} goToPrev={prev} />;
      case 3:
        return <ProgramChoice  goToNext={next} goToPrev={prev} />;
        case 4:
        return <DocumentUploadForm goToNext={next} goToPrev={prev} />;
        case 5:
        return <ReferencesForm goToNext={next} goToPrev={prev} />;
        case 6:
        return <ApplicationFeePayment goToNext={next} goToPrev={prev} />;
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="max-w-7xl mx-auto mt-6">{renderStep()}</div>
      </div>
    </div>
  );
}
