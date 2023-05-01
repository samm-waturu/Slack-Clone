import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: 1,
  // status: 'idle'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload;
    },
    // leaveRoom: (state) => {
    //   state.roomId = null;
    // }
  }

});

export const { enterRoom } = appSlice.actions;

export const selectRoomState = (state) => state.app.roomId;

export default appSlice.reducer;
