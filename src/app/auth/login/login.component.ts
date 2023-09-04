import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  hide = true;
  loginForm: FormGroup;



  ngOnInit() {
    this.loginForm = new FormGroup({
      korisnickoIme: new FormControl(null, Validators.required),
      lozinka: new FormControl(null, [Validators.required, Validators.minLength(7)])
    })
  }
}
