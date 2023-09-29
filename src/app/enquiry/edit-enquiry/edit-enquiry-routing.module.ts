import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEnquiryPage } from './edit-enquiry.page';

const routes: Routes = [
  {
    path: '',
    component: EditEnquiryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEnquiryPageRoutingModule {}
