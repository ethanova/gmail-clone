import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { route: '/' },
  reducers: {
    goTo: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const {
  goTo,
} = menuSlice.actions;

export const routes = {
  INBOX: '/',
  SPAM: '/spam',
  TRASH: '/deleted',
};

// TODO: implement reselect
export const getRoute = (state) => state.menu.route;

export default menuSlice.reducer;
