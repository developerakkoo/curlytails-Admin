import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private http: HttpClient) { }


  addSubCategory(CategoryId:string, name:string, description:string){
    return this.http.post(environment.URL + `/create/subCategory`,{
      CategoryId,
      name,
      description
    })
  }

  editSubCategory(id:any,name:string, description:string,CategoryId:string, isTopSUBCategory:boolean,isTrendingSUBCategory:boolean){
    return this.http.put(environment.URL+ `/update/subCategory/${id}`,{
      name,
      description,
      isTopSUBCategory,
      isTrendingSUBCategory,
      CategoryId
    })
  }

  deleteSubCategory(id:any){
    return this.http.delete(environment.URL + `/delete/subCategory/${id}`);

  }

  getAllSubCategory(){
    return this.http.get(environment.URL + `/getAll/subCategory`);
  }
}
