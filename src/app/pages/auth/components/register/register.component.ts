import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formLogin: FormGroup;

  constructor(fb: FormBuilder,
    private authService: AuthService,
    private toastService : ToastService,
    public router : Router ) {
    this.formLogin = fb.group({
      email: ['', Validators.required],
      password: ['',[ Validators.required, Validators.min(6)]],
    });
  }

  ngOnInit(): void {
  }

  registerUser() {
    const { email, password } = this.formLogin.value;
    this.authService.register(email, password).subscribe(
      (user) => {
        const succes = 'Usuario creado correctamente';
        this.toastService.toasSuccess(succes);
        this.router.navigate(['home']);
        localStorage.setItem('user', JSON.stringify(user.user));
      }, error => {
        const text = 'Revise los datos';
        this.toastService.toasError(text);
      }
    );
  }

}
