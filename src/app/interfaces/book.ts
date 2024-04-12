export interface IBook{
    items: IBook[];
    id?: string;
    isbn: string;
    pages: number;
    name: string;
    status: number;
    //"memberId": string;
    //"authorId": string;
    //"publisherId": string;
}