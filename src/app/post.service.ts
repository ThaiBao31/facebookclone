import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
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
export class PostService {

  private postUrl = 'assets/post.json';

  constructor(private http:HttpClient){

  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
}
