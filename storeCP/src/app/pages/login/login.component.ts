import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(fb: FormBuilder) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      pasword: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
