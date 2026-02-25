import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  success: boolean;
  data: Event[];
}

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    getEvents: builder.query<Event[], void>({
      query: () => "/events",

      transformResponse: (response: EventsResponse) => response.data,
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: "Events" as const, id })),
            { type: "Events", id: "LIST" },
          ]
          : [{ type: "Events", id: "LIST" }],
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
