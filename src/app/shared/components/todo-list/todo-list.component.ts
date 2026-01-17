import { Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { Itodo } from '../../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todosArr: Array<Itodo> = [];
  // trackById!: TrackByFunction<any>;

  constructor() {}

  ngOnInit(): void {}
}
