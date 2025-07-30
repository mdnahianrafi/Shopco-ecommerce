import { createSlice } from "@reduxjs/toolkit";

// We’ll keep registered users here, and track the currently logged-in user
const initialState = {
  users: [],            // { username, name, passwordHash, phone?, address? }
  loggedInUser: null,   // { username, name, phone, address } or null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      // action.payload: { username, name, passwordHash }
      state.users.push({ 
        ...action.payload,
        phone: "",      // start empty
        address: ""     // start empty
      });
    },
    login: (state, action) => {
      // action.payload: { username, passwordHash }
      const { username, passwordHash } = action.payload;
      const user = state.users.find(
        u => u.username === username && u.passwordHash === passwordHash
      );
      state.loggedInUser = user
        ? { username: user.username, name: user.name, phone: user.phone, address: user.address }
        : null;
    },
    logout: (state) => {
      state.loggedInUser = null;
    },
    updateProfile: (state, action) => {
      // action.payload: { phone, address }
      if (!state.loggedInUser) return;
      const { username } = state.loggedInUser;
      // update in users array
      state.users = state.users.map(u =>
        u.username === username
          ? { ...u, phone: action.payload.phone, address: action.payload.address }
          : u
      );
      // update the loggedInUser object
      state.loggedInUser = {
        ...state.loggedInUser,
        phone: action.payload.phone,
        address: action.payload.address,
      };
    },
  },
});

export const { signup, login, logout, updateProfile } = userSlice.actions;
export default userSlice.reducer;
