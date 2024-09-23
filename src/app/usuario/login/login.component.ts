import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CompartidoService } from '../../compartido/compartidoService/compartido.service';
import { Login } from '../interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formLogin: FormGroup;
  hidePaswword: boolean = true;
  showLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private compartidoService: CompartidoService,
  ) {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }



  initSesion(): void {
    this.showLoading = true;
    const request: Login = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password
    }
    this.userService.initSesion(request)
      .subscribe({
        next: (response) => {
          this.compartidoService.saveSesion(response);
          this.router.navigate(['layout']);
        },
        complete: () => {
          this.showLoading = false;
        },
        error: (error) => {
          this.compartidoService.showAlert(error.error, 'Error!');
          this.showLoading = false;
        }
      });
  };



}
