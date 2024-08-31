import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  addBanner(file:File){
    let data = new FormData();
    data.append('file', file, file.name);
    return this.http.post(environment.URL+ 'banner/add', data);
  }

  deleteBanner(id:any){
    
    return this.http.delete(environment.URL+ `banner/delete/${id}`);
  }


  getAllBanner(){
    return this.http.get(environment.URL + `banner/getAll`);
  }
  
}
