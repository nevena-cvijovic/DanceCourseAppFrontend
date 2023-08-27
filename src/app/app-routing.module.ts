import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {KurseviComponent} from "./kursevi/kursevi.component";
import {PlesoviComponent} from "./plesovi/plesovi.component";

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
      { path: '', component: KurseviComponent, title: 'Kursevi' },

    ],
  },
  {
    path:'plesovi',
    children:[
      {path: '', component: PlesoviComponent, title:'Plesovi'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
