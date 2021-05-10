import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  playersNickname: String;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    if(this.playersNickname) {
      this.loginService.login(this.playersNickname)
    } else {
      alert('Choose a nickname to login')
    }
  }

}
