import { Component, OnInit, inject } from '@angular/core';
import { IBook } from '../../interfaces/book';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { IBookResponse } from '../../interfaces/IBookResponse';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  router=inject(Router);
bookList: IBook[]=[];
httpService=inject(HttpService);
displayedColumns: string[] = ['id', 'isbn', 'numberOfPages', 'bookTitle','status','action'];
ngOnInit(){
  this.httpService.getAllBook().subscribe((result:IBookResponse)=>{
    this.bookList=result.items;
    console.log(this.bookList);
  })
}
edit(id:string)
{
  console.log(id);
  this.router.navigateByUrl("/book/"+id);
}

}
