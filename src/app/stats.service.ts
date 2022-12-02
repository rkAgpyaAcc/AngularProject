import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable({
  providedIn: 'root'
})
export class StatsService {

  getData():Observable<any>
  {
    let url ="https://630369f20de3cd918b34e39e.mockapi.io/transactiostats";
    return this.http.get(url).pipe(catchError(this.handleError))
  }

  // handleError(error){
  //   return throwError(error.message)
  // }

  private handleError(errorResponse: HttpErrorResponse){


    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError('There is some problem with this serve')
  }


  constructor(private http:HttpClient) { }
}

