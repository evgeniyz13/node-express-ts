import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetails } from '../interfaces';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: [],
})
export class JobDetailsComponent implements OnInit {
  public job: JobDetails | undefined;

  constructor(private route: ActivatedRoute, public jobsService: JobsService) {}

  async ngOnInit(): Promise<void> {
    const jobId: string = this.route.snapshot.paramMap.get('id')!;

    this.getJobDetails(jobId);
  }

  async getJobDetails(jobId: string) {
    this.jobsService.getJobDetails(jobId).subscribe((response: JobDetails) => {
      console.log(response);
      this.job = response;
    });
  }
}
