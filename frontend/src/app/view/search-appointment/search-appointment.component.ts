import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppointmentService} from "../../service/appointment-service";
import {Account} from "../../model/account";
import {Appointment} from "../../model/appointment";

@Component({
  selector: 'app-search-appointment',
  templateUrl: './search-appointment.component.html',
  styleUrls: ['./search-appointment.component.css']
})
export class SearchAppointmentComponent implements OnInit
{

  user:Account = new Account();
  currentAppointmentList: Appointment[] = [];
  currentAppointment:Appointment = new Appointment();

  ngOnInit()
  {
    this.router.snapshot.params['role'];
    // @ts-ignore
    this.user = JSON.parse(window.sessionStorage.getItem('healthCenterUser'));
  }

  constructor(private router:ActivatedRoute, private appointmentService:AppointmentService)
  {
  }

}
