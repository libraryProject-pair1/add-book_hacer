import { IBook } from "./book";

export interface IBookResponse {
    items: IBook[];
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
  }