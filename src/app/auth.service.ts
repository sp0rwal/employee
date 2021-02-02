import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  islogin:boolean = false;
  constructor() { }

  isUserLogin()
  {
    return this.islogin;
  }
  logIn(userid:string,pwd:String)
  {
    
    if('porwal' === userid && 'porwal'=== pwd)
    {
      this.islogin = true;
    }
   
    console.log(this.islogin);
  }
  logOut()
  {
    this.islogin=false;
  }
}
