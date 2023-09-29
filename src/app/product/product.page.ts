import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from './product-handler.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products:any[] = [];


  constructor(private productHandler: ProductHandlerService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position:'top'
    });
    toast.present();
  }

  async loadProducts(){
    let loading = await this.loadingController.create({
      message:"Loading..."
    });

    await loading.dismiss();
    this.productHandler.getProduct()
    .subscribe({
      next: async (p:any)=>{
        console.log(p);
        await loading.dismiss();
      },
      error: async(error:Error) =>{
        console.log(error.message);
        await loading.dismiss();
        this.presentToast(error.message);
                
      }
    })
  }

  onSearchChange(ev:any){
    let term = ev.detail.value;
    console.log(term);
    
    
  }

  addProduct(){
    this.router.navigate(['product','add-product']);

  }

  editProduct(){
    this.router.navigate(['product','edit-product', 123]);
  }

  async deleteProduct(){
    let loading = await this.loadingController.create({
      message:"Deleting product...",
      duration:2000
    })

    await loading.present();
  }

}
