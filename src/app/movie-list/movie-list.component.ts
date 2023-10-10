import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
   movies!: any[];
   currentBackground: string = '';
   selectedVideo: any; 
   selectedTitle: string = ''; // Neue Variable für den ausgewählten Titel
   selectedDescription: string = ''; // Neue Variable für die ausgewählte Beschreibung
   selectedVideoImage: string = ''


   @ViewChild('videoPlayer') videoPlayer: ElementRef | undefined;
  videoUrl: string = ''; 
  videoImages: any[] | undefined;

  constructor(private videoService: VideoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe((data: any) => {
      this.movies = data;
       // Überprüfen, ob es Videos gibt
      if (this.movies.length > 0) {
        // Wenn Videos vorhanden sind, setze das erste Video als Hintergrundbild
        this.currentBackground = this.movies[0].video_image;
        this.selectedVideo = this.movies[0].video_file;

            // Speichere alle Video-Bilder in einer separaten Liste
        this.videoImages = this.movies.map(movie => movie.video_image);
      
        this.selectedTitle = this.selectedVideo.title;
        this.selectedDescription = this.selectedVideo.description;
      }
    });
  }

  chooseMovie(newBackground: string, movie: any) {
   //this.currentBackground = newBackground;
   this.currentBackground = newBackground;
   this.selectedVideo = movie.video_file;
   this.selectedTitle = movie.title;
   this.selectedDescription = movie.description;
   this.selectedVideoImage = newBackground
   console.log('newBackground',newBackground, 'selectedVideo',this.selectedVideo, this.selectedTitle, this.selectedDescription);

   // Übergabe des ausgewählten Video-Images an navigateToMoreInfo

   //this.navigateToMoreInfo( this.selectedVideoImage);
  }
 
   playMovie () {
          //Hier navigieren wir zur ShowMovieComponent und übergeben die ausgewählten Daten
    this.router.navigate(['/show-movie'], { queryParams: { selectedVideo: JSON.stringify(this.selectedVideo) } });
 } 

 navigateToMoreInfo(_selectedVideoImage: string) {
  console.log('Selected Video Image URL:', this.selectedVideoImage); 
  this.router.navigate(['/more-info'], {
    queryParams: {
      selectedVideo: JSON.stringify(this.selectedVideo),
      selectedVideoImage: this.selectedVideoImage,
      selectedTitle: this.selectedTitle,
      selectedDescription: this.selectedDescription
    }
  });

}
}