interface hostelData {
    _id: string;
    name: string;
    address: string;
    city: string;
    totalSit: number;
    banner: string;
    thumbnail: string;
    members: [];
    estimation: string;
    status: string;
    phone: string;
    email: string;
    rating: number;
    admin: string;
    createdAt: string;
}

interface HostelAd {
    title: string;
    description: string;
    price: number;
    numberOfValency: number;
    phone: string;
    hostel: hostelData;
    _id: string;
}

interface AllHostelAds {
    data: { data: HostelAd[] };
}

interface HostelAdDetails {
    data: { data: HostelAd };
}

interface memberRequest {
    hostel: string;
    hostelsAd: string;
}

interface AdProductRequest {
    price: number;
    phone: string;
    title: string;
    category: string;
    photo: File;
    description: string;
}

interface IProduct {
    price: number;
    phone: string;
    userId: string;
    title: string;
    category: string;
    _id: string;
}

interface AllProducts {
    data: { data: IProduct[] };
}

interface CreateStoreRequest {
    address: string;
    name: string;
    phone: string;
}

interface addGroceryRequest {
    title: string;
    price: number;
    description: string;
}

interface Grocery {
    store: {
        address: string;
    };
    vendor: string;
    title: string;
    description: string;
    price: 20;
    photo: string;
    _id: string;
}

interface AllGroceries {
    data: { data: Grocery[] };
}

interface SignUpRequest {
    phone: string;
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}
