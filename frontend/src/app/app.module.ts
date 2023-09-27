import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DoctorDashboard } from "./view/doctor-Dashboard/doctor-Dashboard";
import { AccountInfoComponent } from './view/account-info/account-info.component';
import { LoginComponent } from './view/login/login.component';
import { SigninComponent } from './view/signin/signin.component';
import { MessageComponent } from './view/message/message.component';
import { SearchAppointmentComponent } from './view/search-appointment/search-appointment.component';

@NgModule({
  declarations: [
    AppComponent,

    DoctorDashboard,
    AccountInfoComponent,

    LoginComponent,
    SigninComponent,
    MessageComponent,
    SearchAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
