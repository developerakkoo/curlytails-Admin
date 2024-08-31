import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.URL + `/getAll/user`);
  }

  getUserById(id:any){
    return this.http.get(environment.URL + `/get/user/${id}`);
  }

  editUser(id:any, name:any, email:any, phoneNo:string, isBlock:boolean){
    return this.http.put(environment.URL + `/update/user/${id}`,{
      name,
      email,
      phoneNo,
      isBlock
    })

  }
}
