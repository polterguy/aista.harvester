import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // countDown() {

  daysLeft = 1;
  hoursLeft = 1;
  minutesLeft = 1;
  secondsLeft = 1;

  // };

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      let releaseDate = new Date('June 15, 2022 00:00:00').getTime();
      let today = new Date().getTime();

      let timeLeft = releaseDate - today; // in milliseconds

      this.daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hoursLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutesLeft = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    }, 1000);

    function playAudio(){
        let audio = new Audio();
        audio.src = "../../assets/audio/ticker.wav";
        audio.load();
        audio.play();
    };

    playAudio();
    setInterval(playAudio, 12000);
  }
}
