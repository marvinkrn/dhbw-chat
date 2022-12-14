import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

// Store = Layer

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer, // Reducer listens to actions (z.B. Login)
  },
});
