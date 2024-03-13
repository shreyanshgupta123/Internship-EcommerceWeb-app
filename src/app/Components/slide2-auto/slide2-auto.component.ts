import { Component, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide2-auto',
  templateUrl: './slide2-auto.component.html',
  styleUrls: ['./slide2-auto.component.scss']
})
export class Slide2AutoComponent {

  images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d666db78034ac39f.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/d666db78034ac39f.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/340/image/d666db78034ac39f.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/229cb9ed6b7b32a4.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d666db78034ac39f.jpg?q=90"
  ];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
