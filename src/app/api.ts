import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';

interface SignUpRequest {
    name: string | null;
    email: string | null;
    img: string | null;
    phone: string | null;
}

interface IStore {
    address: string;
    banner: string;
    createdAt: string;
    _id: string;
    status: string;
    storeName: string;
    thumbnail: string;
}

interface addProductRequest {
    price: number;
    name: string;
    category: string;
    url: string;
}

interface LoginRequest {
    token: string;
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

interface CreateStoreRequest {
    storeName: string;
    address: string;
    url: string;
}

interface CreateHostelRequest {
    hostelName: string;
    address: string;
    totalSit: number;
    admin?: string;
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

interface CreateHostelAddRequest {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
    hostel: string;
}

interface HostelResponse {
    data: { data: [hostelData] };
}

interface HostelAdd {
    price: number;
    phone: string;
    details: string;
    numberOfVacancy: number;
    hostel: hostelData;
    _id: string;
}

interface AllHostelAdds {
    data: { data: HostelAdd[] };
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

interface HostelAddDetails {
    data: { data: HostelAdd };
}

interface requestForHostelRequest {
    hostelId: string;
    addId: string;
    userId: string;
}

interface acceptHostelRequestPayload {
    hostelId: string;
    userId: string;
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
    tagTypes: ['hostelMemberRequest'],
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

        createHostel: builder.mutation<null, CreateHostelRequest>({
            query: (credentials) => ({
                url: '/hostel',
                method: 'POST',
                body: credentials,
            }),
        }),

        addForHostel: builder.mutation<null, CreateHostelAddRequest>({
            query: (credentials) => ({
                url: '/hostelAdd',
                method: 'POST',
                body: credentials,
            }),
        }),

        requestForHostel: builder.mutation<null, requestForHostelRequest>({
            query: (credentials) => ({
                url: '/hostelBooking',
                method: 'POST',
                body: credentials,
            }),
        }),

        addProduct: builder.mutation<AuthResponse, addProductRequest>({
            query: (credentials) => ({
                url: credentials.url,
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

        searchForHostel: builder.query<AllHostelAdds, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
            }),
        }),

        hostelAddDetails: builder.query<HostelAddDetails, string>({
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

        getAllUsedProduct: builder.query<AllHostelBooking, string>({
            query: (query) => ({
                url: query,
                method: 'GET',
                providesTags: ['hostelMemberRequest'],
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
    useAddProductMutation,
    useAddForHostelMutation,
    useSearchForHostelQuery,
    useHostelAddDetailsQuery,
    useRequestForHostelMutation,
    useGetHostelBookingQuery,
    useAcceptHostelMemberRequestMutation,
    useGetAllUsedProductQuery,
} = api;

export default api;
