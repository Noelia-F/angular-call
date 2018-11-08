import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MyAvatarComponent } from './myavatar/my-avatar.component';
import { MyDescriptionComponent } from './mydescription/my-description.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    MyAvatarComponent,
    MyDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
