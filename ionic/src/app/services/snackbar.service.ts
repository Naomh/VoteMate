import { Injectable } from '@angular/core';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private snackbarComponent: SnackbarComponent | null = null;

  register(snackbar: SnackbarComponent) {
    this.snackbarComponent = snackbar;
  }

  show(message: string, type: 'failure' | 'success' = 'failure') {
    if (this.snackbarComponent) {
      this.snackbarComponent.show(message, type);
    }
  }
}
