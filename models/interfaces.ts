export interface Rating {
    rate: number;
    count: number;
}

export interface Produto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

// Adicionada a interface User para resolver o erro de build do componente FetchUser
export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone?: string;
    website?: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}