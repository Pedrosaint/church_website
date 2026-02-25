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

export interface TestimoniesResponse {
  success: boolean;
  data: Testimony[];
}

export const moreApi = createApi({
  reducerPath: "moreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["Testimonies"],
  endpoints: (builder) => ({
    submitTestimony: builder.mutation<TestimonyResponse, FormData>({
      query: (formData) => ({
        url: "/testimonies",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Testimonies"],
    }),

    getTestimonies: builder.query<Testimony[], void>({
      query: () => ({
        url: "/testimonies",
        method: "GET",
      }),
      transformResponse: (response: TestimoniesResponse) => response.data,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "Testimonies" as const, id })),
            { type: "Testimonies", id: "LIST" },
          ]
          : [{ type: "Testimonies", id: "LIST" }],
    }),

    getTestimony: builder.query<TestimonyResponse, { id: string }>({
      query: ({ id }) => ({ url: `/testimonies/${id}`, method: "GET" }),
      providesTags: (_result, _error, { id }) => [{ type: "Testimonies", id }],
    }),
  }),
});

export const { useSubmitTestimonyMutation, useGetTestimoniesQuery } = moreApi;
