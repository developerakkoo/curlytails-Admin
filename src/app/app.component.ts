import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'pie-chart' },
    { title: 'Products', url: '/product', icon: 'heart' },
    { title: 'Orders', url: '/order', icon: 'bag' },
    { title: 'Users', url: '/user', icon: 'person' },
    { title: 'Enquiries', url: '/enquiry', icon: 'alert' },
    { title: 'Categories', url: '/category', icon: 'leaf' },
    { title: 'Sub Categories', url: '/ssub-category', icon: 'flower' },
    { title: 'Product Categories', url: '/product-category', icon: 'fish' },
    { title: 'Banner', url: '/banner', icon: 'image' },
    { title: 'Notifications', url: '/notify', icon: 'mail-unread' },
    { title: 'Refund', url: '/refund', icon: 'receipt' },
    { title: 'Settings', url: '/settings', icon: 'receipt' },
  ];
 
  constructor(private router: Router) {}

  logout(){
    this.router.navigate([''])
  }
}
