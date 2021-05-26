import { Component, Input, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: [],
})
export class SearchPageComponent implements OnInit {
  public isRecent: boolean = true;

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getRecentJobs();
  }

  setSearchValue(input: string): void {
    this.jobsService.saveSearchInput(input);
  }

  submitSearch() {
    this.isRecent = false;
    this.jobsService.getAllJobs();
  }
}
