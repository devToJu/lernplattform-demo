import { AuthService } from './../service/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  text = "Login";

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials: LoginParam)
  {
    if (this.authService.login(credentials)) {
      this.router.navigate(['/']);
    }
    else {
      this.invalidLogin = true;
    }
    
    // this.authService.login(credentials)
    //   .subscribe(result => {
    //     if (result)
    //       this.router.navigate(['/']);
    //     else
    //       this.invalidLogin = true;
    //   });
  }
}

export interface LoginParam {
  email: string;
  inputPassword: string;
}