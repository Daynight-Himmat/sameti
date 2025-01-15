import {createApi} from '@reduxjs/toolkit/query/react';
import {URLS} from '../constants/urlsConstant';
import {axiosBaseQuery} from '../redux/reduxUtils';

const authApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: data => {
        return {
          url: URLS.login,
          method: 'POST',
          data,
        };
      },
    }),
    getAnimals: builder.query<any, any>({
      query: params => {
        return {
          url: URLS.dummy,
          method: 'GET',
          params,
          headers: {
            'x-api-key': 'JLm6qKEB47hcmDlda7ybbg==S1JATbvkSiyKN029',
          },
        };
      },
    }),
  }),
});

export const {useLoginMutation, useGetAnimalsQuery, useLazyGetAnimalsQuery} =
  authApi;

export default authApi;
