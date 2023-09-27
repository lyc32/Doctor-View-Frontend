import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Appointment } from "../model/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService
{
  private baseURL = "http://localhost:8080/api/v1/appointments/";

  constructor(private httpClient:HttpClient)
  { }


  getAppointmentsByDoctorIDAndDate(doctor_id:number,date:number):Observable<Appointment []>
  {
    console.log(this.baseURL + 'doctor/date/' + doctor_id + "/" + date);
    return this.httpClient.get<Appointment[]>(this.baseURL + 'doctor/date/' + doctor_id + "/" + date);
  }

}
