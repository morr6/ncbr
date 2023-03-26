import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  surname: string;
  dateOfBirth: string;
  city: string;
  street: string;
  isAdult: boolean;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
};

export const initialState: UsersState = {
  users: [],
  isLoading: false,
};

export const setUsersDataReducer: CaseReducer<UsersState, PayloadAction<User[]>> = (
  state,
  { payload: usersData }
) => {
  state.users = usersData;
};

export const setIsUserLoadingReducer: CaseReducer<UsersState, PayloadAction<boolean>> = (
  state,
  { payload: isLoading }
) => {
  state.isLoading = isLoading;
};
