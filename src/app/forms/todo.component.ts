import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() addNewTask = new EventEmitter<Object>();
  todoForm: FormGroup;
  minDate : Date;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      description: this.fb.control('', [Validators.required]),
      priority: this.fb.control(null, [Validators.required]),
      date: this.fb.control(null, [Validators.required])
    })
    this.minDate = new Date();
  }

  processForm(form) {
    this.addNewTask.next(this.todoForm.value);
    form.reset();
  }
}
