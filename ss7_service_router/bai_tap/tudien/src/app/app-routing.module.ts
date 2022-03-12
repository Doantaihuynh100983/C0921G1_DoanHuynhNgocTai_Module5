import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionayPageComponent} from './dictionay-page/dictionay-page.component';


const routes: Routes = [
  {path: '', component: DictionayPageComponent},
  {path: 'dictionary/detail/:word', component: DictionaryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
