import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthServiceService} from "../auth-service.service";
import {AxiosService} from "../../axios.service";
import {Route, Router} from "@angular/router";
import {Korisnik} from "../../model/korisnik-model";
import {MatDialog} from "@angular/material/dialog";
import {UspesnoLogovanjeDialogComponent} from "./uspesno-logovanje-dialog/uspesno-logovanje-dialog.component";
import {NeuspesnoLogovanjeDialogComponent} from "./neuspesno-logovanje-dialog/neuspesno-logovanje-dialog.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;



  constructor(private axiosService: AxiosService, private authService: AuthServiceService, public router:Router, public dialog: MatDialog) {
  }

korisnickoIme: string="";
lozinka: string = "";

korisnik:Korisnik;
onSubmitLogin(loginForm: NgForm):void{

this.korisnik = this.authService.logIn(this.korisnickoIme, this.lozinka);
console.log(this.korisnik)
if(this.korisnik!=null){

if(this.korisnik.korisnickoIme ==="admin"){
  this.router.navigateByUrl("/kursevi")
}else{
  this.router.navigateByUrl("/maravilla-arte")
}
}else{

}
  }




}
