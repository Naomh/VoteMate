import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CodeFormComponent } from "../code-form/code-form.component";

export interface ILoginForm{
  email:string;
  password:string;
}
export interface IRegisterForm{
  name: string;
  email: string;
  password: string;
}
export interface IResetPwForm{
  email: string;
}
export interface IEnterCodeForm{
  code: string;
  password: string;
}

@Component({
    selector: 'UI-loginform',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, CodeFormComponent],
    templateUrl: './loginform.component.html',
    styleUrl: './loginform.component.scss'
})

export class LoginformComponent {
@Output() googleLogin = new EventEmitter<void>();
@Output() login = new EventEmitter<ILoginForm>();
@Output() register = new EventEmitter<IRegisterForm>();
@Output() resetPw = new EventEmitter<IResetPwForm>();
@Output() enterCode = new EventEmitter<IEnterCodeForm>();

private formBuilder = inject(FormBuilder);
private route = inject(ActivatedRoute);

protected formTemplate: 'login' | 'register' | 'resetPw' | 'enterCode' = 'login'; 
protected registrationForm: FormGroup;
protected loginForm: FormGroup;
protected resetPwForm: FormGroup;
protected enterCodeForm: FormGroup;

constructor(){

  this.registrationForm = this.formBuilder.group({
    name: ['', Validators.required],           
    email: ['', [Validators.required, Validators.email]], 
    password: ['', [Validators.required, Validators.minLength(6)]], 
    confirmPassword: ['', Validators.required] 
  }, { validators: this.passwordMatchValidator })

  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  this.resetPwForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })

  this.enterCodeForm = this.formBuilder.group({
    code: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]], 
    confirmPassword: ['', Validators.required]
  },{ validators: this.passwordMatchValidator })
}

protected switchTemplate(){
  if(this.formTemplate === 'login'){
    this.formTemplate = 'register'
  }else{
    this.formTemplate = 'login'
  }
}
protected switchTemplatePw(){
  if(this.formTemplate === 'login'){
    this.formTemplate = 'resetPw'
  }else{
    this.formTemplate = 'login'
  }
}

protected switchTemplateCode(){
  if(this.formTemplate === 'resetPw'){
    this.formTemplate = 'enterCode'
  }else{
    this.formTemplate = 'login'
  }
}

protected onGoogleLogin(){
  this.googleLogin.emit();
}
protected onLogin(){
  const user = this.loginForm.value;
  if(user){
    this.login.emit(user as ILoginForm);
  }

}
protected onRegistration(){
  const user = this.registrationForm.value;
  if(user){
    this.register.emit(user as IRegisterForm);
  }

}

protected resetPassword(){
  const email = this.resetPwForm.value;
  if(email){
    this.resetPw.emit(email);
  }
  this.formTemplate = 'enterCode';
}

protected checkCode(){
  const codeForm = this.enterCodeForm.value as IEnterCodeForm;
  this.enterCode.emit(codeForm);
  this.formTemplate = 'login';
}

private passwordMatchValidator(formGroup: FormGroup) {
  return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
    ? null : { mismatch: true };
}

protected setCode(code: string) {
  this.enterCodeForm.get('code')?.setValue(code);
  this.enterCodeForm.get('code')?.markAsTouched();
}
}
