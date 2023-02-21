import { Component } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public userDetails:any;
  public viewOrHide:boolean = false;

  constructor(private ds:DataServiceService){

    // this.getUserDetails();

  }

  ngOnInit(): void{
    this.getUserDetails();
  }


  getUserDetails(){
    this.ds.getUserDetails().subscribe(response=>{
      console.log('response',response);
      this.userDetails = response;
      
    })
  }

  viewData(){
    this.viewOrHide = !this.viewOrHide;
  }

}
