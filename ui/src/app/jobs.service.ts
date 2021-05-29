import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job, JobDetails } from './interfaces';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private baseUrl = 'http://localhost:5000';
  public input: string = '';
  public city: string = '';
  public jobs: Job[] = [];

  constructor(private http: HttpClient) {}

  saveSearchInput(input: string) {
    this.input = input;
  }

  setCityValue(input: string) {
    this.city = input;
  }

  getAllJobs() {
    const params = new HttpParams()
      .set('ukrainian', true)
      .set('keyWords', this.input)
      .set('additionalKeywords', this.city);

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

  getJobDetails(id: string) {
    const params = new HttpParams().set('ukrainian', true).set('id', id);

    return this.http.get<JobDetails>(`${this.baseUrl}/vacancy`, { params });
  }
}

interface JobResponse {
  documents: Job[];
}
