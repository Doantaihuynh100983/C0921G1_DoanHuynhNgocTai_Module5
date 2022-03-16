import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListLohangComponent} from './list-lohang/list-lohang.component';
import {AddLohangComponent} from './add-lohang/add-lohang.component';


const routes: Routes = [
  {path: '',component: ListLohangComponent},
  {path:'add',component: AddLohangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
