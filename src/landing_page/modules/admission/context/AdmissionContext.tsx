import React, { createContext, useContext, useState } from "react";

interface AdmissionContextType {
  formData: Record<string, any>;
  updateFormData: (step: string, data: any) => void;
  getFormData: () => Record<string, any>;
}

const AdmissionContext = createContext<AdmissionContextType | undefined>(
  undefined,
);

export const AdmissionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>({
    programmeInfo: {},
    personalInfo: {},
    contactDetails: {},
    guardianInfo: {},
    education: [],
    financialReference: {},
  });

  const updateFormData = (step: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
  };

  const getFormData = () => formData;

  return (
    <AdmissionContext.Provider
      value={{ formData, updateFormData, getFormData }}
    >
      {children}
    </AdmissionContext.Provider>
  );
};

export const useAdmissionContext = () => {
  const context = useContext(AdmissionContext);
  if (!context) {
    throw new Error(
      "useAdmissionContext must be used within AdmissionProvider",
    );
  }
  return context;
};
