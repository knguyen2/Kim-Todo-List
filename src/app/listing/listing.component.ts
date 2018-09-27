import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/knguyenTask';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  @Input() item: Task;

  constructor() { }

  ngOnInit() {
  }

}
