import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss'],
})
export class TodoDashboardComponent implements OnInit {
  editTodo !: Itodo

  todosArr: Itodo[] = [
    {
      todoItem: 'Learn Angular Reactive Forms',
      todoId: 'T001',
      completed: false,
    },
    {
      todoItem: 'Create Todo App',
      todoId: 'T002',
      completed: true,
    },
    {
      todoItem: 'Fix form validations',
      todoId: 'T003',
      completed: false,
    },
    {
      todoItem: 'Push code to GitHub',
      todoId: 'T004',
      completed: true,
    },
    // {
    //   todoItem: 'Review pull requests',
    //   todoId: 'T005',
    //   completed: false,
    // },
    // {
    //   todoItem: 'Update project documentation',
    //   todoId: 'T006',
    //   completed: false,
    // },
  ];
  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void { }
  getNewTodo(todo: Itodo) {
    this.todosArr.unshift(todo);
    this._snackBar.open(
      `TodoItem with name ${todo.todoItem} and id ${todo.todoId} added successfully`,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'left',
        verticalPosition: 'top',
      },
    );
  }
  getRemoveId(id: string) {
    let getIndex = this.todosArr.findIndex((t) => {
      return t.todoId === id;
    }); 
    this.todosArr.splice(getIndex, 1);
    this._snackBar.open(
      `The todoItem with id ${id} removed successfully`,
      'Close',
      {
        duration: 3000,
        horizontalPosition: 'left',
        verticalPosition: 'top',
      },
    );
  }
}
