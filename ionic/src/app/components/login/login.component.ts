import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DexieService } from '../../services/dexie.service';
import {
IEnterCodeForm,
  ILoginForm,
  IRegisterForm,
  IResetPwForm,
  LoginformComponent,
} from '../../UI/loginform/loginform.component';
import { SnackbarService } from '../../services/snackbar.service';
import { ButtonComponent, ButtonHandler } from '../../UI/button/button.component';

@Component({
    selector: 'app-login',
    imports: [LoginformComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent extends ButtonHandler {

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

  protected async onRegister(form: IRegisterForm) {
    try {
      await this.httpSVC.register(form);
      await this.dexieSVC.setUser(form as ILoginForm);
    } catch (e) {
      throw new Error('Registration failed');
    }
  }

  protected async onLogin(form: ILoginForm) {
    try {
      await this.httpSVC.logIn(form);
      await this.dexieSVC.setUser(form);
    } catch (e) {
      console.error(e);
      throw new Error('Login failed');
    }
  }

  protected async onResetPassword(email: IResetPwForm) {
    try{
      await this.httpSVC.resetPassword(email);
    }catch(e){
      console.error(e);
      throw new Error('Password reset failed')
    }
  }

  protected async onEnterCode(form: IEnterCodeForm) {
    try {
      await this.httpSVC.enterCode(form);
      this.snackbarSVC.show('Code entered successfully', 'success');
    } catch (e) {
      console.error(e);
      throw new Error('Code entry failed');
    }
  }
}
