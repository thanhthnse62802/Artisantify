import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slicers/couter.slicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
