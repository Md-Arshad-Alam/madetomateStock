import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  list: [],
};
const crudSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload)
    },
  },
});

export const { addUser } = crudSlice.actions;

export default crudSlice.reducer;