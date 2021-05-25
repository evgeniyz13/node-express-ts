import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { RecentJobsComponent } from './recent-jobs/recent-jobs.component';

const routes: Routes = [
  { path: '', redirectTo: '/recent-jobs', pathMatch: 'full' },
  { path: 'job-list', component: JobListComponent },
  { path: 'recent-jobs', component: RecentJobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
