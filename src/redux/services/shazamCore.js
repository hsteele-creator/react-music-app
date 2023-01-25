import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '795a905ad3mshc224423d2b21b54p1519a7jsnb481b7f61378'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
      getTopCharts: builder.query({
      query: () => '/charts/world'}),
      getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`})
    }),
  })

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
