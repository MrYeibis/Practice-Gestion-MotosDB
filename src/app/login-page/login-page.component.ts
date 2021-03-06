import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  LoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private authService: AuthService, private router: Router, private notifications: HotToastService) {
  }

  ngOnInit(): void {
    
  }
  get email() {
    return this.LoginForm.get('email');
  }

  get password() {
    return this.LoginForm.get('password');
  }

  submit() {
    if (!this.LoginForm.valid){
      return;
    }

    const { email, password } = this.LoginForm.value;
    this.authService.login(email, password).pipe(
      this.notifications.observe({
        success: 'Inicio de sesión exitoso',
        loading: 'Iniciando sesión',
        error: 'Ha occurido un error'
      })
    ).subscribe(() => {
      this.router.navigate(['/principal/init']);
    })

  }
}
