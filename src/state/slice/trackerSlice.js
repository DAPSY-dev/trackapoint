import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: {
    min: 1,
    max: 4,
    winnerId: null,
    data: [
      {
        id: 0,
        points: 0,
        special: false,
      },
      {
        id: 1,
        points: 0,
        special: false,
      },
      {
        id: 2,
        points: 0,
        special: false,
      },
      {
        id: 3,
        points: 0,
        special: false,
      },
    ],
  },
  points: {
    min: 0,
    max: 10,
    incrementByAmount: [2, 3, 4, 5],
  },
};

if (!localStorage.getItem('tracker')) {
  localStorage.setItem('tracker', JSON.stringify(initialState));
}

export const trackerSlice = createSlice({
  name: 'tracker',
  initialState: JSON.parse(localStorage.getItem('tracker')),
  reducers: {
    increment: (state, action) => {
      if (state.players.data[action.payload.id].points + 1 >= state.points.max) {
        state.players.data[action.payload.id].points = state.points.max;
        state.players.winnerId = action.payload.id;
      } else {
        state.players.data[action.payload.id].points += 1;
      }
    },
    decrement: (state, action) => {
      if (state.players.data[action.payload.id].points - 1 <= state.points.min) {
        state.players.data[action.payload.id].points = state.points.min;
      } else {
        state.players.data[action.payload.id].points -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      if (state.players.data[action.payload.id].points + action.payload.amount >= state.points.max) {
        state.players.data[action.payload.id].points = state.points.max;
        state.players.winnerId = action.payload.id;
      } else {
        state.players.data[action.payload.id].points += action.payload.amount;
      }
    },
    toggleSpecial: (state, action) => {
      state.players.data[action.payload.id].special = !state.players.data[action.payload.id].special;
    },
    resetPlayers: (state) => {
      state.players.winnerId = null;
      state.players.data = initialState.players.data;
    },
    setPointsMax: (state, action) => {
      state.points.max = action.payload;
      localStorage.setItem('tracker', JSON.stringify(state));
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleSpecial, resetPlayers, setPointsMax } = trackerSlice.actions;

export default trackerSlice.reducer;
