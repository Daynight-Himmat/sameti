import {createSlice} from '@reduxjs/toolkit';
import {
  decrementAction,
  incrementAction,
  incrementAsyncAction,
  incrementByAmountAction,
} from './counterAction';
import {createReducerBuilder} from '../reduxUtils';

export interface counterState {
  value: number;
}

const initialState: counterState = {
  value: 0,
};

export function fetchCount(amount = 1) {
  return new Promise<{data: number}>(resolve =>
    setTimeout(() => resolve({data: amount}), 500),
  );
}

const reducerBuilder = createReducerBuilder<counterState>();

const updateFetchCount = reducerBuilder(incrementAsyncAction, {
  fulfilled: (state, {payload}) => {
    state.value += payload;
  },
  pending: () => {},
  rejected: () => {},
});

const incrementCounter = reducerBuilder(incrementAction, state => {
  state.value += 1;
});
const decrementCounter = reducerBuilder(decrementAction, state => {
  state.value -= 1;
});

const incrementByAmount = reducerBuilder(
  incrementByAmountAction,
  (state, {payload}) => {
    state.value += payload;
  },
);

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: builder => {
    incrementCounter(builder);
    decrementCounter(builder);
    incrementByAmount(builder);
    updateFetchCount(builder);
  },
});

export default counterSlice;
