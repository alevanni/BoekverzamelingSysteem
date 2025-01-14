export interface Book {
    id: number;
    title: string;
    plot: string;
    author_id: number;
}

export interface Author {
    id: number;
    name: string;
}

export interface Review {
    id: number;
    book_id: number;
    body: string;
    vote: number;
}
