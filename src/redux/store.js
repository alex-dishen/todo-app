import { configureStore } from '@reduxjs/toolkit';
import collectionsReducer from './todoSlice';

const store = configureStore({
  reducer: {
    collections: collectionsReducer,
  },
});

export default store;
