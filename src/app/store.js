import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailList/emailSlice';

export default configureStore({
  reducer: {
    emails: emailReducer,
  },
});
