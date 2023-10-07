import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SsubCategoryPage } from './ssub-category.page';

const routes: Routes = [
  {
    path: '',
    component: SsubCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SsubCategoryPageRoutingModule {}
