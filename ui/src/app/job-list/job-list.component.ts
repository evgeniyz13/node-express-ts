import { Component, OnInit } from '@angular/core';
import { Job } from '../interfaces';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: [],
})
export class JobListComponent implements OnInit {
  public jobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs() {
    this.jobsService.getAllJobs().subscribe((jobs: Job[]) => {
      console.log(jobs);
      this.jobs = jobs;
    });
  }
}
