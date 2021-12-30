import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  eventDate = new Date("2022 june 15");
  currentDate = new Date();

  timeLeftInMilliSeconds = this.eventDate.getTime() - this.currentDate.getTime();
  
  daysLeft = this.timeLeftInMilliSeconds / (60 * 60 * 1000 * 24) + " days";
  hoursLeft = (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 + " hours";
  minutesLeft = (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 * 60 + " minutes";
  secondsLeft = (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 * 60 * 60 + " seconds";



  constructor() { };

  ngOnInit(): void {

    let updateTime = () => {

      setInterval(() => {
      let eventDate = new Date('2022 june 15');
      let currentDate = new Date();

      let timeLeftInMilliSeconds =
        this.eventDate.getTime() - this.currentDate.getTime();

      let daysLeft = this.timeLeftInMilliSeconds / (60 * 60 * 1000 * 24) + ' days';
      let hoursLeft =
        (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 + ' hours';
      let minutesLeft =
        (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 * 60 +
        ' minutes';
      let secondsLeft =
        (this.timeLeftInMilliSeconds % (60 * 60 * 1000 * 24)) * 24 * 60 * 60 +
        ' seconds';}, 1000) 
    }
    updateTime();
  }
}
