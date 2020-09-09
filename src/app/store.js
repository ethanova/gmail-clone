import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailList/emailSlice';
import menuReducer from '../features/menu/menuSlice';

export default configureStore({
  reducer: {
    emails: emailReducer,
    menu: menuReducer,
  },
});
