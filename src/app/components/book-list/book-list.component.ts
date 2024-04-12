import { Component, OnInit, inject } from '@angular/core';
import { IBook } from '../../interfaces/book';
import { HttpService } from '../../http.service';
import {MatTableModule} from '@angular/material/table';
import { IBookResponse } from '../../interfaces/IBookResponse';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
toaster=inject(ToastrService);
displayedColumns: string[] = ['id', 'isbn', 'pages', 'name','status','action'];
ngOnInit(){
  this.getBookFromServer();
}
getBookFromServer()
{
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

delete(id:string)
{
  this.httpService.deletebook(id).subscribe(()=>{
    console.log("deleted");
    //this.bookList=this.bookList.filter(x=>x.id!=id);
    this.getBookFromServer();
    this.toaster.success("Kayıt silme işlemi başarılı.");
  });
}

}
