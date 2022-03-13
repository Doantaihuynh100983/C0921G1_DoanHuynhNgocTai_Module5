import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './Todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  API_URL = 'http://localhost:3000/todoList';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.API_URL + '/' + id);
  }

  create(todo: Todo): Observable<void> {
    return this.httpClient.post<void>(this.API_URL, todo);
  }

  update(todo: Todo): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/' + todo.id, todo);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }
}
