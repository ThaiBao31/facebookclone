import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostService } from '../post.service';


interface listtitle{
  icon: string;
  title: string;
}

interface grouplist{
  img: string;
  title: string;
  des: string;
}

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
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit{

    Listtitle: listtitle[]=[
      {icon:'bi-card-heading', title:'Bảng feed của bạn'},
      {icon:'bi-compass-fill', title:'Khám phá'},
      {icon:'bi-people-fill', title:'Nhóm của bạn'},

    ];

    Grouplist: grouplist[]=[
      {img:'assets/group-image/group1.jpg',title:'Lớp chọn TN 1 khóa 2017-2020',des:'Lần hoạt động gần nhất: 2 năm trước'},
      {img:'assets/group-image/group3.png',title:'VGA siêu rẻ VN -Chợ PC',des:'Lần hoạt động gần nhất: 2 giờ trước'},
      {img:'assets/group-image/group4.jpg',title:'GenXYZ',des:'Lần hoạt động gần nhất: 11 giờ trước'},
      {img:'assets/group-image/group2.jpg',title:'Lớp chọn bóng rổ nam k62',des:'Lần hoạt động gần nhất: 2 năm trước'},
      {img:'assets/group-image/group5.png',title:'Reeview công nghệ',des:'Lần hoạt động gần nhất: 1 năm trước'},
      {img:'assets/group-image/group6.jpg',title:'ITA',des:'Lần hoạt động gần nhất: 1 năm trước'},
    

    ];

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

