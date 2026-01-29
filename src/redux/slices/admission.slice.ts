import { createSlice } from "@reduxjs/toolkit";
import type { AdmissionResponse } from "../../landing_page/modules/admission/api/admission.api";

interface AdmissionState {
  application: AdmissionResponse["data"] | null;
  applications: AdmissionResponse["data"][];
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: AdmissionState = {
  application: null,
  applications: [],
  loading: false,
  error: null,
  success: false,
};

const admissionSlice = createSlice({
  name: "admission",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = false;
    },
    resetAdmission: (state) => {
      state.application = null;
      state.error = null;
      state.success = false;
    },
  },
});

export const { clearError, clearSuccess, resetAdmission } =
  admissionSlice.actions;
export default admissionSlice.reducer;
