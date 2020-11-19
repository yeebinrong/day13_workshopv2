import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() list;
  minDate : Date;

  constructor() { }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  alertDelete(i) {
    console.log("deleting");
    if(confirm("Are you sure to delete?")) {
      console.log(i);
      this.list.splice(i, 1);
    }
  }

  markCompleted(i) {

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
