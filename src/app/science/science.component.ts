import { Component, OnInit } from '@angular/core';
import{NewsapiserviecesService} from '../service/newsapiservieces.service'

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
//data display
sciencedisplay:any=[];
  constructor(private _service:NewsapiserviecesService) { }

  ngOnInit(): void {
    this._service.scienceheading().subscribe((result:any)=>{
      console.log(result);
      this.sciencedisplay=result.articles;
      })
  }

}
