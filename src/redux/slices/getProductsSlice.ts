import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from "axios";

export type Product = {
  id: number,
  name: string,
  brand: string,
  description: string,
  price: number,
  photo: string
}

export interface InitialState {
  loading: boolean,
  error: string,
  products: Product[] | any
}

const initialState = {
  loading: false,
  error: '',
  products: []
};


export const getProducts = createAsyncThunk(
  'getProducts/fetchProducts', () => {
    return axios.get("https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=name&orderBy=ASC")
      .then((response) => response.data)
  }
);

export const getProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[] | any>) => {
      state.loading = false;
      state.products = action.payload.products;
      state.error = ''
    })
    builder.addCase(getProducts.rejected, (state) => {
      state.error = 'Problemas ao buscar produtos.';
    });
  },
});

export default getProductsSlice.reducer;
