import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { ProductHandlerService } from '../product-handler.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  productForm!:FormGroup;
  files!:FileList;
  categories:any[] = [];
  subs:any[] = [];
  productCategoryies:any[] = [];
  constructor( private formBuilder: FormBuilder,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private productService: ProductService,
              private categoryService: CategoryService,
              private subCategoryService: SubCategoryService,
              private productCategoryService: ProductCategoryService,
              ) {
    this.setupProductForm();
   }

  ngOnInit() {
    this.getAllCategory();
    this.getAllSubcategories();
    this.getAllproductcategories();
  }


  setupProductForm(){
    this.productForm = this.formBuilder.group({
      name : ['',[Validators.required]],
      brand:['', [Validators.required]],
      description:['', [Validators.required]],
      LifeStage:['',[Validators.required]],
      BreedSize:['',[Validators.required]],
      flavor:['',[Validators.required]],
      vegNonVeg:['',[Validators.required]],
      size:['',[Validators.required]],
      price:['',[Validators.required]],
      CategoryId:['',[Validators.required]],
      subCategoryId:['',[Validators.required]],
      productCategoryId:[,[Validators.required]]
    })
  }

  fileEvent(ev:any){
    console.log(ev);
    this.files = ev.target.files;
    console.log(this.files);
    
    
  }

  async presentLoading(msg:string) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 2000,
    });
    await loading.present();
  }


  async onSubmit(){
    let loading = await this.loadingController.create({
      message:"Adding new product...",
      duration:3000
    });

    await loading.present();

    if(this.productForm.valid){
      console.log(this.productForm.value);
      //multer field name images
      this.productService.addProduct(this.productForm.value.name,
        this.productForm.value.brand,
        this.productForm.value.description,
        this.productForm.value.LifeStage,
        this.productForm.value.BreedSize,
        this.productForm.value.flavor,
        this.productForm.value.vegNonVeg,
        this.productForm.value.size,
        this.productForm.value.price,
        this.productForm.value.CategoryId,
        this.productForm.value.subCategoryId,
        this.productForm.value.productCategoryId,
        this.files,
        "true",
        "false").subscribe({
          next:async (value:any) => {
              await loading.dismiss();
              console.log(value);
              
          },
          error:async(error:Error) =>{
            await loading.dismiss();
            console.log(error);
            
          }
        })
      
    }
  }

  getAllproductcategories(){
    this.presentLoading('Loading Product Categories...');
    this.productCategoryService.getAllProductCategory()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.productCategoryies = value['data'];
        this.loadingController.dismiss();
        
      },
      error:async(error:Error) =>{
        console.log(error);
        this.loadingController.dismiss();
        
      }

    })
}
  getAllSubcategories(){
    this.presentLoading('Loading Sub Categories...');
    this.subCategoryService.getAllSubCategory()
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.subs = value['data'];
        this.loadingController.dismiss();
        
      },
      error:async(error:Error) =>{
        console.log(error);
        this.loadingController.dismiss();
        
      }

    })
}

  async getAllCategory(){
    this.presentLoading("Loading Categories...");
    this.categoryService.getAllCategories().subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.categories = value['data'];
        this.categoryService.categories = value['data'];
        await this.loadingController.dismiss();
      },
      error: async(error:Error) =>{
        console.log(error);
        await this.loadingController.dismiss();

        
      }
    })
  }
}
