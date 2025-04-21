import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DexieService } from '../../services/dexie.service';
import {
  ILoginForm,
  IRegisterForm,
  IResetPwForm,
  LoginformComponent,
} from '../../UI/loginform/loginform.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginformComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected httpSVC = inject(HttpService);
  protected dexieSVC = inject(DexieService);
  protected snackbarSVC = inject(SnackbarService)

  protected handleLogin() {
    try {
      this.httpSVC.googleLogin();
    } catch (e) {
      throw new Error('Google sign up failed');
    }
  }
  protected async onRegister(user: IRegisterForm) {
    try {
      await this.httpSVC.register(user);
      await this.dexieSVC.setUser(user as ILoginForm);
      this.dexieSVC.refresh();
    } catch (e) {
      throw new Error('Registration failed');
    }
  }

  protected async onLogin(user: ILoginForm) {
    try {
      await this.httpSVC.logIn(user);
      await this.dexieSVC.setUser(user);
      this.dexieSVC.refresh();
    } catch (e) {
      console.error(e);
      throw new Error('Login failed');
    }
  }

  protected async onResetPassword(email: IResetPwForm) {
    try{
      await this.httpSVC.resetPassword(email);
      this.snackbarSVC.show('Email sent', 'success');
    }catch(e){
      console.error(e);
      throw new Error('Password reset failed')
    }
  }
}
