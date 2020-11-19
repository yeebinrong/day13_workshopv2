import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day13-workshopv2';
  list = JSON.parse(localStorage.getItem('list')) || [];
  completedList = JSON.parse(localStorage.getItem('completedList')) || [];

  ngOnInit() {
    for (let item of this.list) {
      item.date = moment(item.date);
    }
    for (let item of this.completedList) {
      item.date = moment(item.date);
    }
  }

  addtodo (value) {
    const copied = Object.assign({}, value);
    this.list.push(copied);
  }
}
