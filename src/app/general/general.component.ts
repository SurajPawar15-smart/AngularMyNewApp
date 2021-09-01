import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
//data display
generaldisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.generalheading().subscribe((result:any)=>{
      console.log(result);
      this.generaldisplay=result.articles;
      })
  }

}
