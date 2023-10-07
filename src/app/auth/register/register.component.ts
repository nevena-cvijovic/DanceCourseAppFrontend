import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {DanceCourseService} from "../../dance-course.service";
import {Korisnik} from "../../model/korisnik-model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AxiosService} from "../../axios.service";
import {AuthServiceService} from "../auth-service.service";
import {MatDialog} from "@angular/material/dialog";
import {
  UspesnoKreiranNalogDialogComponent
} from "./uspesno-kreiran-nalog-dialog/uspesno-kreiran-nalog-dialog.component";
import {
  NeuspesnoKreiranNalogDialogComponent
} from "./neuspesno-kreiran-nalog-dialog/neuspesno-kreiran-nalog-dialog.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

korisnik:Korisnik;
  hide = true;
kor:Korisnik;
  ime: string = "";
  prezime: string = "";
  kontaktTelefon: string="";
  datumRodjenja: Date = new Date();
  mejl: string ="";
  korisnickoIme: string="";
  lozinka:string="";

  constructor(private axiosService: AxiosService, public router: Router, private authService: AuthServiceService, public dialog: MatDialog) {

  }




  registruj(registerForm: NgForm) {

    this.kor = registerForm.value;
    this.korisnik = this.authService.register(this.kor);

if(this.korisnik!==null){

this.router.navigateByUrl("/login");
}




  }
}
