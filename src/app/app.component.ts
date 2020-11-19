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
    const copied = Object.assign({}, value);
    this.list.push(copied);
    console.log(this.list);
  }
}
