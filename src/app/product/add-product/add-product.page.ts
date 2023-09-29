import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductHandlerService } from '../product-handler.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productForm!:FormGroup;
  constructor( private formBuilder: FormBuilder,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private productHandler: ProductHandlerService) {
    this.setupProductForm();
   }

  ngOnInit() {
  }


  setupProductForm(){
    this.productForm = this.formBuilder.group({
      product_name : ['',[Validators.required]],
      product_brand:['', [Validators.required]],
      product_description:['', [Validators.required]],
      product_life_stage:['',[Validators.required]],
      breed_size:['',[Validators.required]],
      flavor:['',[Validators.required]],
      vegNonVeg:['',[Validators.required]],
      size:['',[Validators.required]],
      price:['',[Validators.required]],
      isTrendingProduct:['',[Validators.required]],
      isTopProduct:['',[Validators.required]]
    })
  }

  async onSubmit(){
    let loading = await this.loadingController.create({
      message:"Adding new product...",
      duration:3000
    });

    await loading.present();

    if(this.productForm.valid){
      console.log(this.productForm.value);
      
    }
  }
}
