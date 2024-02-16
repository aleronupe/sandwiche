import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analytics } from './analytics.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private baseUrl = 'http://localhost:4200/api/datatime';

  constructor(private http: HttpClient) { }

  getDataLast7Days(currentDate: string): Observable<Analytics[]> {
    const params = { currentDate: currentDate };
    return this.http.get<Analytics[]>(`${this.baseUrl}`, { params: params });
  }
}