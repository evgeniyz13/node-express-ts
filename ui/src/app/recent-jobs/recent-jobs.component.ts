import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { JobsService } from '../jobs.service'

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: [],
})
export class RecentJobsComponent implements OnInit {
  constructor(public jobsService: JobsService, private router: Router) {}

  ngOnInit(): void {
    this.getRecentJobs()
  }

  toJobDetails(id: string) {
    this.router.navigate([`/job-details/${id}`], {
      skipLocationChange: true,
    })
  }

  getRecentJobs() {
    this.jobsService.getRecentJobs()
  }
}
