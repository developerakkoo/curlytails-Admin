import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  users:any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.users = value['data'];
        
      },

      error:async(error: Error) =>{
        console.log(error);
        
      }
    })
  }


  block(user:any){
    this.userService.editUser(user._id, user.name, user.email, user.phoneNo, true)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.getAllUsers();
        
      },

      error:async(error: Error) =>{
        console.log(error);
        
      }
    })
  }

  unblock(user:any){
    this.userService.editUser(user._id, user.name, user.email, user.phoneNo, false)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.getAllUsers();
        
      },

      error:async(error: Error) =>{
        console.log(error);
        
      }
    })
  }
}
