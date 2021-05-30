import { Component, OnInit } from '@angular/core'
import { JobsService } from '../jobs.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: [],
})
export class JobListComponent implements OnInit {
  constructor(public jobsService: JobsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllJobs()
  }

  toJobDetails(id: string) {
    this.router.navigate([`/job-details/${id}`], {
      skipLocationChange: true,
    })
  }

  getAllJobs() {
    this.jobsService.getAllJobs()
  }
}
