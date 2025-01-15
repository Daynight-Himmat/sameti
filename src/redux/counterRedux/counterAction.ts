import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCount } from './counterSlice';

const FETCH_COUNT = 'counter/fetchCount';
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
const INCREMENT_BY_AMOUNT = 'counter/incrementByAmount';

export const incrementAsyncAction = createAsyncThunk(
  FETCH_COUNT,
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  },
);

export const incrementAction = createAction(INCREMENT);

export const decrementAction = createAction(DECREMENT);

export const incrementByAmountAction = createAction(
  INCREMENT_BY_AMOUNT,
  (payload: number) => ({
    payload: payload,
  }),
);
