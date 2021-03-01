import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading = false;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    public router: Router,
    private toastService: ToastService
  ) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['home']);
    }
  }

  login() {
    this.loading = true;
    const { email, password } = this.formLogin.value;
    this.authService.login(email, password).subscribe(
      () => {
        this.router.navigate(['home']);
        this.formLogin.reset();
        this.loading = false;
      }, error => {
        console.log(error)
        const text = 'Email o contraseña incorrecta';
        this.toastService.toasError(text);
        this.loading = false;
      }
    )
  }

}

