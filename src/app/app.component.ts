import { Component } from '@angular/core';
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
    { title: 'Notifications', url: '/notify', icon: 'mail-unread' },
  ];
 
  constructor() {}

  logout(){}
}
