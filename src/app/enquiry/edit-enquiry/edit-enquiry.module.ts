import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEnquiryPageRoutingModule } from './edit-enquiry-routing.module';

import { EditEnquiryPage } from './edit-enquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEnquiryPageRoutingModule
  ],
  declarations: [EditEnquiryPage]
})
export class EditEnquiryPageModule {}
