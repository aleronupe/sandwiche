import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analytics } from './analytics.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private baseUrl = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getDataLast7Days(currentDate: string): Observable<Analytics[]> {
    const params = { currentDate: currentDate };
    return this.http.get<Analytics[]>(`${this.baseUrl}/datatime`, { params: params });
  }

  getDailyData(): Observable<Analytics[]> {
    return this.http.get<Analytics[]>(`${this.baseUrl}/datadaily`);
  }
}