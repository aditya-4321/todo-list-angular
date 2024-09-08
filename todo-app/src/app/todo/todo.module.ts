import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogContent,
    FormsModule
  ]
})
export class TodoModule { }
