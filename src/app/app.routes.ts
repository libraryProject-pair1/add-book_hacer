import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { HomePageSearchComponent } from './components/HomePage/home-page-search/home-page-search.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        component:AppComponent
    },
    {
        path:"book-list",
        component:BookListComponent
    },
    {
        path:"create-book",
        component:BookFormComponent
    },
    {
        path:"book/:id",
        component:BookFormComponent
    },
];
