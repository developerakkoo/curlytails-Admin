import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCategoryPageRoutingModule } from './product-category-routing.module';

import { ProductCategoryPage } from './product-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductCategoryPageRoutingModule
  ],
  declarations: [ProductCategoryPage]
})
export class ProductCategoryPageModule {}
