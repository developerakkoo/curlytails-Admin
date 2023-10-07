import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { CategoryService } from '../services/category.service';
import { SubCategoryService } from '../services/sub-category.service';
import { ProductCategoryService } from '../services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit {

  form!: FormGroup;
  categories:any[] = [];
  subs:any[] = [];
  productCategoryies:any[] = [];
  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productCategoryService: ProductCategoryService,
    private loadingController: LoadingController,) {
    this.form = this.formBuilder.group({
      CategoryId:[,[Validators.required]],
      subCategoryId:[,[Validators.required]],
      name:[,[Validators.required]],
      description:[,[Validators.required]]
    })
   }

  ngOnInit() {
    this.getAllproductcategories();
    this.getAllCategory();
    this.getAllSubcategories();
  }
  
  async presentLoading(msg:string) {
    const loading = await this.loadingController.create({
      message: msg,
      duration: 2000,
    });
    await loading.present();
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

delete(id:any){
  this.presentLoading('Deleting product category....')
  this.productCategoryService.deleteProductCategory(id)
  .subscribe({
    next:async(value:any) =>{
      console.log(value);
      this.loadingController.dismiss();
      this.getAllproductcategories();
      
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
  async onSubmit(){
    if(this.form.valid){
      this.presentLoading('Adding new product category...')
      console.log(this.form.value);
      this.productCategoryService.addProductCategory(this.form.value.name, this.form.value.description, this.form.value.CategoryId,
        this.form.value.subCategoryId, true, false)
        .subscribe({
          next:async(value:any) =>{
            this.loadingController.dismiss();
            this.getAllproductcategories();
            console.log(value);
            
          },
          error:async(error: Error) =>{
            console.log(error);
            this.loadingController.dismiss();
            
          }
        })
        
      
    }
  }
}

