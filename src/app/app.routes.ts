import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { NavBarComponent } from './components/HomePage/nav-bar/nav-bar.component';
import { HomePageSearchComponent } from './components/HomePage/home-page-search/home-page-search.component';


export const routes: Routes = [
    {
        path:"homepage",
        component:HomePageSearchComponent
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
    {
        path:"iletisim",
        component:IletisimComponent
    },
    {path: '', redirectTo: 'homepage', pathMatch: 'full'},
    {
        path:"nav-bar",
        component:NavBarComponent
    }
];

