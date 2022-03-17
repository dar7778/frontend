import { Injectable } from '@angular/core';
import { Observable,Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserStart } from '../models/UserStart';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url:string="http://localhost:3333/test/login";
  private respond:string;
  private pass1:string="pass";
  private suc1="{code:200}";
  private fail1="{code:400}";


  constructor(private http:HttpClient) { 


  }
  login(loginForm:UserStart){
    console.log("msk");
    console.log(loginForm);
    if(loginForm.getPassword()=="pass"){
      return this.suc1;
    }else{
      this.fail1;
    }
    //return this.http.post<string>(this.url,loginForm);

  }
}
