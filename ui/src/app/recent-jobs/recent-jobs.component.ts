import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: [],
})
export class RecentJobsComponent implements OnInit {
  public jobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.getRecentJobs();
  }

  getRecentJobs() {
    this.jobsService.getAllJobs().subscribe((jobs: Job[]) => {
      this.jobs = jobs.slice(0, 3);
    });
  }
}
