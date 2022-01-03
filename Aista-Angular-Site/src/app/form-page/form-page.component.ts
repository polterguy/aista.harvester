import { Component, OnInit } from '@angular/core';
import {SubscriptionService} from '../services/subscription.service'

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPageComponent implements OnInit {
  constructor(public subscriptionService: SubscriptionService) {}

  ngOnInit(): void {}

  onClickSubmit(data:any) {    
    this.subscriptionService.postFormDetails(data);
  }
}
