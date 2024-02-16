import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analytics } from './analytics.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private baseUrl = 'http://localhost:4200/api/data';

  constructor(private http: HttpClient) { }

  getData(): Observable<Analytics[]> {
    return this.http.get<Analytics[]>(`${this.baseUrl}`);
  }
}