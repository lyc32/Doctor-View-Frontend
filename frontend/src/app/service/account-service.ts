import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import { Account } from "../model/account";


@Injectable({
  providedIn: 'root'
})
export class AccountService
{

  private baseURL = "http://localhost:8080/api/v1/accounts/";

  constructor(private httpClient:HttpClient)
  { }

  login(email:string, password:string):Observable<Account>
  {
    const info = {
      email: email,
      password: password
    }
    const params = new HttpParams({
      fromObject: info
    });
    console.log(params);
    return this.httpClient.post<Account>(this.baseURL +'login', params);
  }


  updatePhone(id:number, phone:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      phone: phone
    }
    return this.httpClient.put<Account>(this.baseURL + id, JSON.stringify(info), {headers: httpHeaders });
  }

  updateEmail(id:number, email:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      emailId: email
    }
    return this.httpClient.put<Account>(this.baseURL + id, JSON.stringify(info), {headers: httpHeaders });
  }

  resetPassword(id:number, password:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      password: password
    }
    return this.httpClient.put<Account>( this.baseURL + id, JSON.stringify(info), {headers: httpHeaders });
  }

  updateDetails(id:number, details:string):Observable<Account>
  {
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const info = {
      id: id,
      details: details
    }
    return this.httpClient.put<Account>( this.baseURL + id, JSON.stringify(info), {headers: httpHeaders });
  }


}
