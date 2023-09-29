import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductHandlerService {

  constructor(private http: HttpClient) { }


  getProduct(){
    return this.http.get("");
  }

  editProduct(){
    return this.http.put("", {});
  }

  addProduct(){
    return this.http.post("",{});
  }

  deleteProduct(id:any){
    return this.http.delete("");
  }


  filterProduct(term:string){
    return this.http.get("");
  }
}
