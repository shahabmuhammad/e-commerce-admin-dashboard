import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggleSideMenu() {
    const body: HTMLElement = document.body;
    if (body) {
      body.classList.toggle('toggle-sidebar');
    }
  }
}
