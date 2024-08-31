import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '../services/banner.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

  banners:any[] = [];
  constructor(private router: Router,
              private banner:BannerService
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter(){
    this.getAllBanners();
  }


  async getAllBanners(){
    this.banner.getAllBanner()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.banners = value['data'];
      },
      error:async(error:HttpErrorResponse) =>{
        console.log(error);
        
      }
    })
  }

  delete(item:any){
    console.log(item);
    this.banner.deleteBanner(item?._id)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.getAllBanners();
      },
      error:async(error:HttpErrorResponse) =>{
        console.log(error);
        
      }
    })
  }
  openBannerPage(){
    this.router.navigate(['banner', 'add-banner']);
  }
}
