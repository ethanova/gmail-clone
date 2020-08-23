import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('does not render toggle unread action icon when no email is selected', () => {
  const component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const toggleUnreadBtn = component.queryByTestId('toggle-unread');
  expect(toggleUnreadBtn).toBeNull();
});

//TODO: test for showing that button after selecting an email
