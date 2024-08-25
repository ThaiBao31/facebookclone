import { Component } from '@angular/core';

interface MenuItem{
  name: string;
  iconUrl: string;
}

interface SidebarItem {
  iconUrl: string;
  text: string;
}



@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent {
  menuItems: MenuItem[] = [
    { name: 'Thái Bảo', iconUrl: 'bi-person-circle' },
    { name: 'Bạn bè', iconUrl: 'bi-people' },
    { name: 'Kỷ niệm', iconUrl: 'bi-clock-history' },
    { name: 'Đã lưu', iconUrl: 'bi-bookmark' },
    { name: 'Nhóm', iconUrl: 'bi-people-fill' },
    { name: 'Video', iconUrl: 'bi-camera-video' },
    { name: 'Xem thêm', iconUrl: 'bi-chevron-down' }
  ];

  sidebarItems: SidebarItem[] = [
    { iconUrl: '/fb-as/pp/src/assets/abc.jpg', text: 'Sinh viên thực tập FPT' },
    { iconUrl: 'asset/left-sidebar-image/leftsidebar1.jpg', text: 'Chia sẻ kinh nghiệm luyện thi TOIEC' },
    { iconUrl: '/fb-app/src/assets/abc.jpg', text: 'Góc thông tin NEU' },
    { iconUrl: '/fb-app/src/assets/abc.jpg', text: 'Tuyển dụng thực tập IT' },
    { iconUrl: '/fb-app/src/assets/abc.jpg', text: 'Cafe Đường phố' }
];

}
