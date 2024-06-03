import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  youtubeLinks: string[] = [
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_1',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_2',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_3',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_4',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_5',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_6',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_7',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_8',
    'https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID_9'
  ];

  updateLinks() {
    console.log('Updated links:', this.youtubeLinks);
    // Logic to save the updated links, potentially to a backend or local storage
  }
}
