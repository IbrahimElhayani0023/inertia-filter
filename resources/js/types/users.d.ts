export interface Users {
    data: {
        id: number;
        name: string;
        email: string;
        email_verified_at?: string;
    }[];
    links: {
        url?: string;
        label: string;
        active: boolean;
    }[];
}
