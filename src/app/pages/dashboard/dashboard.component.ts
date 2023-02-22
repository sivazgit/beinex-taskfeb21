import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public pstDetails:any;
  public viewOrHide:boolean = false;

  constructor(private ds:DataServiceService){}

  ngOnInit(): void{
    this.getPstDetails();
  }


  getPstDetails(){
    this.ds.getPstDetails().subscribe(response=>{
      console.log('response',response);
      this.pstDetails = response;
      
    })
  }

  viewData(){
    this.viewOrHide = !this.viewOrHide;
  }
}
