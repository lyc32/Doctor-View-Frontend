import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboard } from "./view/doctor-Dashboard/doctor-Dashboard";
import { LoginComponent } from "./view/login/login.component";
import { SigninComponent } from "./view/signin/signin.component";
import {MessageComponent} from "./view/message/message.component";
import {AccountInfoComponent} from "./view/account-info/account-info.component";
import {SearchAppointmentComponent} from "./view/search-appointment/search-appointment.component";

const routes: Routes = [
  {path:"logIn"                   , component:LoginComponent},
  {path:"signIn"                  , component:SigninComponent},
  {path:"doctor/appointment/:date", component:DoctorDashboard},
  {path:"myAccount/:type"         , component:AccountInfoComponent},
  {path:"myAccount/appointments/:date" , component:AccountInfoComponent},
  {path:":role/search/appointment"    , component:SearchAppointmentComponent},
  {path:"message/:message"      , component:MessageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

