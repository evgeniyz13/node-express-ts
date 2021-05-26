import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './interfaces';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobsService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Job[]> {
    return this.http
      .get<JobResponse>(`${this.baseUrl}/vacancy/search`)
      .pipe(map((response: JobResponse) => response.documents));
  }
}

interface JobResponse {
  documents: Job[];
}
