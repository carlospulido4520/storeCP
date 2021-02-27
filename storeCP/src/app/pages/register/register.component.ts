import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formLogin: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      password: ['',[ Validators.required, Validators.min(6)]],
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    const { email, password } = this.formLogin.value;
    this.authService.register(email, password);
  }

}
