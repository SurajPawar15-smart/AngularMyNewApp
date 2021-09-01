import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviecesService {

  constructor(private _http: HttpClient) { }
  //newsApiUrl
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //techApiUrl
  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //EntertainmentApiUrl
  enterApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //generalApiUrl
  generalApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //healthApiUrl
  healthApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //scienceApiUrl
  scienceApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //sportsApiUrl
  sportsApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5e154ba8c64343c28cbd253ec8f99167";
  //technologyApiUrl
  technologyApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=5e154ba8c64343c28cbd253ec8f99167";

  //topheading
  topheading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  sportsheading():Observable<any>{
    return this._http.get(this.sportsApiUrl);
  }
  scienceheading():Observable<any>{
    return this._http.get(this.scienceApiUrl);
  }
  healthheading():Observable<any>{
    return this._http.get(this.healthApiUrl);
  }
  generalheading():Observable<any>{
    return this._http.get(this.generalApiUrl);
  }
  entertinmentheading():Observable<any>{
    return this._http.get(this.enterApiUrl);
  }
  technologyheading():Observable<any>{
    return this._http.get(this.technologyApiUrl);
  }
  techheading():Observable<any>{
    return this._http.get(this.techApiUrl);
  }
}
