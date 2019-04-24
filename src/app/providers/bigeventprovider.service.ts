import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {defaultURL} from './i18n-demo.constants';

@Injectable({
  providedIn: 'root'
})
export class BigeventproviderService {

  perpage = 20
  queryString

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(defaultURL + '/bigEvent/getMenu');
  }


    get(keyword, page: number, category, subCategory, ownerId) {
      if (ownerId) {
        this.queryString = this.perpage + '&page=' + page + '&ownerId=' + ownerId
      } else if (category && subCategory) {
        this.queryString = this.perpage + '&page=' + page + '&category=' + category + '&subCategory=' + subCategory
      } else if (category) {
        this.queryString = this.perpage + '&page=' + page + '&category=' + category
      } else {
        this.queryString = this.perpage + '&page=' + page
      }

      if (keyword) {
        this.queryString += '&keyword=' + keyword
      }
    console.log(this.queryString)
    return this.http.get(defaultURL + '/bigEvent?limit=' + this.queryString)
  }
}
