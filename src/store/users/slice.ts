import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { initialState, setUsersDataReducer, setIsUserLoadingReducer } from './reducers';
import { MOCK_DATA } from 'features/users/utils/table';

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: setUsersDataReducer,
    setIsUserLoading: setIsUserLoadingReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = MOCK_DATA;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      toast.error('Something went wrong while fetching data');
    });
  },
});

export const { setUsersData, setIsUserLoading } = slice.actions;

export default slice.reducer;

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  // const response = await axios.get('/users')
  return new Promise((resolve) => setTimeout(resolve, 1000));
});
