import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {FormControl} from '@angular/forms';
import {TodoServiceService} from '../todo-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();
  todoList: Todo[];
  private _id: number;

  constructor(private todoService: TodoServiceService,
              private router: Router) {
  }

  ngOnInit() {
    this.todoService.findAll().subscribe(value => {
      this.todoList = value;
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this._id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe();
  }
}
