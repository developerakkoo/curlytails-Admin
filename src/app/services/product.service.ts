import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  addProduct( name:string,
  brand:string,
  description:string,
  LifeStage:any,
  BreedSize:any,
  flavor:any,
  vegNonVeg:any,
  size:any,
  price:any,
  CategoryId:any,
  subCategoryId:string,
  productCategoryId:any,
  imageFiles: FileList,
  isTopProduct:string,
  isTrendingProduct:string){
    let data = new FormData();
    data.append("name", name);
    data.append("description",description);
    data.append("brand",brand);
    data.append("LifeStage", LifeStage);
    data.append("BreedSize", BreedSize);
    data.append("flavor", flavor);
    data.append("vegNonVeg", vegNonVeg);
    data.append("size", size);
    data.append("price",price);
    data.append("CategoryId", CategoryId);
    data.append("subCategoryId",subCategoryId);
    data.append("productCategoryId", productCategoryId);
    data.append("isTopProduct", isTopProduct);
    data.append("isTrendingProduct", isTrendingProduct);
  // Append each selected file to the FormData object
  for (let i = 0; i < imageFiles.length; i++) {
    data.append('images', imageFiles[i]);
  }

    return this.http.post(environment.URL + `/addProduct`, data)
  }

  editProduct(id:any, name:string,
    brand:string,
    description:string,
    LifeStage:any,
    BreedSize:any,
    flavor:any,
    vegNonVeg:any,
    size:any,
    price:any,
    CategoryId:any,
    subCategoryId:string,
    productCategoryId:any){
      return this.http.put(environment.URL + `/update/product/${id}`, {
        name,
  brand,
  description,
  LifeStage,
  BreedSize,
  flavor,
  vegNonVeg,
  size,
  price,
  CategoryId,
  subCategoryId,
  productCategoryId
      })

  }

  deleteProduct(id:any){
    return this.http.delete(environment.URL + `/delete/product/${id}`);
  }

  getAllProduct(){
    return this.http.get(environment.URL + `/getAll/product`);
  }

  getProductById(id:any){
    return this.http.get(environment.URL + `/get/product/${id}`);
  }

  getTopProducts(){
    return this.http.get(environment.URL + `/get-top/product`);
  }

  getTrendingProducts(){
    return this.http.get(environment.URL + `/get-trending/product`)
  }

  searchProduct(query:string){
    return this.http.get(environment.URL + `/search/product`,{params:{
      "name":query
    }});
  }
}
