import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/product',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'enquiry',
    loadChildren: () => import('./enquiry/enquiry.module').then( m => m.EnquiryPageModule)
  },
  {
    path: 'banner',
    loadChildren: () => import('./banner/banner.module').then( m => m.BannerPageModule)
  },
  {
    path: 'notify',
    loadChildren: () => import('./notify/notify.module').then( m => m.NotifyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'ssub-category',
    loadChildren: () => import('./ssub-category/ssub-category.module').then( m => m.SsubCategoryPageModule)
  },
  {
    path: 'product-category',
    loadChildren: () => import('./product-category/product-category.module').then( m => m.ProductCategoryPageModule)
  },
  {
    path: 'refund',
    loadChildren: () => import('./refund/refund.module').then( m => m.RefundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
