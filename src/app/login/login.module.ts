import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginService } from "./login.service";
import { FormsModule }   from '@angular/forms';
import { SocketIoConfig, SocketIoModule } from "ngx-socket-io";

const config: SocketIoConfig = { url: 'http://localhost:5000' };

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [],
  providers: [
    LoginService
  ],
  bootstrap: []
})
export class LoginModule {}
