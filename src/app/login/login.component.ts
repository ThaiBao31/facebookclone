import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface FooterLanguage {
  name: string;
  url: string;
}

interface FooterLink {
  title: string;
  url: string;
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private router: Router) {}


  goToMain() {
   
    this.router.navigate(['/main']);
  }

  footerLanguages: FooterLanguage[] = [
    { name: "Tiếng Việt", url: "#" },
    { name: "English (UK)", url: "#" },
    { name: "中文(台灣)", url: "#" },
    { name: "한국어", url: "#" },
    { name: "日本語", url: "#" },
    { name: "Français (France)", url: "#" },
    { name: "Español", url: "#" },
    { name: "Português (Brasil)", url: "#" },
    { name: "Deutsch", url: "#" },
    { name: "Italiano", url: "#" }
];

 footerLinks: FooterLink[] = [
  { title: "Đăng ký", url: "#" },
  { title: "Đăng nhập", url: "#" },
  { title: "Messenger", url: "#" },
  { title: "Facebook Lite", url: "#" },
  { title: "Watch", url: "#" },
  { title: "Địa điểm", url: "#" },
  { title: "Trò chơi", url: "#" },
  { title: "Marketplace", url: "#" },
  { title: "Meta Pay", url: "#" },
  { title: "Meta Store", url: "#" },
  { title: "Meta Quest", url: "#" },
  { title: "Meta AI", url: "#" },
  { title: "Instagram", url: "#" },
  { title: "Threads", url: "#" },
  { title: "Chiến dịch gây quỹ", url: "#" },
  { title: "Dịch vụ", url: "#" },
  { title: "Trung tâm thông tin bỏ phiếu", url: "#" },
  { title: "Chính sách quyền riêng tư", url: "#" },
  { title: "Điều khoản", url: "#" },
  { title: "Giới thiệu", url: "#" },
  { title: "Tạo quảng cáo", url: "#" },
  { title: "Tạo Trang", url: "#" },
  { title: "Nhà phát triển", url: "#" },
  { title: "Tuyển dụng", url: "#" },
  { title: "Cookie", url: "#" },
  { title: "Lựa chọn quảng cáo", url: "#" },
  { title: "Trợ giúp", url: "#" },
  { title: "Tải thông tin lên & đối tượng không phải người dùng", url: "#" }
];


}
