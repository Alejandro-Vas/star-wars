import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharactersResponse } from '../../interfaces/index';

const API_URL = 'https://swapi.dev/api';

export const swApi = createApi({
  reducerPath: 'api/swApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersResponse, void>({
      query: () => ({
        url: '/people',
        params: {
          format: 'json',
        },
      }),
    }),
  }),
});

export const { useGetCharactersQuery } = swApi;
