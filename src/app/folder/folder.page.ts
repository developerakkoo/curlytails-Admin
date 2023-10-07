import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '../services/analytics.service';

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

  constructor(private analyticsService: AnalyticsService) {}

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

        
      },
      error:(error:Error)=>{
        console.log(error);
        
      }
    })
  }
}
