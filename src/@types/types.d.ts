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
