import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login() {
    // var author = $('input[name=username]').val();

    // if (author.length) {
    //   event.preventDefault();

    //   $('#login-container').css("visibility", "hidden");
    //   $('#chat-container').css("visibility", "visible");

    //   var author = $('input[name=username]').val();
    //   socket = io('https://abade-chat-who-am-i.herokuapp.com/', { query: `author=${author}` });

    //   socket.on('connectedUsers', function (users) {
    //     $('#users-container').empty()
    //     for (var id in users) {
    //       if (users.hasOwnProperty(id)) {
    //         renderUser(id, users[id]);
    //       }
    //     }
    //   });

    //   socket.on('previousMessages', function (messages) {
    //     for (message of messages) {
    //       renderMessage(message);
    //     }
    //   });

    //   socket.on('receivedMessage', function (message) {
    //     renderMessage(message);
    //   });

    //   document.getElementById("Message").focus();
    // } else {
    //   alert('Preencha o seu usuário para logar');
    // }
  }

}
