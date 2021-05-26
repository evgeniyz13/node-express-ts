import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: [],
})
export class JobListComponent implements OnInit {
  constructor(public jobsService: JobsService) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobsService.getAllJobs();
  }
}
