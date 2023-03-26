import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: Date;
  city: string;
  street: string;
  isActive: boolean;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
};

export const initialState: UsersState = {
  users: [],
  isLoading: false,
};

export const setIsUserLoadingReducer: CaseReducer<UsersState, PayloadAction<boolean>> = (
  state,
  { payload: isLoading }
) => {
  state.isLoading = isLoading;
};

export const setUsersDataReducer: CaseReducer<UsersState, PayloadAction<User[]>> = (
  state,
  { payload: usersData }
) => {
  state.users = usersData;
};

export const addUserReducer: CaseReducer<UsersState, PayloadAction<User>> = (
  state,
  { payload: userData }
) => {
  // generating user id for testing purpose
  state.users = [...state.users, { ...userData, id: Math.floor(Math.random() * 99999) }];
};

export const editUserReducer: CaseReducer<UsersState, PayloadAction<User>> = (
  state,
  { payload: newUserData }
) => {
  state.users = state.users.map((user) => (user.id === newUserData.id ? newUserData : user));
};

export const deleteUserReducer: CaseReducer<UsersState, PayloadAction<number>> = (
  state,
  { payload: userId }
) => {
  state.users = state.users.filter((user) => user.id !== userId);
};
