import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//import for components
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorAddComponent } from './actor-add/actor-add.component';
import { LoginComponent } from './login/login.component';

import { MSCDashboardComponent } from './mscdashboard/mscdashboard.component';
import { MsctestserverComponent } from './msctestserver/msctestserver.component';
import { AngularFunctionalitiesComponent } from './angular-functionalities/angular-functionalities.component';


const routes: Routes = [
  { path: '', redirectTo: '/mscdashboard', pathMatch: 'full'}, // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //When the app starts it points to ''
  { path: 'mscdashboard', component: MSCDashboardComponent },
  { path: 'mscserver', component: MsctestserverComponent },
  { path: 'angular-functionalities', component: AngularFunctionalitiesComponent},


  { path: 'dashboard', component: DashboardComponent},
  { path: 'actors', component: ActorsComponent },

  // new routes
  { path: 'actorsList', component: ActorListComponent},
  { path: 'detail/:id', component: ActorDetailsComponent}, // HOW TO PASS A PARAMETER WITH ROUTING
  { path: 'addActor', component: ActorAddComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
