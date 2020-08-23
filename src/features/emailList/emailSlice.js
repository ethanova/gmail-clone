import { createSlice } from '@reduxjs/toolkit';
import emails from '../../emails';

const processedEmailInput = {};
emails.forEach(email => {
  processedEmailInput[email.id] = {
    ...email,
    selected: false,
    read: false,
    isDeleted: false, //TODO: implement trash
    inInbox: true,//TODO: implement archive
    isSpam: false,//TODO: implement spam
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

//TODO: implement reselect
export const getEmails = state => Object.keys(state.emails).map(emailId => state.emails[emailId]);

export const getSelectedEmails = state => getEmails(state).filter(email => email.selected);

export const anyEmailSelected = state => getSelectedEmails(state).length > 0;

export default emailSlice.reducer;
