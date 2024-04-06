export interface IAddBookFormResponse
{
  id?:string,
  isbn: string,
  numberOfPages: number,
  bookTitle: string,
  status: number,
  memberId:string,
  authorId: string,
  publisherId: string
} 