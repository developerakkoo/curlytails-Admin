import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  totalCategory!:number;
  totalSubCategory!:number;
  totalProductCategory!:number;
  userCount!:number;
  monthlyEarnings!:number;
  yearlyEarnings!:number;

  constructor(private analyticsService: AnalyticsService,
              private menuCtrl: MenuController) {
                this.menuCtrl.enable(true);
              }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.loadData();
    
  }

  loadData(){
    this.analyticsService.getAllCount()
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        this.userCount = value['data'][0]['userCount'];
        this.totalCategory = value['data'][1]['totalCategory'];
        this.totalProductCategory = value['data'][3]['totalProductCategory'];
        this.totalSubCategory = value['data'][2]['totalSubCategory'];
        this.monthlyEarnings = value['data'][5]['monthlyEarnings'][0]['total']
        this.yearlyEarnings = value['data'][6]['yearlyEarnings'][0]['total']

        
      },
      error:(error:Error)=>{
        console.log(error);
        
      }
    })
  }


  
  getTotalEarningData(){
    this.analyticsService.getTotalAmount()
    .subscribe({
      next:(value:any) =>{
        console.log(value);
       

        
      },
      error:(error:Error)=>{
        console.log(error);
        
      }
    })
  }
}
