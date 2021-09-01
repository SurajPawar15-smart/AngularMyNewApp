import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
//data display
sportsdisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.sportsheading().subscribe((result:any)=>{
      console.log(result);
      this.sportsdisplay=result.articles;
    })
  }

}
