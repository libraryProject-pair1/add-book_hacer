
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IBookResponse } from './interfaces/IBookResponse';
import { IAddBookFormResponse } from './interfaces/addBookFormResponse';
import { UpdatedBookResponse } from './interfaces/updatedBookResponse';


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
    return this.http.post(this.apiUrl +"/api/Books/", book);
  }
  getBook(bookId:string){
    return this.http.get<IAddBookFormResponse>(this.apiUrl+'/api/Books/'+bookId);
  }
  updatebook( book:UpdatedBookResponse) {
    return this.http.put<UpdatedBookResponse>(this.apiUrl + '/api/Books/',book);
    
  }
  deletebook( bookId:string) {
    return this.http.delete<UpdatedBookResponse>(this.apiUrl + '/api/Books/'+bookId);
}
}
