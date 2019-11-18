import { environment } from './../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GviveService {
  showMenu = new EventEmitter<boolean>();

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });
  constructor(private http: HttpClient) {}

  requestForCardDetails(data): Observable<any> {
    // const options = { headers: this.headers, observe: 'response' };
    return this.http.post(environment.firebase.baseUrl, data, {
      headers: this.headers,
      // observe: 'response'
    });
  }
}
