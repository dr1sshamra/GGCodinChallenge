import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReponseComponent } from './reponse/reponse.component';


const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'reponse/:id', component : ReponseComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
