import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharactersResponse } from 'interfaces/index';

const API_URL = 'https://swapi.dev/api';

export const swApi = createApi({
  reducerPath: 'api/swApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersResponse, {page: number}>({
      query: ({ page }) => ({
        url: '/people',
        params: {
          format: 'json',
          page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.results?.push(...newItems.results || []);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),
  }),
});

export const { useGetCharactersQuery } = swApi;
