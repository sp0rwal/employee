import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private authGuard:AuthGuard,private router:Router) { }
  loginForm:FormGroup;
  ngOnInit() {
    
    if(this.authService.isUserLogin())
    {
      this.router.navigate['/home'];
    }else
    {
      this.initilization();
    }

  }

  initilization()
  {
    this.loginForm= new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
     
    })
  }

  login()
  {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.authService.logIn(username,password);
    this.router.navigate(['/home']);

  }
  logOut()
  {
    
    this.authService.logOut();
    this.router.navigate(['/login']);

  }
  @Input() error: string | null;
}
