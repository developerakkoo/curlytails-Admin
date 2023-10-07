import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { CategoryService } from '../services/category.service';
import { SubCategoryService } from '../services/sub-category.service';

@Component({
  selector: 'app-ssub-category',
  templateUrl: './ssub-category.page.html',
  styleUrls: ['./ssub-category.page.scss'],
})
export class SsubCategoryPage implements OnInit {

  form!:FormGroup;
  categories:any[] = [];
  subs:any[] = [];
  constructor(private formBuilder: FormBuilder,
              private loadingController: LoadingController,
              private categoryService: CategoryService,
              private subCategoryService: SubCategoryService) { 
    this.form = this.formBuilder.group({
      categoryId:[,[Validators.required]],
      name:[,[Validators.required]],
      description:[,[Validators.required]]
    })
  }

  ngOnInit() {
  
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
  async getAllCategory(){
    this.presentLoading("Loading Categories...");
    this.categoryService.getAllCategories().subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.categories = value['data'];
  
        await this.loadingController.dismiss();
      },
      error: async(error:Error) =>{
        console.log(error);
        await this.loadingController.dismiss();

        
      }
    })
  }


  delete(id:any){
    this.presentLoading('Removing sub category...')
    this.subCategoryService.deleteSubCategory(id)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.loadingController.dismiss();
        
        this.getAllSubcategories();
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
  async  onSubmit(){
    if(this.form.valid){
      this.presentLoading('Adding Subcategory...')
      console.log(this.form.value);
      this.subCategoryService.addSubCategory(this.form.value.categoryId, this.form.value.name, this.form.value.description)
      .subscribe({
        next:async(value:any) =>{
          console.log(value);
          this.loadingController.dismiss();
          this.getAllSubcategories();
        },
        error:async(error:Error) =>{
          console.log(error);
          this.loadingController.dismiss();
          
        }
      })
      
    }
   }
  

}
