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
  state.users = [...state.users, userData];
};

export const deleteUserReducer: CaseReducer<UsersState, PayloadAction<number>> = (
  state,
  { payload: userId }
) => {
  state.users = state.users.filter((user) => user.id !== userId);
};
