import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Testimony {
  id: string;
  name: string;
  email: string;
  message: string;
  photoUrl: string | null;
  status: string;
  createdAt: string;
}

export interface TestimonyResponse {
  success: boolean;
  data: Testimony;
}

export const moreApi = createApi({
  reducerPath: "moreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "https://api.waggom.org/api",
  }),
  endpoints: (builder) => ({
    submitTestimony: builder.mutation<TestimonyResponse, FormData>({
      query: (formData) => ({
        url: "/testimonies",
        method: "POST",
        body: formData,
      }),
    }),
    getTestimonies: builder.query<
      { success: boolean; data: Testimony[] },
      void
    >({
      query: () => ({ url: "/testimonies", method: "GET" }),
    }),
  }),
});

export const { useSubmitTestimonyMutation, useGetTestimoniesQuery } = moreApi;
