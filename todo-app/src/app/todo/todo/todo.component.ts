import { Component, inject } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';
import { OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TodoPageComponent } from './todo-page/todo-page.component';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService){}
  private todoList: Todo[] = [];
  dialog= inject(MatDialog);
  ngOnInit(): void {
    this.setTodoList();
  }

  setTodoList() {
    this.todoService.getTodoList().subscribe((response: Todo[]) => {
      if(response){
        console.log('response',response);
        this.todoList = response;
      }
    })
  }

  getTodolist() : Todo[] {
    return this.todoList;
  }

  editTodo(id: Number) : void {
    console.log(id,"id");
    const dialogRef = this.dialog?.open(TodoPageComponent,{
      width: '300px',
      height:'340px',
      panelClass: 'custom-style',
      data:{id:id,todoList:this.todoList},
    });

    dialogRef?.afterClosed().subscribe(response =>{
      console.log(response,"response")
    })
  }

}
