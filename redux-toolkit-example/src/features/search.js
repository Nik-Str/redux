import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = { search: [], loading: false, error: null };

export const searchSlice = createSlice({
  name: 'search',
  initialState: { value: initialStateValue },
  reducers: {
    loading: (state) => {
      state.value = { ...initialStateValue, loading: true };
    },
    result: (state, action) => {
      state.value = { ...initialStateValue, search: action.payload };
    },
    error: (state, action) => {
      state.value = { ...initialStateValue, error: action.payload };
    },
    clear: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { result, loading, error, clear } = searchSlice.actions;

export default searchSlice.reducer;
