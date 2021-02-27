import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.loading = true;
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password).then( (algo) => {
      this.loading = false;
    })
  }

}
