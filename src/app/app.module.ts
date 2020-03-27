import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { ReponseComponent } from './reponse/reponse.component';
import { LottieModule } from 'ngx-lottie';
 
export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReponseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [LottieModule.forRoot({ player: playerFactory })],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
