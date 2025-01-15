import {AnyAction, combineReducers} from 'redux';
import counterSlice from './counterRedux/counterSlice';
import authApi from '../services/authService';
import {removeData} from '../helpers/localstorage';
import {removeAuthToken} from '../helpers/api';
import {ASYNC_STORE_VAR} from '../constants/constants';
import authSlice from './auth/authSlice';

const appReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  counter: counterSlice.reducer,
  auth: authSlice.reducer,
});

export default (state: any, action: AnyAction) => {
  // if (action.type === REMOVE_USER_DATA) {
  //   state = undefined;
  // } else if (action.type === LOGOUT) {
  state = undefined;
  removeData(ASYNC_STORE_VAR.token);
  removeAuthToken();
  // }
  return appReducer(state, action);
};
