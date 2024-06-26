import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/HomePage/footer/footer.component';
import { HomePageSearchComponent } from './components/HomePage/home-page-search/home-page-search.component';
import { CardsComponent } from './components/HomePage/cards/cards.component';
import { BannerComponent } from './components/HomePage/banner/banner.component';
import { NavBarComponent } from './components/HomePage/nav-bar/nav-bar.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,MatToolbarModule,MatIconModule,RouterLink,FooterComponent,
    HomePageSearchComponent,CardsComponent,
    BannerComponent,HomePageSearchComponent,AppComponent,
    NavBarComponent,IletisimComponent,RouterLinkActive
  ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library';
  
}
