import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';
import themeSlice from '../features/themeSlice';

//Store = layer

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer, //Reducer listens to actions (z.b. login)
    theme: themeSlice,
  },
});
