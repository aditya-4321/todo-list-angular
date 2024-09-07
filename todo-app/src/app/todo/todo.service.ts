import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  seedTodoList: Todo[] = [
    {
      id: 1,
      name: "Exercise",
      description: "Should exercise daily"
    },
    {
      id: 2,
      name: "Exercise",
      description: "Should exercise daily"
    },    {
      id: 3,
      name: "Exercise",
      description: "Should exercise daily"
    },
  ]
  getTodoList() {
    return of(this.seedTodoList);
  }

  constructor() { }
}
