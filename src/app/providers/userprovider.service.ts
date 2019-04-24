import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {defaultURL} from './i18n-demo.constants';

@Injectable({
  providedIn: 'root'
})
export class UserproviderService {

  perpage = 20
  queryString

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(defaultURL + '/bigEvent/getMenu');
  }

  get(keyword, page: number, category, subCategory, orgId) {
    if (!category) {
      this.queryString = this.perpage + '&page=' + page
    } else if (category && !subCategory) {
      this.queryString = this.perpage + '&page=' + page + '&category=' + category
    } else {
      this.queryString = this.perpage + '&page=' + page + '&category=' + category + '&subCategory=' + subCategory
    }
    if (keyword) this.queryString += '&keyword=' + keyword
    if (orgId) this.queryString += '&orgId=' + orgId
    console.log(this.queryString)
    return this.http.get(defaultURL + '/user?limit=' + this.queryString)
  }
}
