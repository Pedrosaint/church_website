import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/slice/auth.slice";
import admissionReducer from "./slices/admission.slice";
import { admissionApi } from "../landing_page/modules/admission/api/admission.api";
import { moreApi } from "../landing_page/modules/more/api/more.api";
import { eventsApi } from "../landing_page/modules/home/api/events.api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    admission: admissionReducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [moreApi.reducerPath]: moreApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      admissionApi.middleware,
      moreApi.middleware,
      eventsApi.middleware
    ),
});

// Types for TypeScript apps
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
