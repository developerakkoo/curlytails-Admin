import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  addProductCategory(name:string, description:string, CategoryId:string, subCategoryId:string,isTopProductCategory:boolean,isTrendingProductCategory:boolean){
    return this.http.post(environment.URL + `/create/productCategory`, {
      name,
      description,
      CategoryId,
      subCategoryId,
      isTopProductCategory,
      isTrendingProductCategory
    });
  }

  editProductCategory(id:any,name:string, description:string, CategoryId:string, subCategoryId:string,isTopProductCategory:boolean,isTrendingProductCategory:boolean ){
    return this.http.put(environment.URL + `/update/productCategory/${id}`,{
      name,
      description,
      CategoryId,
      subCategoryId,
      isTopProductCategory,
      isTrendingProductCategory
    })
  }

  getAllProductCategory(){
    return this.http.get(environment.URL + `/getAll/productCategory`);
  }

  getProductCategoryById(id:any){
    return this.http.get(environment.URL + `/get/productCategory/${id}`);
  }

  deleteProductCategory(id:any){
    return this.http.delete(environment.URL + `/delete/productCategory/${id}`);
  }
}
