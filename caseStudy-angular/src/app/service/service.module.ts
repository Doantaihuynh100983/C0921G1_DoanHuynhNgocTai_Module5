import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service.component';
import {RouterModule, Routes} from '@angular/router';
import {ListServiceComponent} from './list-service/list-service.component';
import {UpdateServiceComponent} from './update-service/update-service.component';
import {AddServiceComponent} from './add-service/add-service.component';


const serviceRoute: Routes = [
  {
    path: '', component: ListServiceComponent
  },
  {
    path: 'addService', component: AddServiceComponent
  },
  {
    path: 'updateService', component: UpdateServiceComponent
  },
];


@NgModule({
  declarations: [
    ServiceComponent,
    ListServiceComponent,
    UpdateServiceComponent,
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoute)
  ]
})
export class ServiceModule {
}
