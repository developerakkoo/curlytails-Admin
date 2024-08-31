import { Component, OnInit } from '@angular/core';
import { RefundService } from '../services/refund.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.page.html',
  styleUrls: ['./refund.page.scss'],
})
export class RefundPage implements OnInit {

  refunds:any[] = [];
  constructor(private refund:RefundService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
this.getAllRefundRequests();
  }

  async getAllRefundRequests(){
    this.refund.getAllRefundReq()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.refunds = value['data'];
      },
      error:async(error:HttpErrorResponse) =>{
        console.log(error);
        
      }
    })
  }

  accept(item:any){
    console.log(item);
    
  }

}
