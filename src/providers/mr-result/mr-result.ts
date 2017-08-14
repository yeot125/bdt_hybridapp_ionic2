import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MrResultProvider {

  getMRJobResult(){
    let url='http://210.114.91.91:22893/json/mr-result';
    return this.http.get(url);
  }

  getMRJobResultWithURL(){
    let url='http://210.114.91.91:22893/json/mr-result/with-url';
    return this.http.get(url);
  }

  constructor(public http: Http) {}

}
