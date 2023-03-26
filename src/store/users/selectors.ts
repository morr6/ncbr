import { RootState } from 'store/rootReducer';

export const getUsers = (state: RootState) => state.users.users;
