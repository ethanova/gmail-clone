import { createSlice } from '@reduxjs/toolkit';
import emails from '../../emails';

const processedEmailInput = {};
emails.forEach((email) => {
  processedEmailInput[email.id] = {
    ...email,
    selected: false,
    read: false,
    isDeleted: false, // TODO: implement trash
    inInbox: true, // TODO: implement archive
    isSpam: false, // TODO: implement spam
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
      // TODO: figure out how this Immer stuff works to do this better & prevent duplicate tags
      const emailProxies = Object.entries(state);
      emailProxies.forEach((proxy) => {
        if (proxy[1].selected) {
          proxy[1].tags.push(action.payload.label);
        }
      });
    },
    toggleSelectedEmailsReadStatus: (state, action) => {
      // TODO: figure out how this Immer stuff works to do this in a better way
      const emailProxies = Object.entries(state);
      emailProxies.forEach((proxy) => {
        if (proxy[1].selected) {
          proxy[1].read = !proxy[1].read;
        }
      });
    },
    deleteSelectedEmails: (state, action) => {
      // TODO: figure out how this Immer stuff works to do this in a better way
      const emailProxies = Object.entries(state);
      emailProxies.forEach((proxy) => {
        if (proxy[1].selected) {
          proxy[1].isDeleted = true;
          proxy[1].selected = false;
          proxy[1].inInbox = false;
          proxy[1].isSpam = false;
        }
      });
    },
    markSelectedEmailsAsSpam: (state, action) => {
      // TODO: figure out how this Immer stuff works to do this in a better way
      const emailProxies = Object.entries(state);
      emailProxies.forEach((proxy) => {
        if (proxy[1].selected) {
          proxy[1].isSpam = true;
          proxy[1].selected = false;
          proxy[1].inInbox = false;
          proxy[1].isDeleted = false;
        }
      });
    },
  },
});

export const {
  select,
  deselect,
  addLabelToSelectedActions,
  toggleSelectedEmailsReadStatus,
  deleteSelectedEmails,
  markSelectedEmailsAsSpam,
} = emailSlice.actions;

// TODO: implement reselect for performance
export const getAllEmails = (state) => Object.keys(state.emails).map((emailId) => state.emails[emailId]);

export const getInboxEmails = (state) => getAllEmails(state).filter((email) => !(email.isDeleted || email.isSpam));

export const getSpamEmails = (state) => getAllEmails(state).filter((email) => email.isSpam);

export const getTrashEmails = (state) => getAllEmails(state).filter((email) => email.isDeleted);

export const getSelectedEmails = (state) => getAllEmails(state).filter((email) => email.selected);

export const anyEmailSelected = (state) => getSelectedEmails(state).length > 0;

export const getLabels = (state) => {
  const allEmailsWithLabels = getAllEmails(state);
  const labels = [];
  allEmailsWithLabels.forEach((email) => {
    email.tags.forEach((tag) => {
      if (labels.some((label) => label === tag)) {
        // do nothing, already in list
      } else {
        labels.push(tag);
      }
    });
  });
  return labels;
};

export default emailSlice.reducer;
