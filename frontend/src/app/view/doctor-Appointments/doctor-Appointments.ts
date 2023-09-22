import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-Appointments.html',
  styleUrls: ['./doctor-Appointments.css'],
})
export class DoctorAppointments implements OnInit
{

  year:string = "2023";
  mouth:string = "September";
  days:number[] = Array(30).fill(1).map((x,i)=> (i+1) );
  date:number = 22


  currentSecords:number = -1
  currentMinutes:number = -1;
  currentHours:number = -1;

  now: Date = new Date();

  ngOnInit()
  {

    this.now = new Date();

    setInterval
    (() => {
      this.now = new Date();
      this.setSecondPointerPosition()
    }, 1000);
  }

  constructor()
  {

  }

  setSecondPointerPosition()
  {
    let dom:any = document.querySelector('.second-pointer');
    const newSecords = new Date().getSeconds();
    if (newSecords != this.currentSecords)
    {
      this.currentSecords = newSecords
      dom.style.transform = `translate(-50%, -100%) rotate(${360 * this.currentSecords / 60}deg)`;
      this.setMinutePointerPosition();
    }
  }

  setMinutePointerPosition()
  {
    let dom:any = document.querySelector('.minute-pointer');
    const newMinutes = new Date().getMinutes();
    if (newMinutes != this.currentMinutes)
    {
      this.currentMinutes = newMinutes;
      dom.style.transform = `translate(-50%, -100%) rotate(${360 * this.currentMinutes / 60}deg)`;
      this.setHourPointerPosition();
    }
  }

  setHourPointerPosition()
  {
    let dom:any = document.querySelector('.hour-pointer');
    const newHours = new Date().getHours();
    if (newHours != this.currentHours)
    {
      this.currentHours = newHours;
      dom.style.transform = `translate(-50%, -100%) rotate(${(360 * newHours / 12)+(30*this.currentMinutes/60)}deg)`
    }

  }
}
