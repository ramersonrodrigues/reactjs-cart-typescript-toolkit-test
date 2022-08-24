import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  visible: boolean;
}

const initialState: CounterState = {
  visible: false
};


export const controlCheckoutSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    setIsVisible: (state, action) => {
      console.log("testando: ", action)
      state.visible = action.payload;
    },
  },
});

export const { setIsVisible } = controlCheckoutSlice.actions;

export default controlCheckoutSlice.reducer;
