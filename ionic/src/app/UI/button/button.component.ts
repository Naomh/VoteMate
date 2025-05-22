import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { firstValueFrom, from } from 'rxjs';
import { AsyncFunction } from 'web3-utils';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'button[ui-button]',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Output() click = new EventEmitter<MouseEvent>();

  @HostBinding('class.failure') isFailure = false;
  @HostBinding('class.success') isSuccess = false;

  public state: 'loading' | 'ready' = 'ready';
  public result: 'success' | 'failure' | 'neutral' = 'neutral';

  private snackbarSVC: SnackbarService = inject(SnackbarService);

  public setFailure(message?: string) {
    if (message) {
      this.snackbarSVC.show(message);
    }
    this.result = 'failure';
    this.setState('failure');
    setTimeout(() => {
      this.result = 'neutral';
      this.setState('neutral');
    }, 1000);
  }

  public setSuccess(message?: string) {
    if (message) {
      this.snackbarSVC.show(message, 'success');
    }
    this.result = 'success';
    this.setState('success');
    setTimeout(() => {
      this.result = 'neutral';
      this.setState('neutral');
    }, 1000);
  }
  
  setState(state: 'failure' | 'success' | 'neutral') {
    this.isFailure = state === 'failure';
    this.isSuccess = state === 'success';
  }

}


export class ButtonHandler {
  protected async handleButtonAction(button: ButtonComponent, successMessage: string | undefined = undefined, failureMessage: string | undefined = undefined, action: (...args: any[]) => Promise<void>, ...args: any[]) {
    try {
      button.state = 'loading';
      await action(...args);
      button.setSuccess(successMessage);
    } catch (e) {
      console.error(e);
      button.setFailure(failureMessage ?? <string>e);
      throw e;
    } finally {
      button.state = 'ready';
    }
  }
}
