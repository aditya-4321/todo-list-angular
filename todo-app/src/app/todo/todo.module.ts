import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogContent,
    FormsModule,
    HttpClientModule 
  ]
})
export class TodoModule { }
