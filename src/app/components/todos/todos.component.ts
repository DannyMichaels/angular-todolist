import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },

      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }

  toggleDone(todoIndex: number): void {
    this.todos.map((todo: Todo, idx: number) => {
      if (idx === todoIndex) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
  }

  deleteTodo(todoIndex: number): void {
    this.todos = this.todos.filter((_todo, idx) => idx !== todoIndex);
  }

  addTodo(): void {
    const newTodo = {
      content: this.inputTodo,
      completed: false,
    };

    this.todos.push(newTodo);

    this.inputTodo = '';
  }
}
