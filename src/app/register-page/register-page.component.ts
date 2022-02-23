import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  RegisterForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  }, { validators: passwordsMatchValidator() })

  constructor(private authService: AuthService, private router: Router, private notifications: HotToastService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.RegisterForm.value.email;
  }

  get password() {
    return this.RegisterForm.value.password;
  }

  submit() {
    if (!this.RegisterForm.valid){
      return;
    }

    const { email, password } = this.RegisterForm.value;
    this.authService.register(email, password).pipe(
      this.notifications.observe({
        success: 'Registro Exitoso',
        loading: 'Registrando Usuario',
        error: 'Ha occurido un error'
      })
    ).subscribe(() => {
      this.router.navigate(['/login']);
    })

  }

}
