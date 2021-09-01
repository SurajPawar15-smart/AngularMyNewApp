import { Component, OnInit } from '@angular/core';
import {NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  //data display
toptechheadingdisplay:any=[];
constructor(private _service:NewsapiserviecesService) { }

ngOnInit(): void {
  this._service.techheading().subscribe((result:any)=>{
    console.log(result);
    this.toptechheadingdisplay=result.articles;
  })
}

}


