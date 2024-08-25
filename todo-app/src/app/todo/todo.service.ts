import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodoList() {
    return of([]);
  }

  constructor() { }
}
