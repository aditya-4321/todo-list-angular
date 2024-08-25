import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { Todo } from '../../models/todo';
import { TodoService } from '../todo.service';
import { of } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    let todos: Todo[] = []
    spyOn(todoService,'getTodoList').and.returnValue(of([]))
    let todoList = component.getTodolist();
    expect(todoList.length).toEqual(todos.length)
  });
});
