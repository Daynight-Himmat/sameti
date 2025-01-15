import get from 'lodash/get';

export const getApiError = async (error: {response: {data: {errors: any}}}) => {
  if (get(error, 'response.status') === 500) {
    return {
      message: 'Internal Server Error.',
      status: 500,
    };
  }
};
