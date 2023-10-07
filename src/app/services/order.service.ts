import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrder(){
    return this.http.get(environment.URL + `/admin/getAll/orders`);
  }

  getOrderById(id:any){
    return this.http.get(environment.URL+ `/get/order/${id}`);
  }

  searchOrder(query:string){
    return this.http.get(environment.URL + `/get-orderId/order/${query}`);
  }

  deleteOrder(id:any){
    return this.http.delete(environment.URL + `/delete/order/${id}`);
  }
}
