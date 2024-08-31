import { Component, OnInit } from '@angular/core';
import { ProductHandlerService } from './product-handler.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  products:any[] = [];


  constructor(private productService: ProductService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    this.loadProducts();
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
    this.productService.getAllProduct()
    .subscribe({
      next: async (p:any)=>{
        console.log(p);
        this.products = p['data'];
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
    this.productService.searchProduct("66d08c1794e18eda9b66f68f",term)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        
      },
      error:async(error:Error) =>{
        console.log(error);
        
      }
    })
    
    
  }

  addProduct(){
    this.router.navigate(['product','add-product']);

  }

  editProduct(id:any){
    this.router.navigate(['product','edit-product', id]);
  }

  async deleteProduct(id:any){
    let loading = await this.loadingController.create({
      message:"Deleting product...",
      duration:2000
    })

    this.productService.deleteProduct(id)
    .subscribe({
      next:async (value:any) =>{
        console.log(value);
        this.loadingController.dismiss();
        this.loadProducts();
        
      },
      error:async(error:Error) =>{
        console.log(error)
        this.loadingController.dismiss();
        
    }
    })

    await loading.present();
  }

}
