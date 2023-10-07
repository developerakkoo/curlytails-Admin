import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  form!: FormGroup;
  categories:any[] = [];


  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private loadingController: LoadingController,
              private router: Router) { 
    this.form = this.formBuilder.group({
      name:[,[Validators.required]],
      description:[,[Validators.required]]
    })
  }

  ngOnInit() {
    this.getAllCategory();
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
        this.categoryService.categories = value['data'];
        await this.loadingController.dismiss();
      },
      error: async(error:Error) =>{
        console.log(error);
        await this.loadingController.dismiss();

        
      }
    })
  }

  delete(id:any){
    this.presentLoading('Removing category...')
    this.categoryService.deleteCategory(id)
    .subscribe({
      next:async(value:any) =>{
        console.log(value);
        this.loadingController.dismiss();
        
        this.getAllCategory();
      },
      error:async(error:Error) =>{
        console.log(error);
        this.loadingController.dismiss();
        
      }
    })
  }
 async  onSubmit(){
  if(this.form.valid){
    this.presentLoading("Adding category...");
    console.log(this.form.value);
    this.categoryService.addCategory(this.form.value.name, this.form.value.description)
    .subscribe({
      next:async (value:any) => {
          console.log(value);
          this.loadingController.dismiss();
          this.getAllCategory();
      },
      error:async(error: Error) =>{
        console.log(error);
        this.loadingController.dismiss();

        
      }
    })
    
  }
 }

}
