import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharactersResponse } from 'interfaces/index';
import transformResponse from './transformResponse';

const API_URL = 'https://swapi.dev/api';

interface IPayloadParams {
  page: number,
  format: 'wookiee' | 'json'
}

export const swApi = createApi({
  reducerPath: 'api/swApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: (builder) => ({
    getCharacters: builder.query<ICharactersResponse, IPayloadParams>({
      query: ({ page, format }) => ({
        url: '/people',
        params: {
          format,
          page,
        },
        responseHandler: (response) => response
          .text()
          .then((text) => JSON.parse(text.replace(/whhuanan/g, '"whhuanan"'))),
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache, newItems) => {
        currentCache.results?.push(...newItems.results || []);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
      transformResponse,
    }),
  }),
});

export const { useGetCharactersQuery } = swApi;
