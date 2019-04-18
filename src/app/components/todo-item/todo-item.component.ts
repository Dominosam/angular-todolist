import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input ()todo: Todo; 

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    //Toggle on UI
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo);
    console.log(todo.id + ' toggled');
  }

  onDelete(todo){
    console.log(todo.id + ' deleted');
  }

}
