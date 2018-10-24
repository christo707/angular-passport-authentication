import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  useremail : string;
  userpassword : string;

  registerationForm = new FormGroup({

  emailFormControl : new FormControl('', [
    Validators.required,
    Validators.email,
  ]),

  passwordFormControl : new FormControl('', [
    Validators.required
  ])
});

  constructor(private route : Router) { }

  ngOnInit() {
      localStorage.clear();
  }

onFormSubmit() {
  localStorage.clear();
  let participant = {email: this.useremail, password: this.userpassword}
  localStorage.setItem('participant',JSON.stringify(participant));
  this.route.navigate(['/home']);
}

}
