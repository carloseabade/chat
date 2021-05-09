import { PlayersListComponent } from './chat/players-list/players-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
      ChatComponent,
      LoginComponent,
      PlayersListComponent,
      ChatDetailComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
