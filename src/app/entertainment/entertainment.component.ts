import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
//data display
entertinmentdisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.entertinmentheading().subscribe((result:any)=>{
      console.log(result);
      this.entertinmentdisplay=result.articles;
      })
  }

}
