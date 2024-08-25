import { Component } from '@angular/core';

interface listtitle{
  icon: string;
  title: string;
}

interface listcategory{
  icon: string;
  title: string;
}

interface listitem{
  img: string;
  name: string;
  contact: string;
  des: string;
}


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  Listtitle: listtitle[] = [
    {icon:'bi-shop-window', title:'Lướt xem tất cả'},
    {icon:'bi-bell-fill', title:'Thông báo'},
    {icon:'bi-envelope-fill', title:'Hộp thư'},
    {icon:'bi-bag-fill', title:'Đang mua'},
    {icon:'bi-tag-fill', title:'Bán hàng'},
   ];

   Listcategory: listcategory[] = [
    {icon:'bi-car-front-fill', title:'Xe cộ'},
    {icon:'bi-cash-coin', title:'Tài sản cho thuê'},
    {icon:'bi-bank2', title:'Bán nhà'},
    {icon:'bi-bag-fill', title:'Dụng cụ sửa chữa nhà cửa'},
    {icon:'bi-heart-fill', title:'Gia đình'},
    {icon:'bi-scooter', title:'Giải trí'},
    {icon:'bi-cloud-fill', title:'Làm vườn & hoạt động ngoài trời'},
    {icon:'bi-music-note-beamed', title:'Nhạc cụ'},
    {icon:'bi-tag-fill', title:'Rao vặt'},
    {icon:'bi-pentagon-fill', title:'Sản phẩm miễn phí'},
    {icon:'bi-bicycle', title:'Sản phẩm thể thao'},
    {icon:'bi-tag-fill', title:'Sở thích'},
    {icon:'bi-pencil-fill', title:'Văn phòng phẩm'},
    {icon:'bi-tag-fill', title:'Đồ chơi & trò chơi'},
    {icon:'bi-tag-fill', title:'Đồ dùng cho thú cưng'},
    {icon:'bi-house-fill', title:'Đồ gia dụng'},
    {icon:'bi-tag-fill', title:'Đồ may mặc'},
    {icon:'bi-phone-fill', title:'Đồ điện tử'}
   
   ];


   Listitem: listitem[]=[
    {img:'assets/market-image/item1.jpg', name:'Liên hê người bán', contact:'Mình có màn', des:'Chơ chuyên Pc & linh kiện'},
    {img:'assets/market-image/item2.jpg', name:'2đ', contact:'Rover HSE', des:'CHỢ ÔTÔ MIỀN BẮC'},
    {img:'assets/market-image/item3.jpg', name:'2đ', contact:'Bán Gấp Xe mới mua dc 1 tuần con em ko tới chân', des:'Mua bán xe đạp cũ giá rẻ Hà Nội'},
    {img:'assets/market-image/item4.jpg', name:'Miễn phí', contact:'Jordan', des:'CHỢ GIÀY CŨ CHÍNH HÃNG'},
    {img:'assets/market-image/item5.jpg', name:'Liên hê người bán', contact:'Mua Bán Xe Máy Giá Rẻ Đà Nẵng', des:'Đà Nẵng'},
    {img:'assets/market-image/item6.jpg', name:'3đ', contact:'King DJ', des:'Hà Nội'},
    {img:'assets/market-image/item7.jpg', name:'400đ', contact:'ng', des:'Chợ Đồng Hồ - Đồ Trang Trí Cổ'},
    {img:'assets/market-image/item8.jpg', name:'Liên hê người bán', contact:'Mua Bán Trao Đổi Ôtô Cũ Mới Hà Nội', des:'Hà Nội'},
    {img:'assets/market-image/item9.jpg', name:'4.000.000 ₫', contact:'Z flip 4', des:'Co Ngoa, Ha Noi, Vietnam'},
    {img:'assets/market-image/item10.jpg', name:'Liên hê người bán', contact:'Mua Bán Xe Máy Giá Rẻ Đà Nẵng', des:'Đà Nẵng'},
    {img:'assets/market-image/item11.jpg', name:'450.000 ₫', contact:'Chíp máy chủ.', des:'Yen Nguu, Ha Noi'},
    {img:'assets/market-image/item12.jpg', name:'Liên hê người bán', contact:'Gi', des:'Chợ Bóng Bàn Việt Nam'},

   ];
}














