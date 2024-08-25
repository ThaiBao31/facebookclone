import { Component } from '@angular/core';

interface listtitle{
  icon: string;
  title: string;
}

interface category{
  icon: string;
  title: string;
}

interface listgame{
  img: string;
  name: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  Listtitle: listtitle[]=[
    {icon:'bi-controller', title:'Chơi game'},
    {icon:'bi-person-circle', title:'Hoạt động trong game'},
    {icon:'bi-bell-fill', title:'Thông báo'},

  ];

  Category: category[] = [
    {icon:'bi-collection-play-fill', title:'Tất cả game'},
    {icon:'bi-camera-reels-fill', title:'Hành động'},
    {icon:'bi-file-play-fill', title:'Phiêu lưu'},
    {icon:'bi-hammer', title:'Chiến đấu'},
    {icon:'bi-rocket-takeoff-fill', title:'Dùng bàn'},
    {icon:'bi-hospital-fill', title:'Xây dựng'},
    {icon:'bi-nvidia', title:'Đánh bài'},
    {icon:'bi-bicycle', title:'Đua xe'},
   ];

   Listgame :listgame[] = [
    {img:'assets/game-image/game1.jpg',name:'Sâm lốc Cyber'},
    {img:'assets/game-image/game2.jpg',name:'Poker Cybergame'},
    {img:'assets/game-image/game3.jpg',name:'Krytoi Texas Poker'},
    {img:'assets/game-image/game4.jpg',name:'Poker Live'},
    {img:'assets/game-image/game5.jpg',name:'Winning Poker Instant'},
    {img:'assets/game-image/game6.png',name:'Phỏm Tá Lả Cybergame'},
    {img:'assets/game-image/game7.jpg',name:'Mậu Binh Cybergame'},
    {img:'assets/game-image/game8.jpg',name:'Lucky 9 Cybergame'},
    {img:'assets/game-image/game9.jpg',name:'Cờ vua'},
    {img:'assets/game-image/game10.jpg',name:'Cờ Tỷ Phú Zagoo'},
    {img:'assets/game-image/game11.png',name:'Binh Xập Xám'},
    {img:'assets/game-image/game12.jpg',name:'Cờ tướng'},
    {img:'assets/game-image/game13.png',name:'Tá Lả ZingPlay'},
    {img:'assets/game-image/game14.png',name:'EverWing'},
    {img:'assets/game-image/game15.png',name:'Phỏm - Tá lả'}


   ];
}
