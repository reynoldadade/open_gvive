import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GviveService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });
  constructor(private http: HttpClient) {}

  requestForCardDetails(data): Observable<any> {
    const body = { fromObject: data };
    const options = { params: new HttpParams(body), headers: this.headers };
    return this.http.get(
      'https://websvr.dalexswift.com/CoreID/GetIdentification',
      options
    );
  }
}
