import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://herlina-pfeiffer.developerakademie.org/api/video/videos/';

  constructor(private http: HttpClient) { }
    getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getVideoById(id: number): Observable<any> {
    const videoUrl = `${this.apiUrl}${id}/`;
    return this.http.get<any>(videoUrl);
  }

  createVideo(videoData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, videoData);
  }

  updateVideo(id: number, videoData: any): Observable<any> {
    const videoUrl = `${this.apiUrl}${id}/`;
    return this.http.put<any>(videoUrl, videoData);
  }

  deleteVideo(id: number): Observable<any> {
    const videoUrl = `${this.apiUrl}${id}/`;
    return this.http.delete<any>(videoUrl);
  }
}
