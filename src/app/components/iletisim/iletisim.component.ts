import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './iletisim.component.html',
  styleUrl: './iletisim.component.css'
})
export class IletisimComponent {
  router=inject(Router);
}
