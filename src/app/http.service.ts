
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IBook } from './interfaces/book';
import { IBookResponse } from './interfaces/IBookResponse';
import { IAddBookFormResponse } from './interfaces/addBookFormResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl="http://localhost:60805";
  http=inject(HttpClient);
  constructor() { }

  getAllBook(){
    return this.http.get<IBookResponse>(this.apiUrl + "/api/Books?PageIndex=0&PageSize=11")
  }
  createBook(book:IAddBookFormResponse){
    return this.http.post(this.apiUrl +"/api/Books", book);
  }
}
