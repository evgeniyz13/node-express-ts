import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private baseUrl = 'http://localhost:5000';
  public input: string = '';
  public jobs: Job[] = [];

  constructor(private http: HttpClient) {}

  saveSearchInput(input: string) {
    this.input = input;
  }

  getAllJobs() {
    const params = new HttpParams()
      .set('ukrainian', true)
      .set('keyWords', this.input);

    this.http
      .get<JobResponse>(`${this.baseUrl}/vacancy/search`, { params })
      .subscribe((response: JobResponse) => {
        this.jobs = response.documents;
      });
  }

  getRecentJobs() {
    const params = new HttpParams().set('ukrainian', true).set('count', 3);

    this.http
      .get<JobResponse>(`${this.baseUrl}/vacancy/search`, { params })
      .subscribe((response: JobResponse) => {
        this.jobs = response.documents;
      });
  }
}

interface JobResponse {
  documents: Job[];
}
