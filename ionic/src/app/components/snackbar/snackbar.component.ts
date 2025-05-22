import { Component } from '@angular/core';

@Component({
    selector: 'UI-snackbar',
    imports: [],
    templateUrl: './snackbar.component.html',
    styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  protected isVisible = false;
  protected message = '';
  protected type: 'failure' | 'success' = 'failure';


  public show(message: string, type: 'failure' | 'success' = 'failure') {
    this.type = type;
    this.message = message;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 5000);
  }
}