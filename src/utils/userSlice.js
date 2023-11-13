import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, name: "Shadab", email: "abc@test.com" },
    { id: 2, name: "Shadab", email: "abc@test.com" },
    { id: 3, name: "Shadab", email: "abc@test.com" },
  ],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const currentUser = state.find((user) => user.id == id);
      if (currentUser) {
        currentUser.name = name;
        currentUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
