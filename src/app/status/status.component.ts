import { Component } from '@angular/core';

interface statusItem{
  urlIcon: string;
  name: string;

}


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  statusitem: statusItem[] =[
    {urlIcon: 'bi-camera-reels-fill', name:'Video trực tuyến'},
    {urlIcon: 'bi-images', name:'Ảnh/video'},
    {urlIcon: 'bi-emoji-laughing', name:'Cảm xúc/hoạt động'},
  ];
}
