import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  addData(body:{}){
    return this.http.post(environment.URL + `admin/data/add`,body);
  }

  getData(){
    return this.http.get(environment.URL + `admin/data/get`);
  }

  updateData(id:any,body:{}){
    return this.http.put(environment.URL + `admin/data/update/${id}`,body);

  }
  getAllOrder(){
    return this.http.get(environment.URL + `admin/getAll/orders`);
  }

  getOrderById(id:any){
    return this.http.get(environment.URL+ `get/order/${id}`);
  }

  searchOrder(query:string){
    return this.http.get(environment.URL + `get-orderId/order/${query}`);
  }

  deleteOrder(id:any){
    return this.http.delete(environment.URL + `delete/order/${id}`);
  }
}
