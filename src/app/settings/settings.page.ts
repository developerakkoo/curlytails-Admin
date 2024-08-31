import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
 
  gst: any;
  deliveryPrice:any;
  id: string = '';
  gstToggle!:boolean;
  deliveryUpdateId: string = '66add7a0527bc96aa60b4b1a';
  constructor(private order:OrderService,) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.getAllCharges();
  }

  getAllCharges() {
    this.order.getData().subscribe({
      next: async (value: any) => {
        console.log(value);
        this.id = value['data']['_id'];
        this.gst = value['data']['gstPercentage'];
       this.deliveryPrice = value['data']['deliveryCharges'];
        this.gstToggle = value['data']['gstIsActive'];
      },
      error: async (error: HttpErrorResponse) => {
        console.log(error.error);
      },
    });
  }

  gstToggleEvent(ev:any){
    console.log(ev.detail);
    this.gstToggle = ev.detail.checked;
  
  }

  rangeChangeGST(ev: any) {
    console.log(ev.detail.value);
    this.gst = ev.detail.value;
  }





  async onSubmit() {

    let obj = {
      gstPercentage:this.gst, gstIsActive:this.gstToggle, deliveryCharges:this.deliveryPrice
    }

    console.log(obj);
    
    this.order.updateData(this.id, obj).subscribe({
      next: async (value: any) => {
        console.log(value);
        this.getAllCharges();
      },
      error: async (error: HttpErrorResponse) => {
        console.log(error.error);
      },
    });
  }
}
