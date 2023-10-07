import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SsubCategoryPageRoutingModule } from './ssub-category-routing.module';

import { SsubCategoryPage } from './ssub-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SsubCategoryPageRoutingModule
  ],
  declarations: [SsubCategoryPage]
})
export class SsubCategoryPageModule {}
