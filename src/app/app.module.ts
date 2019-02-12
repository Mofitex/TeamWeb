import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas

import { AppRouting } from './app.routes';

//Servicios

//Compontentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LolPlayersComponent } from './components/lol-players/lol-players.component';
import { LolTeamsComponent } from './components/lol-teams/lol-teams.component';
import { OwPlayersComponent } from './components/ow-players/ow-players.component';
import { OwTeamsComponent } from './components/ow-teams/ow-teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    LolPlayersComponent,
    LolTeamsComponent,
    OwPlayersComponent,
    OwTeamsComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
