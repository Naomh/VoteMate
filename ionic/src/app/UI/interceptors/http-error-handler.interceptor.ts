import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { catchError, of, throwError } from 'rxjs';


export const httpErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbarSVC = inject(SnackbarService);
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Something went wrong. Try it again.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error ${error.status}: ${error.message}`;
        }

        // Zobrazení snackbaru
        //snackbarSVC.show(errorMessage);
        //return of(new HttpResponse({ status: 500, body: { message: 'Fallback data' } }))
        return throwError(() => new Error(errorMessage));
      })
    );
  }
