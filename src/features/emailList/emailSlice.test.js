import * as emailSlice from './emailSlice';

test('getEmails() should return an array of emails instead of the denormalized by ID collection', () => {
  const emails = {
    1: { sender: 'Bob', subject: 'Hello world' },
  };
  const state = { emails };
  const result = emailSlice.getEmails(state);
  expect(result[0].sender).toBe('Bob');
});

test('getSelectedEmails() should return only emails which are selected', () => {
  const emails = {
    1: { sender: 'Bob', subject: 'Hello world', selected: false },
    2: { sender: 'George', subject: 'Hello Bob', selected: true },
  };
  const state = { emails };
  const result = emailSlice.getSelectedEmails(state);
  expect(result.length).toBe(1);
});

test('anyEmailSelected() should return true if at least one email is selected', () => {
  const emails = {
    1: { sender: 'Bob', subject: 'Hello world', selected: false },
    2: { sender: 'George', subject: 'Hello Bob', selected: true },
  };
  const state = { emails };
  const result = emailSlice.anyEmailSelected(state);
  expect(result).toBe(true);
});

test('anyEmailSelected() should return false if no emails are selected', () => {
  const emails = {
    1: { sender: 'Bob', subject: 'Hello world', selected: false },
    2: { sender: 'George', subject: 'Hello Bob', selected: false },
  };
  const state = { emails };
  const result = emailSlice.anyEmailSelected(state);
  expect(result).toBe(false);
});
