import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService: TodoServiceService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() =>
      this.router.navigateByUrl(''));
  }
}
