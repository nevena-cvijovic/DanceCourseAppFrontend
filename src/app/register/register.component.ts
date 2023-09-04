import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DanceCourseService} from "../dance-course.service";
import {Korisnik} from "../model/korisnik-model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm: FormGroup;
  hide = true;

  constructor(private service: DanceCourseService) {

  }


  ngOnInit() {
    this.registerForm = new FormGroup({
      ime: new FormControl(null, Validators.required),
      prezime: new FormControl(null, Validators.required),
      datumRodjenja: new FormControl(null, Validators.required),
      kontaktTelefon: new FormControl(null, Validators.required),
      mejl: new FormControl(null, [Validators.required, Validators.email]),
      korisnickoIme: new FormControl(null, Validators.required),
      lozinka: new FormControl(null, [Validators.required, Validators.minLength(7)])
    })
  }

  registruj() {

    console.log(this.registerForm)
    this.service.dodajKorisnika(this.registerForm.value).subscribe(
      (response: Korisnik)=>{
        console.log(response);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    this.registerForm.reset();

  }
}
