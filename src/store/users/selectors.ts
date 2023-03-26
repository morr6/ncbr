import { RootState } from 'store/rootReducer';

export const getUsers = (state: RootState) => state.users.users;

export const getUser = (state: RootState, userId: number) => {
  const users = getUsers(state);
  const wantedUser = users.find((user) => user.id === userId);
  return wantedUser;
};
