import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:any[] = [];
  
  constructor(private http: HttpClient) { }

  addCategory(name:string, description:string){
    return this.http.post(environment.URL + `/create/category`,{
      name,
      description,
      
    });
  }

  editCategory(id:string,name:string, description:string,isTopCategory:boolean){
    return this.http.put(environment.URL + `/update/category/${id}`,{
      name,
      description,
      isTopCategory
    });
  }

  deleteCategory(id:any){
    return this.http.delete(environment.URL+ `/delete/category/${id}`);
  }

  getAllCategories(){
    return this.http.get(environment.URL + `category/getAll`);
  }



}
