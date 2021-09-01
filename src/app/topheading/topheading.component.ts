import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

//data display
topheadingdisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.topheading().subscribe((result:any)=>{
      console.log(result);
      this.topheadingdisplay=result.articles;
    })
  }

}
