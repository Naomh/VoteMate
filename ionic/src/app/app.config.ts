import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorHandlerInterceptor } from './UI/interceptors/http-error-handler.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpErrorHandlerInterceptor])),
    provideCharts(withDefaultRegisterables())
  ]
};
