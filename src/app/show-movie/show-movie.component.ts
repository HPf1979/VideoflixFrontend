import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {
  selectedVideo: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Hier rufen wir die übergebenen Daten aus den Query-Parametern ab
    const selectedVideoString = this.route.snapshot.queryParamMap.get('selectedVideo');
    if (selectedVideoString) {
      this.selectedVideo = JSON.parse(selectedVideoString);
      console.log("video in show-movie", this.selectedVideo);
    }
  }
}