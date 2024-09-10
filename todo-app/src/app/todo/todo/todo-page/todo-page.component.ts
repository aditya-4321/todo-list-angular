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
    @Inject(MAT_DIALOG_DATA) public data: {id: number,todoList: Array<Todo>,action: string}
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
  
  onSubmit(){
    console.log(2)
    if(this.selectedTodo.id == -1 && this.selectedTodo.title.length>0){
      this.selectedTodo.id = this.data.todoList.length;
      this.data.todoList.push(this.selectedTodo);
      this.dialogRef.close();
    } else if(this.selectedTodo.id > 0){
      this.dialogRef.close();
    }
  }

}

