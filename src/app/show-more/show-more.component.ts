import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  @Input() text: string = '';
  @Input() limit: number = 100;
  isExpanded: boolean = false;
  truncatedText: string = '';
  fullText: string = '';

  ngOnInit(): void {
    this.fullText = this.text;
    this.truncatedText = this.text.length > this.limit ? this.text.substring(0, this.limit) + '...' : this.text;
  }

  toggleText() {
    this.isExpanded = !this.isExpanded;
  }
}
