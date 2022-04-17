import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WedoofigiftAPIService {

  private REST_API_SERVER = "http://localhost:3000/shop/5/search-combination";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public getCards(amount: number){
    let param: any = {'amount' : amount};
    return this.httpClient.get(this.REST_API_SERVER, {params: param}).pipe(catchError(this.handleError));
  }
}
