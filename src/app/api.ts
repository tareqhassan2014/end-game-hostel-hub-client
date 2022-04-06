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
    }),
});

export const { useLoginMutation, useSignUpMutation } = api;

export default api;
