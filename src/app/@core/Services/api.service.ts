import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptionsWithParam = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
  params: {}
};
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAction(url: string) {
    return this.httpClient.get(url);
  }

  getActionWithParam(url: string) {
    return this.httpClient.get(url, httpOptionsWithParam);
  }


}
