import { Component } from '@angular/core';

// Below is the structure of Angulars components!!
@Component({
  selector: 'app-root', //HTML tag to represent the component.
  templateUrl: './app.component.html', //HTML file
  styleUrls: ['./app.component.css'] //Style (can have multiple)
})
export class AppComponent {
  // You will put properties and methods here
  // these can then be used inside of our template
}
