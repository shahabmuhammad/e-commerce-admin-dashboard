import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-admin-dashboard';


  toggleSideMenu() {
    const body:HTMLElement = document.body;
    if (body) {
      body.classList.toggle('toggle-sidebar');
    }
  }
}
