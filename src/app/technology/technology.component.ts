import { Component, OnInit } from '@angular/core';
import {NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  //data display
  technologydisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.technologyheading().subscribe((result:any)=>{
      console.log(result);
      this.technologydisplay=result.articles;
    })
  }

}
