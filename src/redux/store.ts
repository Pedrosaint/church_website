import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/slice/auth.slice";
import eventsReducer from "./slices/events.slice";
import admissionReducer from "./slices/admission.slice";
import { admissionApi } from "../landing_page/modules/admission/api/admission.api";
import { moreApi } from "../landing_page/modules/more/api/more.api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    admission: admissionReducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [moreApi.reducerPath]: moreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(admissionApi.middleware, moreApi.middleware),
});

// Types for TypeScript apps
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
