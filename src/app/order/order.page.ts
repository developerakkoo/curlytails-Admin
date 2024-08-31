import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
 orders:any[] = [];

 startDate:any;
 endDate:any;
 searchTerm:any;
 status:any;
 pageNumber:string = "";
 currentPage:string = "";
 pageSize:string = ""; 
  constructor(private orderService: OrderService,
    private router: Router,
    private alertController: AlertController,
              private loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllOrders();
  }
  async presentLoading(msg:string) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 2000,
    });
    await loading.present();
  }


  onSearchChange(ev:any){
    console.log(ev.detail.value);
    this.orderService.searchOrder(ev.detail.value)
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        
      },
      error:(error:any) =>{
        console.log(error);
        
      }
    })
    
  }
  getAllOrders(){
    this.presentLoading("Loading orders...")
    this.orderService.getAllOrder()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.orders = value['data'];
        this.loadingController.dismiss();
      },
      error:async(error:Error) =>{
        console.log(error);
        this.loadingController.dismiss();

        
      }
    })
  }

  async presentAlertConfirm(orderId:any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
           
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            // this.logic.deleteOrder(orderId)
            // .subscribe({
            //   next:async(value:any) =>{
            //     console.log(value);
            //     // this.getAllOrders(this.searchTerm,this.startDate, this.endDate, this.status, this.pageNumber,this.pageSize);
                
            //   }
            // })
          }
        }
      ]
    });
  
    await alert.present();
  }


  filterEvent(ev:any){
    console.log(ev.detail.value);
    this.status = ev.detail.value;
    // this.getAllOrders(ev.detail.value,this.startDate, this.endDate, this.status, this.pageNumber,this.pageSize);
    
  }
 
  // getAllOrders(searchTerm:any, startDate:any, endDate:any, status:any, pageNumber:any, pageSize:any){
  //   this.logic.getAllOrders(this.searchTerm,this.startDate,this.endDate,this.status,this.pageNumber, this.pageSize)
  //   .subscribe({
  //     next:async(value:any) =>{
  //       console.log(value);
  //       this.orders = value['data']['content'];
  //     }
  //   })
  // }
  dateSelectEvent(ev:any, type:any){
    console.log(ev.detail.value);
    console.log(type);

    if(type === "1"){
      this.startDate = ev.detail.value;
    }else if(type === "2"){
      this.endDate = ev.detail.value;
    }

    console.log(this.startDate);
    console.log(this.endDate);
    
    // this.getAllOrders(ev.detail.value,this.startDate, this.endDate, this.status, this.pageNumber,this.pageSize);
    
    
  }

  view(orderId:any){
    this.router.navigate(['orders','view',orderId])
  }

  edit(){
    
  }


  pageSizeSelectEvent(ev:any){
    const target = ev.target as HTMLSelectElement;
    console.log('Selected value:', target.value);
    this.pageSize = target.value;
    // this.getAllOrders(this.searchTerm,this.startDate, this.endDate, this.status, this.pageNumber,this.pageSize)
    
  }
  nextPage(){

  }

  previousPage(){

  }

  firstPage(){

  }

  secondPage(){

  }

  thirdPage(){

  }

  delete(orderId:any){
    this.presentAlertConfirm(orderId);
  }
}
