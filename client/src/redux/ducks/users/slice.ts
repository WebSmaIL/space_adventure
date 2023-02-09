import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IUsers, IUserNameUpdate, IUserEmailUpdate, IUserPasswordUpdate} from "./interfaces"


const initialState: IUsers[] = [
  {
    id: 0,
    name: "Пользователь",
    isOnline: true,
    password: "123",
    email: "mail@gmail.com",
  },
  {
    id: 1,
    name: "Пользователь1",
    isOnline: false,
    password: "321",
    email: "mail@gmail.com",
  },
];

const Users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUsers>): void => {
      state.push(action.payload);
    },
    deleteUsers: (state, action: PayloadAction<number>) => {
      state.splice(
        state.findIndex((user: { id: number }) => user.id === action.payload),
        1
      );
    },
    updateUserName: (state, action: PayloadAction<IUserNameUpdate>) => {
      const user = state.find((user) => user.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
      }
    },
    updateUserPassword: (state, action: PayloadAction<IUserPasswordUpdate>) => {
      const user = state.find((user) => user.id === action.payload.id);
      if (user) {
        user.password = action.payload.password;
      }
    },
    updateUserEmail: (state, action: PayloadAction<IUserEmailUpdate>) => {
      const user = state.find((user) => user.id === action.payload.id);
      if (user) {
        user.email = action.payload.email;
      }
    },
  },
});

export const {
  addUser,
  deleteUsers,
  updateUserName,
  updateUserPassword,
  updateUserEmail,
} = Users.actions;
export default Users.reducer;
