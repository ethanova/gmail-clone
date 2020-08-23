import { createSlice } from '@reduxjs/toolkit';
import emails from '../../emails';

const processedEmailInput = {};
emails.forEach(email => {
  processedEmailInput[email.id] = {
    ...email,
    selected: false
  };
});

export const emailSlice = createSlice({
  name: 'emails',
  initialState: processedEmailInput,
  reducers: {
    select: (state, action) => {
      state[action.payload.emailId].selected = true;
    },
    deselect: (state, action) => {
      state[action.payload.emailId].selected = false;
    },
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { select, deselect } = emailSlice.actions;

export const getEmails = state => Object.keys(state.emails).map(emailId => state.emails[emailId]);

export default emailSlice.reducer;
