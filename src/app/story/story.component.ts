import { Component } from '@angular/core';

interface StoriesList{
  image: string;
  name: string;
  avatar : string
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  storieslist: StoriesList[] = [
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories1.jpg', name: 'Do Huu Truong' },
    { avatar: 'assets/stories-image/avatar2.jpg' , image: 'assets/stories-image/stories2.jpg', name: 'Phương Đen0' },
    { avatar: 'assets/stories-image/avatar3.jpg' , image: 'assets/stories-image/stories3.jpg', name: 'Bảo Ngọc' },
    { avatar: 'assets/stories-image/avatar4.jpg' , image: 'assets/stories-image/stories4.jpg', name: 'Dieu Anh' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' },
    { avatar: 'assets/stories-image/avatar1.jpg' , image: 'assets/stories-image/stories.jpg', name: 'Nguyenn Duc' }

  ];
}
