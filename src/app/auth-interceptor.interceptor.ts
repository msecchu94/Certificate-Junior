import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Agregar lógica para manipular las solicitudes HTTP antes de ser enviadas

    // Por ejemplo, puedes agregar encabezados de autenticación
    const token = 'token-de-autenticacion';
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Continuar con la solicitud y manejar posibles errores
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Agregar lógica para manejar errores de HTTP

        // Por ejemplo, puedes realizar acciones específicas según el código de estado
        if (error.status === 401) {
          // Realizar acciones de redirección, mostrar mensajes de error, etc.
        }

        // Devolver el error para que se maneje en el lugar correspondiente
        return throwError(error);
      })
    );
  }
}
