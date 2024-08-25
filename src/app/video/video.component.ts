import { Component,OnInit } from '@angular/core';
import { VideoService } from '../video.service';

interface listtitle{
  icon: string;
  title: string;
}

export interface listvideo{
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

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
 Listtitle: listtitle[] = [
  {icon:'bi-collection-play-fill', title:'Trang chủ'},
  {icon:'bi-camera-reels-fill', title:'Trực tiếp'},
  {icon:'bi-file-play-fill', title:'Reels'},
  {icon:'bi-postcard-fill', title:'Chương trình'},
  {icon:'bi-rocket-takeoff-fill', title:'Khám phá'},
  {icon:'bi-save-fill', title:'Video đã lưu'}

 ];

 videos:listvideo[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getPosts().subscribe(
      (data: listvideo[]) => {
        this.videos = data;
      },
      error => {
        console.error('Error fetching posts: ', error);
      }
    );
}


}
