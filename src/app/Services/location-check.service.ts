import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationCheckService {

  constructor(private http: HttpClient) { }

  pincode(pincode: string): Observable<any> {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    return this.http.get(url);
  }
}
