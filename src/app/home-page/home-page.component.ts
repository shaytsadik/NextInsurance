import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  showMessage: boolean = false;

  onSubmit(value) {
    this.showMessage = value;
  }
}
