import { Component, inject } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DexieService } from '../../services/dexie.service';
import { ILoginForm, IRegisterForm, LoginformComponent } from "../../UI/loginform/loginform.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginformComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  protected httpSVC = inject(HttpService)
  protected dexieSVC = inject(DexieService)

  protected handleLogin(){
   this.httpSVC.googleLogin(); 
  }
  protected async onRegister(user: IRegisterForm) {
    await this.httpSVC.register(user);
   await this.dexieSVC.setUser(user as ILoginForm);
   this.dexieSVC.refresh()
  }
  
  protected async onLogin(user: ILoginForm) {
    try{
      const response = await this.httpSVC.logIn(user);
      await this.dexieSVC.setUser(user);
      this.dexieSVC.refresh()
    }catch(e){
      console.log('error', e);
    }
  }

}
