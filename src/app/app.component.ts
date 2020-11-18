import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day13-workshopv2';
  list = [];

  addtodo (value) {
    this.list.push(value);
    console.log(this.list);
  }
}
