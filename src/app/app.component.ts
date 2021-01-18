import { Component } from '@angular/core';
import {RandomuserService} from './services/randomuser.service';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pegination';
 data:Array<any>
 totalRecords:string;
 page:Number=1
  

  constructor(private randomUser:RandomuserService) {
this.data = new Array<any>();

  }  
  getUsers(){
    this.randomUser.getData().subscribe((data)=>{
      console.log(data)
      this.data=data.results
      this.totalRecords=data.results.length
    })
  }
}