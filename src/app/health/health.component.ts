import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
//data display
healthdisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.healthheading().subscribe((result:any)=>{
      console.log(result);
      this.healthdisplay=result.articles;
      })
  }

}
