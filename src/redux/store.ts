import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import controlCheckoutSlice from 'redux/slices/controlCheckoutSlice';
import getProductsSlice from 'redux/slices/getProductsSlice';
import cartSlice from 'redux/slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    controlCheckoutSlice: controlCheckoutSlice,
    getProductsSlice: getProductsSlice,
    cartSlice: cartSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
