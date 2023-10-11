import { configureStore } from '@reduxjs/toolkit';
import diceReducer from '@/state/slice/diceSlice.js';
import trackerReducer from '@/state/slice/trackerSlice.js';

export const store = configureStore({
  reducer: {
    dice: diceReducer,
    tracker: trackerReducer,
  },
});
