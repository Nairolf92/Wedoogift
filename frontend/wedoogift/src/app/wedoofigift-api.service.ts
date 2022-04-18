import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WedoofigiftAPIService {

  private shopId: number = 0;
  private REST_API_SERVER: string = 'http://localhost:3000';
  private SEARCH_COMBINATION: string = '';

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

  public getCards(amount: number, shopId: number = 5){
    let param: any = {'amount' : amount};
    this.shopId = shopId;
    this.SEARCH_COMBINATION = `${this.REST_API_SERVER}/shop/${(this.shopId)}/search-combination`;

    return this.httpClient.get(this.SEARCH_COMBINATION, {params: param}).pipe(catchError(this.handleError));
  }
}
