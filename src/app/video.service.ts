import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Video {
  id: number;
  user: string;
  time: string;
  content: string;
  image: string;
  imagecontent: string;
  likes: number;
  comments: number;
  share: number;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private postUrl = 'assets/video.json';

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Video[]> {
    return this.http.get<Video[]>(this.postUrl);
  }
}
