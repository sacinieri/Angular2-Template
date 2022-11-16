import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-msctestserver',
  templateUrl: './msctestserver.component.html',
  styleUrls: ['./msctestserver.component.css']
})
export class MsctestserverComponent implements OnInit {

  realUrl: string = "https://localhost:44367/AngularStarting/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.serverTest(); // this.actorService.readAllActors().subscribe(actors => this.actors = actors);
  }


  serverTest (): Observable<string>{
    const urlSuffix = "Welcome";
    const readUrl = `${this.realUrl}/${urlSuffix}`;
    console.log(readUrl);
    const result =  this.http.get<string>(readUrl)
      .pipe(
      catchError(this.handleError<string>(urlSuffix))
      )
      ;

      console.log('-> ', result);
      return result;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
