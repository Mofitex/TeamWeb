import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LolPlayersComponent } from './components/lol-players/lol-players.component';
import { LolTeamsComponent } from './components/lol-teams/lol-teams.component';
import { OwPlayersComponent } from './components/ow-players/ow-players.component';
import { OwTeamsComponent } from './components/ow-teams/ow-teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecoverComponent } from './components/recover/recover.component';

const AppRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lol/players', component: LolPlayersComponent },
  { path: 'lol/teams', component: LolTeamsComponent },
  { path: 'ow/players', component: OwPlayersComponent },
  { path: 'ow/teams', component: OwTeamsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recoverpasswd', component: RecoverComponent },

  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(AppRoutes);
