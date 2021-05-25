import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: [],
})
export class JobListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('test');
  }
}
