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
    addLabelToSelectedActions: (state, action) => {
      //TODO: figure out how this Immer stuff works to do this in a better way. Also prevent duplicate tags
      const emailProxies = Object.entries(state);
      emailProxies.forEach(proxy => {
        if (proxy[1].selected) {
          proxy[1].tags.push(action.payload.label);
        }
      });
    }
  },
});

export const { select, deselect, addLabelToSelectedActions } = emailSlice.actions;

//TODO: implement reselect
export const getEmails = state => Object.keys(state.emails).map(emailId => state.emails[emailId]);

export const getSelectedEmails = state => getEmails(state).filter(email => email.selected);

export const anyEmailSelected = state => getSelectedEmails(state).length > 0;

//TODO: break labels into its own state slice and precompute list from emails json
export const getLabels = state => {
  const allEmailsWithLabels = getEmails(state);
  const labels = [];
  allEmailsWithLabels.forEach(email => {
    email.tags.forEach(tag => {
      if (labels.some(label => label === tag)) {
        // do nothing, already in list
      } else {
        labels.push(tag);
      }
    });
  });
  return labels;
}

export default emailSlice.reducer;
