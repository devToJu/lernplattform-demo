import { AuthService } from './../service/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isLogin = true;
  
  @Input() text = "Login";
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isTeacher() {
    let user = this.authService.getCurrentUser();
    return user.teacher;
  }
}
