import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formLogin: FormGroup;

  constructor(fb: FormBuilder) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      pasword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    const valuesForm = { ...this.formLogin.value };
    console.log(valuesForm)
  }

}
