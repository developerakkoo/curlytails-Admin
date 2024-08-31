import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  addProductCategory(name:string, description:string, CategoryId:string, subCategoryId:string,isTopProductCategory:boolean,isTrendingProductCategory:boolean){
    return this.http.post(environment.URL + `product-category/create/productCategory`, {
      name,
      description,
      CategoryId,
      subCategoryId,
      isTopProductCategory,
      isTrendingProductCategory
    });
  }

  editProductCategory(id:any,name:string, description:string, CategoryId:string, subCategoryId:string,isTopProductCategory:boolean,isTrendingProductCategory:boolean ){
    return this.http.put(environment.URL + `product-category/update/productCategory/${id}`,{
      name,
      description,
      CategoryId,
      subCategoryId,
      isTopProductCategory,
      isTrendingProductCategory
    })
  }

  getAllProductCategory(){
    return this.http.get(environment.URL + `product-category/getAll`);
  }

  getProductCategoryById(id:any){
    return this.http.get(environment.URL + `product-category/get/productCategory/${id}`);
  }

  deleteProductCategory(id:any){
    return this.http.delete(environment.URL + `product-category/delete/productCategory/${id}`);
  }
}
