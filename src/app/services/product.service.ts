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
  quantities:any,
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
    data.append("quantities", JSON.stringify(quantities));
  // Append each selected file to the FormData object
  for (let i = 0; i < imageFiles.length; i++) {
    data.append('images', imageFiles[i]);
  }

    return this.http.post(environment.URL + `product/add`, data)
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
    productCategoryId:any,
    isTopProduct:string,
  isTrendingProduct:string){
      return this.http.put(environment.URL + `product/update/${id}`, {
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
    return this.http.delete(environment.URL + `product/delete/${id}`);
  }

  getAllProduct(){
    return this.http.get(environment.URL + `product/getAll`);
  }

  getProductById(id:any){
    return this.http.get(environment.URL + `product/get/${id}`);
  }

  getTopProducts(){
    return this.http.get(environment.URL + `product/get-top`);
  }

  getTrendingProducts(){
    return this.http.get(environment.URL + `product/get-trending`)
  }

  searchProduct(adminId:any,query:string){
    return this.http.get(environment.URL + `product/search/${adminId}`,{params:{
      "name":query
    }});
  }

  deleteProductImage(id:any,productId:any){
    return this.http.delete(environment.URL + `delete/image/${productId}/${id}`);
  }
}
