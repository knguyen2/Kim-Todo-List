import { Component, OnInit } from '@angular/core';
import { Task } from './../shared/knguyenTask';
import { TaskList } from './../shared/knguyenTaskList';

@Component({
  selector: 'app-knguyen-todolist',
  templateUrl: './knguyen-todolist.component.html',
  styleUrls: ['./knguyen-todolist.component.css']
})

export class KnguyenTodolistComponent implements OnInit {

  list = TaskList;

  item: Task;

  onSelect(list: Task) {
    this.item = list;
  }


  constructor() { }

  ngOnInit() {
  }

}
