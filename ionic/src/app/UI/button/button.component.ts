import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { firstValueFrom, from } from 'rxjs';
import { AsyncFunction } from 'web3-utils';
import { SnackbarService } from '../../services/snackbar.service';


@Component({
    selector: 'UI-button',
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;

  public state: 'loading' | 'ready' = 'ready'
  public result: 'success' | 'failure' | 'neutral' = 'neutral';  
  
  private snackbarSVC: SnackbarService = inject(SnackbarService);

  public setFailure(message?: string){
    if(message){
      this.snackbarSVC.show(message)
    }
    this.result = 'failure';
    setTimeout(() => {
      this.result = 'neutral'
    }, 1000);
  }

  public setSuccess(message?:string){
    if(message){
      this.snackbarSVC.show(message, 'success')
    }
    this.result = 'success';
    setTimeout(() => {
      this.result = 'neutral'
    }, 1000);
  }
}
