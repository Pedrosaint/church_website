import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface AdmissionFormData {
  programmeLevel: string;
  programmeChoice: string;
  surname: string;
  firstname: string;
  title: string;
  otherNames?: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  presentAddress: string;
  email: string;
  phone: string;
  permanentAddress: string;
  postalAddress: string;
  nationality: string;
  nativeLanguage: string;
  placeDiffNationality: boolean;
  maritalStatus: string;
  religion: string;
  denomination: string;
  parentGuardian: string;
  emergencyContact: string;
  emergencyPhone: string;
  nextOfKin: string;
  nextOfKinPhone: string;
  financeInfo: string;
  healthInfo: string;
  description?: string;
  academicReferee: string;
  academicProfession: string;
  academicInstitution: string;
  academicAddress: string;
  academicPhone: string;
  academicEmail: string;
  clergyReferee: string;
  clergyPosition: string;
  clergyChurch: string;
  clergyAddress: string;
  clergyPhone: string;
  clergyEmail: string;
  applicantSignature: string;
  applicantDate: string;
  education: EducationRecord[];
  certificates?: File[];
  passportPhotos?: File[];
}

export interface EducationRecord {
  institution: string;
  from: string;
  to: string;
  qualification: string;
}

export interface AdmissionData {
  id: string;
  programmeLevel: string;
  programmeChoice: string;
  surname: string;
  firstname: string;
  title: string;
  otherNames: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  presentAddress: string;
  email: string;
  phone: string;
  permanentAddress: string;
  postalAddress: string;
  nationality: string;
  nativeLanguage: string;
  placeDiffNationality: boolean;
  maritalStatus: string;
  religion: string;
  denomination: string;
  parentGuardian: string;
  emergencyContact: string;
  emergencyPhone: string;
  nextOfKin: string;
  nextOfKinPhone: string;
  financeInfo: string;
  healthInfo: string;
  description: string;
  academicReferee: string;
  academicProfession: string;
  academicInstitution: string;
  academicAddress: string;
  academicPhone: string;
  academicEmail: string;
  clergyReferee: string;
  clergyPosition: string;
  clergyChurch: string;
  clergyAddress: string;
  clergyPhone: string;
  clergyEmail: string;
  applicantSignature: string;
  applicantDate: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  education: EducationRecord[];
  certificates: Array<{
    id: string;
    admissionId: string;
    fileUrl: string;
  }>;
  passportPhotos: Array<{
    id: string;
    admissionId: string;
    fileUrl: string;
  }>;
}

export interface AdmissionResponse {
  success: boolean;
  data: AdmissionData;
}

export interface AdmissionsResponse {
  success: boolean;
  data: AdmissionData[];
}

const baseURL =
  import.meta.env.VITE_API_BASE_URL;

export const admissionApi = createApi({
  reducerPath: "admissionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ["Admissions"],
  endpoints: (builder) => ({
    submitAdmission: builder.mutation<AdmissionResponse, FormData>({
      query: (formData) => ({
        url: "/admissions",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Admissions"],
    }),
    getAdmissions: builder.query<AdmissionData[], void>({
      query: () => ({
        url: "/admissions",
        method: "GET",
      }),
      transformResponse: (response: AdmissionsResponse) => response.data,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "Admissions" as const, id })),
            { type: "Admissions", id: "LIST" },
          ]
          : [{ type: "Admissions", id: "LIST" }],
    }),
    getAdmissionById: builder.query<AdmissionData, string>({
      query: (id) => ({
        url: `/admissions/${id}`,
        method: "GET",
      }),
      transformResponse: (response: AdmissionResponse) => response.data,
      providesTags: (_result, _error, id) => [{ type: "Admissions", id }],
    }),
  }),
});

export const {
  useSubmitAdmissionMutation,
  useGetAdmissionsQuery,
  useGetAdmissionByIdQuery,
} = admissionApi;
