import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";

export interface ILoginForm{
  email:string;
  password:string;
}
export interface IRegisterForm{
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'UI-loginform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.scss'
})

export class LoginformComponent {
@Output() googleLogin = new EventEmitter<void>();
@Output() login = new EventEmitter<ILoginForm>();
@Output() register = new EventEmitter<IRegisterForm>();

private formBuilder = inject(FormBuilder)

protected formTemplate: 'login' | 'register' = 'login'; 
protected registrationForm: FormGroup;
protected loginForm: FormGroup;

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
}

protected switchTemplate(){
  if(this.formTemplate === 'login'){
    this.formTemplate = 'register'
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

protected save(){
  
}

private passwordMatchValidator(formGroup: FormGroup) {
  return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
    ? null : { mismatch: true };
}

}
