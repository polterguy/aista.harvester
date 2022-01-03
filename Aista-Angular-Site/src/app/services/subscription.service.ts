import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private httpClient: HttpClient) { }
  
  postFormDetails(data:any) {
    return this.httpClient.post(
      'https://api.servergardens.com/magic/modules/bazar/subscribe', data
    );
  }
}
