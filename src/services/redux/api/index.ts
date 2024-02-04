import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { CONSTANTS } from "../../../shared/constants";

const baseQuery = fetchBaseQuery({
    baseUrl: `${CONSTANTS.HOST}`
});

const sampleApi = createApi({
    reducerPath: 'API_SAMPLE',
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: []
});

export default sampleApi;