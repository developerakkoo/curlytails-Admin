import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private http: HttpClient) { }

  addNotify(){

  }

  deleteNotify(id:any){
    return this.http.delete(environment.URL + ``);
  }
}
