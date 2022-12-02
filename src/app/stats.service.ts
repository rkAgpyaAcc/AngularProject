import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  getData():Observable<any>
  {
    let url ="https://630369f20de3cd918b34e39e.mockapi.io/transactionstats";
    return this.http.get(url).pipe(catchError(this.handleError))
  }

  handleError(error){
    return throwError(error.message)
  }

  constructor(private http:HttpClient) { }
}

