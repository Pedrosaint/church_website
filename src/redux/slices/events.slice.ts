import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

interface EventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const baseURL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseURL}/admin/events`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error",
      );
    }
  },
);

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError } = eventsSlice.actions;
export default eventsSlice.reducer;
