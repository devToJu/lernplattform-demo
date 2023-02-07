import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token;

  constructor(private http: HttpClient) { }

  login(credentials) {
    if (credentials.email == "a" && credentials.inputPassword == "a") {      
      this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDEiLCJlbWFpbCI6ImEiLCJwYXNzd29yZCI6ImEiLCJ0ZWFjaGVyIjp0cnVlfQ.NqllUL1mh3lrOtKUUJcw2UjZqi38YgIGXsc6SlfqhEs';
      localStorage.setItem('token', this.token);
      return true;
    }
    else if (credentials.email == "b" && credentials.inputPassword == "b") {
      this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMDIiLCJlbWFpbCI6ImIiLCJwYXNzd29yZCI6ImIiLCJ0ZWFjaGVyIjpmYWxzZX0.R08nsFk0mm_EEu5wcVuJrcUteaV2AeFcBt8LYtPnWgY';
      localStorage.setItem('token', this.token);
      return true;
    }
    else {
      return false;
    }

    // return this.http.post(
    //   '/api/authenticate',
    //   JSON.stringify(credentials));
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    this.token = localStorage.getItem("token");
    return this.token != null;

    //// Methode macht das was Code unten macht - geht gerade nicht....
    //return tokenNotExpired

    // let jwtHelper = new JwtHelperService();
    // let token = localStorage.getItem("token");

    // if (!token) {
    //   return false;
    // }

    // console.log(this.token);
    // console.log(token);

    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);
    
    // console.log("Ex-Date: ", expirationDate);
    // console.log("isExpired: ", isExpired);
    
    // return !isExpired;
  }

  getCurrentUser() {
    if (!this.token) return null;
    return new JwtHelperService().decodeToken(this.token);
  }
}
