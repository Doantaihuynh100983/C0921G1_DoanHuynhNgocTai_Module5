import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {HomeComponent} from './home/home.component';
import {CustomerModule} from './customer/customer.module';
import {EmployeeModule} from './employee/employee.module';
import {ContractModule} from './contract/contract.module';
import {ServiceModule} from './service/service.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    EmployeeModule,
    ContractModule,
    ServiceModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
