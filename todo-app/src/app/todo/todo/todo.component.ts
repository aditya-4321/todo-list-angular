import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService){}
  private todoList: Todo[] = [];

  ngOnInit(): void {
    this.setTodoList();
  }

  setTodoList() {
    this.todoService.getTodoList().subscribe((response: Todo[]) => {
      if(response){
        this.todoList = response;
      }
    })
  }

  getTodolist() : Todo[] {
    return this.todoList;
  }

}
