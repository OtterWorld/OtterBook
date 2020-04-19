import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()  // needed to inform that class below is have to be treated as dependency and therefore injected
export class WebsitesDashboardServices {
  constructor( private http: HttpClient){
    console.log(this.http)
  }

}