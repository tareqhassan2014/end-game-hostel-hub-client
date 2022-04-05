import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginRequest {
    email: string;
    password: string;
}

interface AuthResponse {
    data: {
        name: string;
        email: string;
        id: string;
        role: string;
        status: string;
        img: string;
        token: string;
    };
}

interface SignUpRequest {
    name: string;
    email: string;
    phone: string;
    password: string;
}

const baseUrl = process.env.REACT_APP_BASE_URL;

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
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
