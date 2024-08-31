import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  getAllCount(){
    return this.http.get(environment.URL +'/admin/getAll/count');
  }

  getTotalAmount(){
    return this.http.get(environment.URL + '/admin/get-total-earnings');
  }

  getMonthlyEearnings(){
    return this.http.get(environment.URL + `/admin/get-monthly-earnings`);
  }

  getYearlyEarnings(){
    return this.http.get(environment.URL + `/admin/get-yearly-earnings`);
  }
}
