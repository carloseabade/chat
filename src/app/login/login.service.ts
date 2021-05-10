import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private socket: Socket
  ) { };

  login(playersNickname): void {
    this.socket.emit('login', { nickname: playersNickname })
    this.router.navigate(['chat'])
  }
}
