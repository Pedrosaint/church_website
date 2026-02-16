import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Event {
    id: string;
    date: string;
    month: string;
    title: string;
    category: string;
    categoryColor: string;
    time?: string;
    location: string;
}

export interface EventsResponse {
    success: boolean; // Assuming standard response structure based on more.api.ts
    data: Event[];
    // If the API returns the array directly, I will adjust.
    // The old slice did: const data = await response.json(); return data;
    // If the API returns strict array, then response type is just Event[].
    // existing slice: const data = await response.json(); return data;
    // If the old slice worked, and it returns data directly, I should check what the backend returns.
    // But usually wrapped in { success, data } or similar.
    // The user's `more.api.ts` had { success: boolean, data: Testimony[] }.
    // I will assume { map: ... } if it's an array or object.
    // The slice just returns `data`.
    // Wait, line 31: `response = await fetch(...)`, `data = await response.json()`, `return data`.
    // And state.events = action.payload.
    // So action.payload IS the events array? Or includes metadata?
    // `upcoming_events.tsx` uses `events.slice(0, 2)`. This implies `events` is an array.
    // So `data` returned from fetch IS likely the array OR contains an array property `events`.
    // If `state.events = action.payload`, and `state.events` is `Event[]` (line 15), then `action.payload` MUST be `Event[]`.
    // So the API returns an array directly.
}

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => "/admin/events",
        }),
    }),
});

export const { useGetEventsQuery } = eventsApi;
