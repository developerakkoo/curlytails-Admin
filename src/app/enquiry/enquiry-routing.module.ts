import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryPage } from './enquiry.page';

const routes: Routes = [
  {
    path: '',
    component: EnquiryPage
  },
  {
    path: 'edit-enquiry/:id',
    loadChildren: () => import('./edit-enquiry/edit-enquiry.module').then( m => m.EditEnquiryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnquiryPageRoutingModule {}
