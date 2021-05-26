import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: [],
})
export class RecentJobsComponent implements OnInit {
  constructor(public jobsService: JobsService) {}

  ngOnInit(): void {
    this.getRecentJobs();
  }

  getRecentJobs() {
    this.jobsService.getRecentJobs();
  }
}
