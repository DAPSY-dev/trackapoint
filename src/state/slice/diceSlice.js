import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 2,
};

if (!localStorage.getItem('dice')) {
  localStorage.setItem('dice', JSON.stringify(initialState));
}

export const diceSlice = createSlice({
  name: 'dice',
  initialState: JSON.parse(localStorage.getItem('dice')),
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
      localStorage.setItem('dice', JSON.stringify(state));
    },
  },
});

export const { setCount } = diceSlice.actions;

export default diceSlice.reducer;
