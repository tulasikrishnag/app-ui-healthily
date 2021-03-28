import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conditions: [],
};

export const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    pushConditionsToStore: (state, action) => {
      state.conditions.push(...action.payload);
    },
  },
});

export const { pushConditionsToStore } = conditionsSlice.actions;
