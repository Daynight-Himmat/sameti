import {createSlice} from '@reduxjs/toolkit';
import authApi from '../../services/authService';

export interface authState {
  user?: any;
  token?: string;
}

const initialState: authState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state: any, action: any) => {
        state.user = action.payload;
      },
    );
  },
});

export const {setUser} = authSlice.actions;

export default authSlice;
