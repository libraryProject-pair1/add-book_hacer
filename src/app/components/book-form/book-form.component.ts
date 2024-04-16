import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpService } from '../../http.service';
import { IAddBookFormResponse } from '../../interfaces/addBookFormResponse';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UpdatedBookResponse } from '../../interfaces/updatedBookResponse';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,FormsModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
formBuilder=inject(FormBuilder);
httpService =inject(HttpService);
router=inject(Router);
route=inject(ActivatedRoute);
toastr=inject(ToastrService);

bookForm =this.formBuilder.group({
  id:['',[Validators.required]],
  isbn:['',[Validators.required]],
  numberOfPages:[0,[Validators.required]],
  bookTitle:['',[Validators.required]],
  status:[0,[Validators.required]],
  memberId:['',Validators.required],
  authorId:['',[Validators.required]],
  publisherId:['',[Validators.required]],
});
bookId!:string;
isEdit=false;
ngOnInit(){
  this.bookId = this.route.snapshot.params['id'];
  if(this.bookId){
    this.isEdit=true;
    this.httpService.getBook(this.bookId).subscribe(result=>{
      console.log(result);
      this.bookForm.patchValue(result);
      
    })
  }
}

save(){
  console.log(this.bookForm.value);
  const book:UpdatedBookResponse={
    id: this.bookForm.value.id!,
    isbn: this.bookForm.value.isbn!,
    numberOfPages:this.bookForm.value.numberOfPages!,
    bookTitle: this.bookForm.value.bookTitle!,
    status: this.bookForm.value.status!,
    authorId:this.bookForm.value.authorId!,
    publisherId:this.bookForm.value.publisherId!,
    memberId:this.bookForm.value.memberId!
  };
 
  if(this.isEdit){
    this.httpService.updatebook(this.bookId,book).subscribe(()=>{
    console.log('success');
    this.toastr.success("Ürün başarıyla kaydedildi.");
    this.router.navigateByUrl("/book-list");
  });
}else{
  this.httpService.createBook(book).subscribe(()=>{
  console.log('success');
  this.toastr.success("Ürün başarıyla eklendi.");
  this.router.navigateByUrl("/book-list");
 });
}
}
}
