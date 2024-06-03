import { Component,ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  youtubeLinks: SafeResourceUrl[] = [];
  

  constructor(private sanitizer: DomSanitizer) {
    const links = [
      "https://www.youtube.com/embed/II_m28Bm-iM?autoplay=1&mute=1",
      "https://www.youtube.com/embed/GI-8sFxRoyw?autoplay=1&mute=1",
      "https://www.youtube.com/embed/j_XjJmh0BXk?autoplay=1&mute=1",
      "https://www.youtube.com/embed/L0RktSIM980?autoplay=1&mute=1",
      "https://www.youtube.com/embed/8McTsOqeueE?autoplay=1&mute=1",
      "https://www.youtube.com/embed/byG7EGw9NPs?autoplay=1&mute=1",
      "https://www.youtube.com/embed/HoYsWagMFfE?autoplay=1&mute=1",
      "https://www.youtube.com/embed/_xtceKvlVYQ?autoplay=1&mute=1",
      "https://www.youtube.com/embed/JnuYyOJ0XLU?autoplay=1&mute=1"
    ];

    this.youtubeLinks = links.map(link => this.sanitizer.bypassSecurityTrustResourceUrl(link));
  }

  @ViewChild('videoContainer', { static: false })
  videoContainer!: ElementRef;

  // toggleFullScreen() {
  //   if (!document.fullscreenElement) {
  //     document.documentElement.requestFullscreen();
  //   } else if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   }
  // }

  toggleFullScreen() {
    const elem = this.videoContainer.nativeElement;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
    }
  }
}
