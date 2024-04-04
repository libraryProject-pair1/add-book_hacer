import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IAddBookFormResponse } from '../../interfaces/addBookFormResponse';



@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
formBuilder=inject(FormBuilder);
httpService =inject(HttpService);
bookForm =this.formBuilder.group({
  
  isbn:['',[Validators.required]],
  numberOfPages:[0,[Validators.required]],
  bookTitle:['',[Validators.required]],
  status:[0,[Validators.required]],
  memberId:['',Validators.required],
  authorId:['',[Validators.required]],
  publisherId:['',[Validators.required]],
});

save(){
  console.log(this.bookForm.value);
  const book:IAddBookFormResponse={
   
    isbn: this.bookForm.value.isbn!,
    numberOfPages:this.bookForm.value.numberOfPages!,
    bookTitle: this.bookForm.value.bookTitle!,
    status: this.bookForm.value.status!,
    authorId:this.bookForm.value.authorId!,
    publisherId:this.bookForm.value.publisherId!,
    memberId:this.bookForm.value.memberId!
  }
  this.httpService.createBook(book).subscribe(()=>{
    console.log("success");
  })
}
}
