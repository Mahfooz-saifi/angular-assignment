import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanappService {
  constructor(private http: HttpClient) { }

  loanData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
