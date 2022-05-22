import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

interface IStore {
    address: string;
    banner: string;
    createdAt: string;
    _id: string;
    status: string;
    storeName: string;
    thumbnail: string;
}

interface LoginRequest {
    password: string;
    email: string;
}

interface IHostel {
    address: string;
    banner: string;
    createdAt: string;
    estimation: string;
    hostelName: string;
    status: string;
    thumbnail: string;
    totalSit: number;
    _id: string;
}

interface AuthResponse {
    token: string;
    user: {
        name: string;
        email: string;
        _id: string;
        role: string;
        status: string;
        img: string;
        phone: string;
        store: [IStore];
        hostel: [IHostel];
    };
}

interface CreateHostelRequest {
    name: string;
    address: string;
    totalSit: number;
    city: string;
    phone: string;
    email: string;
    banner: File;
    thumbnail: File;
}

interface CreateHostelAdsRequest {
    price: number;
    description: string;
    title: string;
    numberOfValency: number;
    phone: string;
}

interface HostelResponse {
    data: { data: [hostelData] };
}

interface AllHostelBooking {
    data: { data: IHostelBooking[] };
}

interface IHostelBooking {
    addId: string;
    hostelId: string;
    userId: {
        img: string;
        name: string;
        email: string;
        _id: string;
    };
}

interface acceptHostelRequestPayload {
    hostelId: string;
    userId: string;
}

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = 'https://end-game-hostel-hub-server.herokuapp.com/api/v1/';

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
    tagTypes: ['hostelMemberRequest', 'product', 'hostelAdd', 'hostelBooking'],
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/users/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        getMe: builder.query<AuthResponse, void>({
            query: () => ({
                url: '/users/me',
                method: 'GET',
            }),
        }),

        signUp: builder.mutation<AuthResponse, SignUpRequest>({
            query: (credentials) => ({
                url: '/users/signup',
                method: 'POST',
                body: credentials,
            }),
        }),

        createStore: builder.mutation<void, CreateStoreRequest>({
            query: (credentials) => ({
                url: '/stores',
                method: 'POST',
                body: credentials,
            }),
        }),

        AdProduct: builder.mutation<null, AdProductRequest>({
            query: (credentials) => ({
                url: '/products',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['product'],
        }),

        createHostel: builder.mutation<null, CreateHostelRequest>({
            query: (credentials) => ({
                url: '/hostels',
                method: 'POST',
                body: credentials,
            }),
        }),

        createHostelsAds: builder.mutation<null, CreateHostelAdsRequest>({
            query: (credentials) => ({
                url: '/hostelsAds',
                method: 'POST',
                body: credentials,
            }),
        }),

        memberRequest: builder.mutation<null, memberRequest>({
            query: (credentials) => ({
                url: '/memberRequests',
                method: 'POST',
                body: credentials,
            }),
        }),

        acceptHostelMemberRequest: builder.mutation<
            null,
            acceptHostelRequestPayload
        >({
            query: (credentials) => ({
                url: '/hostelMember',
                method: 'POST',
                body: credentials,
                invalidatesTags: ['hostelMemberRequest'],
            }),
        }),

        getHostel: builder.query<HostelResponse, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),
        }),

        getHostelsAds: builder.query<AllHostelAds, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),
        }),

        getHostelAdDetails: builder.query<HostelAdDetails, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),
        }),

        getHostelBooking: builder.query<AllHostelBooking, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
                providesTags: ['hostelMemberRequest'],
            }),
        }),

        getProduct: builder.query<AllProducts, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
                providesTags: ['product'],
            }),
        }),

        addGrocery: builder.mutation<null, addGroceryRequest>({
            query: (credentials) => ({
                url: '/grocery',
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['product'],
        }),

        getGrocery: builder.query<AllGroceries, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),

            providesTags: ['product'],
        }),
    }),
});

export const {
    useLoginMutation,
    useSignUpMutation,
    useCreateStoreMutation,
    useCreateHostelMutation,
    useGetHostelQuery,
    useCreateHostelsAdsMutation,
    useGetHostelsAdsQuery,
    useGetHostelAdDetailsQuery,
    useMemberRequestMutation,
    useGetHostelBookingQuery,
    useAcceptHostelMemberRequestMutation,
    useAdProductMutation,
    useGetProductQuery,
    useGetMeQuery,
    useAddGroceryMutation,
    useGetGroceryQuery,
} = api;

export default api;
