import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.page.html',
  styleUrls: ['./add-banner.page.scss'],
})
export class AddBannerPage implements OnInit {

  files!:File;
  constructor() { }

  ngOnInit() {
  }

  onFileEvent(ev:any){
    console.log(ev);
    //multer field name file single only
      }

}
