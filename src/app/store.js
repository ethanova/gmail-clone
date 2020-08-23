import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import emailReducer from '../features/emailList/emailSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    emails: emailReducer,
  },
});
