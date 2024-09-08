import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { OnInit } from '@angular/core';
import { Todo } from '../../../models/todo';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TodoPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number,todoList: Array<Todo>}
  ){}
  selectedTodo: Todo = {id:-1,title:'',description:''};

  ngOnInit(): void {
    this.selectedTodo = this.getTodoDetails(this.data.id);
  }

  getTodoDetails(id: number) : Todo{
    let reqTodo: Todo = {id:-1,title:'',description:''};
    this.data.todoList.forEach(todo => {
      if(todo.id == id){
        reqTodo = todo;
      }}
    );
    return reqTodo;
  } 
  

}

