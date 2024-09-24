import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './../models/todo';
import { HttpClient } from '@angular/common/http';
import { constUrl } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor(private http: HttpClient){}
  seedTodoList: Todo[] = [
    {
      id: 1,
      title: "Exercise",
      description: "Should exercise daily"
    },
    {
      id: 2,
      title: "Exercise",
      description: "Should exercise daily"
    },    {
      id: 3,
      title: "Exercise",
      description: "Should exercise daily"
    },
  ]
  getTodoList(): Observable<Todo[]> {
    const url = constUrl.getRootPath();
    return this.http.get<Todo[]>(url)
  }
}
