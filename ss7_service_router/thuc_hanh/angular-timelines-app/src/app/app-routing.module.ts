import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesAppComponent} from './timelines-app/timelines-app.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesAppComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
