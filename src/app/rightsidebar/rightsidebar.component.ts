import { Component } from '@angular/core';

interface ListFriend{
  name: string;
  img : string;
}

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent {
  listfriend: ListFriend[] = [
    {name:'Linh Vũ', img:'assets/right-sidebar-image/avatar1.jpg'},
    {name:'Phương Đen', img:'assets/right-sidebar-image/avatar2.png'},
    {name:'Đạt Đen', img:'assets/right-sidebar-image/avatar3.jpg'},
    {name:'Do Huu Truong', img:'assets/right-sidebar-image/avatar4.jpg'},
    {name:'Phạm Lê Đức', img:'assets/right-sidebar-image/avatar5.jpg'},
    {name:'Đỗ Quang Thành', img:'assets/right-sidebar-image/avatar6.jpg'},
    {name:'Tạ Duy Khánh', img:'assets/right-sidebar-image/avatar7.jpg'},
    {name:'Đỗ Đức', img:'assets/right-sidebar-image/avatar8.jpg'},
    {name:'Phan Hoang', img:'assets/right-sidebar-image/avatar9.jpg'},
    {name:'Ngoc Huyen', img:'assets/right-sidebar-image/avatar10.jpg'}
  ];
}
