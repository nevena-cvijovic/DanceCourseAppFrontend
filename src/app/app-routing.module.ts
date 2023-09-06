import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {KurseviComponent} from "./kursevi/kursevi.component";
import {PlesoviComponent} from "./plesovi/plesovi.component";
import {GrupeComponent} from "./grupe/grupe.component";
import {AddGrupaComponent} from "./grupe/add-grupa/add-grupa.component";
import {PrijaveComponent} from "./prijave/prijave.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {HomeKorisnikComponent} from "./home-korisnik/home-korisnik.component";
import {authGuardGuard} from'./auth/auth-guard.guard';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    title:'Home',
    pathMatch: 'full'
  },
  {

    path:'kursevi',
    children: [
      { path: '', component: KurseviComponent, title: 'Kursevi' , canActivate:[authGuardGuard]},

    ],
  },
  {
    path:'plesovi',
    children:[
      {path: '', component: PlesoviComponent, title:'Plesovi', canActivate:[authGuardGuard]},
    ]
  },
  {
    path:'grupe',
    children:[
      {path: '', component: GrupeComponent, title:'Grupe', canActivate:[authGuardGuard]},
      {path: 'add-grupa', component: AddGrupaComponent, title: "Add grupa", canActivate:[authGuardGuard]}
    ]
  },
  {
    path:'prijave',
    children:[
      {path: '', component: PrijaveComponent, title:'Prijave', canActivate:[authGuardGuard]},
    ]
  },
  {
    path:'register',
    children:[
      {path: '', component: RegisterComponent, title:'Register'},
    ]
  },
  {
    path:'login',
    children:[
      {path: '', component: LoginComponent, title:'Login'},
    ]
  },
  {
    path:'maravilla-arte',
    children:[
      {path: '', component: HomeKorisnikComponent, title:'HomeKorisnik', canActivate:[authGuardGuard]},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
