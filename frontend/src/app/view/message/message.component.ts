import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Account} from "../../model/account";

@Component({
  selector: 'app-massage',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit
{
  message:string = 'title';
  error:string = '';
  targetPage:string = 'Home';

  num:number = 5;
  constructor(private router:ActivatedRoute)
  {

  }

  ngOnInit():void
  {
    if(this.router.snapshot.params['message'] == 'logInSuccessful')
    {
      // @ts-ignore
      let doctor:Account = JSON.parse( window.sessionStorage.getItem('healthCenterUser') );
      this.message = 'Welcome Back ' + doctor.firstName + " " + doctor.lastName;
      this.targetPage = "Doctor/Home";
    }
    else if(this.router.snapshot.params['message'] == 'logOutSuccessful')
    {
      this.message = 'You Are Already Log Out';
      this.targetPage = "LogIn";
    }
    else if(this.router.snapshot.params['message'] == 'updateSuccessful')
    {
      this.message = 'Your Account Info Has Already Update';
      this.targetPage = document.referrer;
    }
    else
    {
      this.message = 'Error: ' + this.router.snapshot.params['message'];
      this.targetPage = document.referrer;
    }


    setInterval(
      ()=>
      {
        if(this.num != 0)
        {
          // @ts-ignore
          document.getElementById('timer').innerHTML = '<h2>Jump after '+this.num+' seconds</h2>';
          this.num = this.num - 1;
          console.log(this.num);
        }
        else
        {
          this.num = 5;
          window.location.href = this.targetPage;
        }
      },1000);
  }
}
