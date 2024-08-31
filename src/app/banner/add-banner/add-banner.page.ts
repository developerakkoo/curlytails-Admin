import { Component, OnInit } from '@angular/core';
import { BannerHandlerService } from '../banner-handler.service';
import { BannerService } from 'src/app/services/banner.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.page.html',
  styleUrls: ['./add-banner.page.scss'],
})
export class AddBannerPage implements OnInit {

  files!:File;
  constructor(private banner: BannerService) { }

  ngOnInit() {
  }

  onFileEvent(ev:any){
    console.log(ev.target.files[0]);
    this.files = ev.target.files[0];
    //multer field name file single only

    this.banner.addBanner(this.files)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        
      },
      error:async(error:HttpErrorResponse) =>{
        console.log(error);
        
      }
    })
      }

}
