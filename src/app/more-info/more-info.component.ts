import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit{

  selectedVideo: any;
  selectedTitle!: string;
  selectedDescription: string | undefined;
  selectedVideoImage!: string; 


  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
    this.selectedVideo = JSON.parse(queryParams['selectedVideo']);
    this.selectedTitle = queryParams['selectedTitle'];
    this.selectedDescription = queryParams['selectedDescription'];
    this.selectedVideoImage = queryParams['selectedVideoImage']; // Richtiges Feld verwenden
    console.log('selectedVideoImage',this.selectedVideoImage);
  });

}

  playMovie () {
          //Hier navigieren wir zur ShowMovieComponent und übergeben die ausgewählten Daten
    this.router.navigate(['/show-movie'], { queryParams: { selectedVideo: JSON.stringify(this.selectedVideo) } });
 } 
}
