import { PlayersListComponent } from './chat/players-list/players-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PlayersListComponent,
    ChatDetailComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
