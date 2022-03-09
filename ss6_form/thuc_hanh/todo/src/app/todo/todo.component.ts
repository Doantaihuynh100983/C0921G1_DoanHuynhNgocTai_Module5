import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  _id = 1;
  todo: Todo[] = [];
  content = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
  toggleTodo(i: number) {
    this.todo[i].complete = !this.todo[i].complete;
  }
  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this._id++,
        content: value,
        complete: false
      };
      this.todo.push(todo);
      this.content.reset();
    }
  }

}
