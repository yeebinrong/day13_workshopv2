import { Component, Input, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() list;
  completedList = [];
  minDate : Date;

  constructor() { 
  }
  
  ngOnInit() {
    this.minDate = new Date();
  }
  
  ngAfterViewInit() {
    console.info("data retrieved not yet working");
    // this.list = JSON.parse(localStorage.getItem('list'));
    // this.completedList = JSON.parse(localStorage.getItem('completedList'));
  }

  ngAfterViewChecked() {
    console.info("data stored");
    localStorage.setItem('list', JSON.stringify(this.list));
    localStorage.setItem('completedList', JSON.stringify(this.completedList));
  }

  alertDelete(i) {
    if(confirm("Are you sure to delete?")) {
      this.list.splice(i, 1);
    }
  }

  removeCompleted(i) {
      this.completedList.splice(i, 1);
  }

  markCompleted(i) {
    const copied = Object.assign({}, this.list[i]);
    copied.date = moment(new Date())
    console.log(copied.date);
    this.completedList.push(copied);
    this.list.splice(i, 1);
  }

  togglePanel(i) {
    this.list[i].isOpen = !this.list[i].isOpen;
  }

  updateText(event, i) {
    if ((event.target.value).length > 0) {
      this.list[i].description = event.target.value;
    } else {
      event.target.value = this.list[i].description;
    }
  }
  updatePriority(event, i) {
    this.list[i].priority = event.target.value;
  }
  updateDate(event, i) {
    const newDate = moment(event.target.value, 'DD-MM-YYYY');
    console.info(newDate.isValid());
    if (newDate.isValid() && newDate.toDate() >= this.minDate) {
      this.list[i].date = newDate;
    } else {
      event.target.value = this.list[i].date.format("DD/MM/YYYY");
    }
  }
}
