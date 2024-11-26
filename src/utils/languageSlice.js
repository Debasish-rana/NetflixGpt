import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    languageConfigure: (state, action) => {
      state.lang = action.payload; // Updating the correct property
    },
  },
});

export const { languageConfigure } = languageSlice.actions;
export default languageSlice.reducer;
