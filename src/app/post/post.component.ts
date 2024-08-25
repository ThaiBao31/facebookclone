import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

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

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data.map(post => {
          post.imagecontent = post.imagecontent.slice(0, 3); // Giới hạn số lượng ảnh hiển thị
          return post;
        });
      },
      error => {
        console.error('Error fetching posts: ', error);
      }
    );
  }

  getImageClass(index: number, length: number): string {
    if (length === 2) {
      return 'half';
    }
    if (length === 3) {
      if (index === 0) {
        return 'large';
      } else {
        return 'small';
      }
    }
    return '';
  }

}
