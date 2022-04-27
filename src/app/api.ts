import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

interface SignUpRequest {
    name: string | null;
    email: string | null;
    img: string | null;
    phone: string | null;
}

interface LoginRequest {
    token: string;
}

interface AuthResponse {
    user: {
        name: string;
        email: string;
        _id: string;
        role: string;
        status: string;
        img: string;
        phone: string;
    };
}

interface CreateStoreRequest {
    storeName: string;
    address: string;
    url: string;
}

interface CreateHostelRequest {
    hostelName: string;
    address: string;
    totalSit: number;
    url: string;
}

interface hostelData {
    address: string;
    admin: object;
    banner: string;
    createdAt: string;
    estimation: string;
    hostelName: string;
    member: [];
    request: [];
    status: string;
    thumbnail: string;
    totalSit: number;
    _id: string;
}

interface HostelResponse {
    data: { data: [hostelData] };
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    },
});

const api = createApi({
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        signUp: builder.mutation<AuthResponse, SignUpRequest>({
            query: (credentials) => ({
                url: '/auth/signup',
                method: 'POST',
                body: credentials,
            }),
        }),

        createStore: builder.mutation<AuthResponse, CreateStoreRequest>({
            query: (credentials) => ({
                url: credentials.url,
                method: 'POST',
                body: credentials,
            }),
        }),

        createHostel: builder.mutation<AuthResponse, CreateHostelRequest>({
            query: (credentials) => ({
                url: credentials.url,
                method: 'POST',
                body: credentials,
            }),
        }),

        getHostel: builder.query<HostelResponse, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useSignUpMutation,
    useCreateStoreMutation,
    useCreateHostelMutation,
    useGetHostelQuery,
} = api;

export default api;
