import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TrackByFunction,
} from '@angular/core';
import { Itodo } from '../../model/todo.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todosArr: Array<Itodo> = [];
  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>();
  @Output() emitEditTodo: EventEmitter<any> = new EventEmitter<any>();

  // trackById!: TrackByFunction<any>;

  constructor(private _matDialog: MatDialog) {}

  ngOnInit(): void {}

  onRemove(todo: Itodo) {
    let matConfig = new MatDialogConfig();
    matConfig.width = '500px';
    matConfig.disableClose = true;
    matConfig.data = `Are you sure to delete the todoItem with Id ${todo.todoId}`;
    let matDialogRef = this._matDialog.open(ConfirmDialogComponent, matConfig);
    matDialogRef.afterClosed().subscribe((flag) => {
      if (flag) {
        this.emitRemoveId.emit(todo.todoId);
        //  let getIndex = this.todosArr.findIndex(t=> {
        //   return t.todoId === todo.todoId
        //  });
        //  this.todosArr.splice(getIndex,1);
      }
    });
  }
  onEdit(todo: Itodo) {
    console.log(todo);
    this.emitEditTodo.emit(todo);
  }
}
