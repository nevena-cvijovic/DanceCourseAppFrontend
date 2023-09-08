import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {DanceCourseService} from "../../dance-course.service";
import {Korisnik} from "../../model/korisnik-model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {AxiosService} from "../../axios.service";
import {AuthServiceService} from "../auth-service.service";

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

  constructor(private axiosService: AxiosService, public router: Router, private authService: AuthServiceService) {

  }




  registruj(registerForm: NgForm) {

    this.kor = registerForm.value;
    this.korisnik = this.authService.register(this.kor);





  }
}
