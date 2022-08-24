import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './getProductsSlice';

export interface InitialState {
  data: Product[] | any
}



const initialState: InitialState = {
  data: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    setProduct: (state, action: PayloadAction<Product> | any) => {
      console.log("setProduct: ", action)
      state.data.push(action.payload)
    },
    removeProductUnd: (state, action: PayloadAction<number> | any) => {
      console.log("removeProduct: ", action)
      let response = state.data.findIndex((item: Product) => item.id === action.payload)
      state.data.splice(response, 1)
    },
    removeProduct: (state, action: PayloadAction<string> | any) => {
      console.log("removeProduct: ", action)
      let filtered = state.data.filter((item: Product) => item.name !== action.payload);
      console.log("filtered", filtered)
      state.data = filtered
    },
  },
});

export const { setProduct, removeProduct, removeProductUnd } = cartSlice.actions;

export default cartSlice.reducer;
