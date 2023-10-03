import { Component } from '@angular/core';
import {PublicService} from './services/public.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VideoflixFrontend';
  msg: any;

  constructor(public pService: PublicService){
  }
  ngOnInit(): void {
  this.showMessage();
  }

  showMessage(){
    this.pService.getMessage().subscribe(data => {
      this.msg = data,
        console.log(this.msg);
  });
}
}
