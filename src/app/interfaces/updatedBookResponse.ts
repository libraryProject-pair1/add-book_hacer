export interface UpdatedBookResponse {
    id: string;
    isbn: string;
    numberOfPages: number;
    bookTitle: string;
    status: BookStatus;
    memberId: string;
    authorId: string;
    publisherId: string;
  }
  
  export enum BookStatus {
    Available = 0,
    Reserved = 1,
    Loaned = 2
  }
  