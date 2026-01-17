import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Itodo } from '../../model/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm!: NgForm;
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  constructor() {}

  ngOnInit(): void {}
  onTodoAdd() {
    if (this.todoForm.valid) {
      let todo: Itodo = {
        ...this.todoForm.value,
        todoId: Date.now().toString(),
      };
      this.todoForm.reset();
      this.emitNewTodo.emit(todo);

      console.log(todo);
    }
  }
}
